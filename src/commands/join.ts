import { defineCommand } from "../Command";
import { games } from "../services/gameManager";
import { reply } from "../utils";

defineCommand({
    name: "join",
    description: "Join the current game in this channel",
    usages: [],
    hidden: true,
    async run(message) {
        const game = [...games.values()].find(
            g => g.channelId === message.channel!.id && !g.started
        );
        if (!game) return reply(message, "No waiting game in this channel.");

        if (game.players.has(message.author.id)) {
            return reply(message, "You already joined this game.");
        }

        game.players.add(message.author.id);

        const playersList = [...game.players]
            .map(id => `<@${id}>`)
            .join(", ");

        return reply(message, {
            embeds: [
                {
                    title: "👥 Player Joined",
                    description: `${message.author.mention} joined!\n\n**Players:**\n${playersList}`,
                    color: 0x5865f2
                }
            ]
        });
    }
});
