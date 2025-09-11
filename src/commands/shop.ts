import { defineCommand } from "../Command";
import { reply } from "../utils";
import { EMOJI } from "../constants";

const shopItems = [
    {
        id: 1,
        name: "Give hints in every question (QoL)",
        price: "7882749837834",
        currency: EMOJI.geogems
    },
    {
        id: 2,
        name: "Remove cooldown in skip and stop completely (QoL)",
        price: "7982749837834",
        currency: EMOJI.geogems
    },
    {
        id: 3,
        name: "`Rainbolt` title",
        price: "69669696996969",
        currency: EMOJI.geocoin
    }
];

defineCommand({
    name: "shop",
    description: "View the shop or attempt to buy items",
    usages: ["", "buy <id>"],
    hidden: true,
    async run(message, args) {
        if (!args[0]) {
            const description = shopItems
                .map(
                    item =>
                        `**${item.id}.** ${item.name} — **${item.price}** ${item.currency}`
                )
                .join("\n");

            return reply(message, {
                embeds: [
                    {
                        title: "GeoGuess Shop",
                        description,
                        color: 0xfee75c,
                        footer: { text: "Use Geo shop buy <id>" }
                    }
                ]
            });
        }

      
        if (args[0].toLowerCase() === "buy") {
            const id = parseInt(args[1]);
            const item = shopItems.find(i => i.id === id);

            if (!item) {
                return reply(message, `Invalid item ID. Use \`Geo shop\` to see the list.`);
            }

          
            return reply(message, {
                embeds: [
                    {
                        title: "Purchase Failed",
                        description: `You don't have enough ${
                            item.currency === EMOJI.geogems ? "Geogems" : "Geocoin"
                        } ${item.currency} to buy **${item.name}**.`,
                        color: 0xff0000
                    }
                ]
            });
        }
    }
});
