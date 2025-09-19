import { Message } from "oceanic.js";
import { client } from "../Client";
import { IDLEFARM_ID } from "../constants";
import { prisma } from "../Prisma";
import { numberFormat, reply } from "../utils";

client.on("messageCreate", idleI);
client.on("messageUpdate", idleI);

async function idleI(message: Message) {
    if (message.timestamp.getTime() < Date.now() - 120000) return;
    if (message.author.id !== IDLEFARM_ID) return;
    if (!message.embeds[0]?.author?.name.endsWith(" — inventory")) return;

    const invField = message.embeds[0].fields?.find(field => field.name === "")?.value;
    if (!invField) return;

    const invItems = invField.match(/(?<=\*\*).+?(?=\*\*:)/g);
    if (!invItems) return;

    const today0UTC = new Date().setUTCHours(0, 0, 0, 0);

    const outdated = await prisma.idleItem.findMany({ where: { lastUpdate: { lt: today0UTC } } });
    if (outdated.length) {
        return reply(message, {
            embeds: [
                {
                    title: "⚠️ Outdated Items",
                    description: outdated.map(item => `• ${item.name}`).join("\n"),
                    color: 0xed4245, // red
                    timestamp: new Date().toISOString()
                }
            ]
        });
    }

    const idleItems = await prisma.idleItem.findMany({
        where: { name: { in: invItems } },
        orderBy: { percent: "desc" }
    });
    if (!idleItems.length) return;

    try {
        let pageName = message.embeds[0].fields?.[0]?.name ?? "";

        pageName = pageName
            .replace(/<a?:\w+:\d+>/g, "")
            .replace(/:[a-zA-Z0-9_]+:/g, "")
            .trim();

        let regex: RegExp;
        if (pageName.startsWith("⚠️ Debt items")) {
            regex = /(?<=\*\*.+?\*\*: -)[\d,]+/g; 
        } else {
            regex = /(?<=\*\*.+?\*\*: )[\d,]+/g; 
        }

        const invAmounts = invField.match(regex)?.map(a => Number(a.replace(/,/g, "")));
        if (!invAmounts) return;

        const itemWorths = invAmounts.map((amount, i) => {
            const price = idleItems.find(item => item.name === invItems[i])?.price;
            return amount * (price || 0);
        });

        let totalValue = itemWorths.reduce((acc, v) => acc + v, 0);
        let totalLine: string;

        if (pageName.startsWith("⚠️ Debt items")) {
            totalLine = `**Total debt:** ${numberFormat(totalValue)}`;
        } else {
            const afterTax = Math.floor(totalValue * 0.8);
            totalLine = `**Total worth:** ${numberFormat(afterTax)} *(after 20% tax)*`;
        }

        const longestWorth = Math.max(...itemWorths.map(w => numberFormat(w).length));

        idleItems.forEach(item => {
            const index = invItems.indexOf(item.name);
            if (index === -1) return;

            const worth = itemWorths[index];
            if (worth > 0) {
                item.note = `${numberFormat(worth).padStart(longestWorth, " ")}  ${item.note ?? ""}`;
            } else {
                item.note = `${numberFormat(0).padStart(longestWorth, " ")}  ${item.note ?? ""}`;
            }
        });

        const fields = idleItems.map(item => ({
            name: item.name,
            value: item.note || "—",
            inline: true
        }));

        await reply(message, {
            embeds: [
                {
                    title: pageName || "Idle Inventory",
                    description: totalLine,
                    color: 0x57f287, 
                    fields,
                    timestamp: new Date().toISOString()
                }
            ]
        });
    } catch (error) {
        if (!(error instanceof Error)) return;
        await reply(message, {
            embeds: [
                {
                    title: " Error",
                    description: error.message,
                    color: 0xed4245,
                    timestamp: new Date().toISOString()
                }
            ]
        });
    }
}