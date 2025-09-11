import { defineCommand } from "../Command";
import { reply } from "../utils";
import { EMOJI } from "../constants";
import { client } from "../Client"; 

defineCommand({
    name: "ascend",
    description: "Ascend to double your points gain (1 → 2)",
    usages: [""],
    async run(message) {
       
        await reply(message, {
            embeds: [
                {
                    title: "Ascend?",
                    description: `You may **double your points gain from 1 → 2**.\n\n**The cost:**\n- 1 ${EMOJI.geocoin} Geocoin\n- 1 ${EMOJI.geogems} Geogem\n- **999,999,999,999 ${EMOJI.points}**\n\nType \`yes\` to confirm or \`no\` to cancel.`,
                    color: 0xfee75c,
                    footer: { text: "Choose wisely..." },
                }
            ]
        });

   
        const filter = (m: any) => m.author.id === message.author.id && ["yes", "no"].includes(m.content.toLowerCase());

        const collector = new Promise<string>((resolve) => {
            const listener = (m: any) => {
                if (m.channel.id !== message.channel!.id) return;
                if (!filter(m)) return;

                client.removeListener("messageCreate", listener);
                resolve(m.content.toLowerCase());
            };

            client.on("messageCreate", listener);

           
            setTimeout(() => {
                client.removeListener("messageCreate", listener);
                resolve("timeout");
            }, 15000);
        });

        const result = await collector;

        if (result === "yes") {
            return reply(message, {
                embeds: [
                    {
                        title: "Ascension Failed",
                        description: `You don't have enough resources to ascend.\n\n**Required:**\n- 1 ${EMOJI.geocoin} Geocoin\n- 1 ${EMOJI.geogems} Geogem\n- **999,999,999,999 ${EMOJI.points}**`,
                        color: 0xff4757
                    }
                ]
            });
        } else if (result === "no") {
            return reply(message, {
                embeds: [
                    {
                        title: "Ascension Cancelled",
                        description: "You choose not to ascend. boring...",
                        color: 0x99aab5
                    }
                ]
            });
        } else {
            return reply(message, "No response. Ascension cancelled.");
        }
    }
});
