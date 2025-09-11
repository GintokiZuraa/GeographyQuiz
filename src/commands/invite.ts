import { defineCommand } from "../Command";
import { EMOJI } from "../constants";
import { reply } from "../utils";

const BOT_INVITE = "https://discord.com/oauth2/authorize?client_id=1358962099564318802";
const SUPPORT_SERVER = "https://discord.gg/rzKZY88XEm";

defineCommand({
    name: "invite",
    description: "Show bot invite link and support server",
    aliases: ["support", "link", "links"],
    usages: [""],
    hidden: true,
    async run(message) {
        return reply(message, {
            embeds: [
                {
                    title: `${EMOJI.geoguessr} Invite & Support`,
                    color: 0x00aeff,
                    fields: [
                        {
                            name: `${EMOJI.geoguessr} Invite the Bot`,
                            value: `[Click here to invite me](${BOT_INVITE})`
                        },
                        {
                            name: `${EMOJI.geoguessr} Support Server`,
                            value: `[Join our server here](${SUPPORT_SERVER})`
                        }
                    ],
                   
                }
            ]
        });
    }
});
