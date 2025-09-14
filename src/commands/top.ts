import { defineCommand } from "../Command";
import { getTopPlayers, getTotalPlayers } from "../services/scoreServices";
import { reply } from "../utils";
import { client } from "../Client";

defineCommand({
    name: "top",
    description: "Show top global rankings by total points",
    aliases: ["leaderboard", "rankings", "topglobal"],
    usages: ["", "[page]"],
    hidden: true,
    async run(message, args) {
        try {
            const page = Math.max(1, parseInt(args[0]) || 1);
            const limit = 15; 
            const startIndex = (page - 1) * limit;
            const endIndex = startIndex + limit;

            const allPlayers = await getTopPlayers(1000); 
            const totalPlayers = await getTotalPlayers(); 
            const totalPages = Math.ceil(totalPlayers / limit);

            if (page > totalPages) {
                return reply(message, {
                    embeds: [
                        {
                            title: "GLOBAL LEADERBOARD",
                            description: `Page ${page} does not exist. There are only ${totalPages} pages.`,
                            color: 0xff0000
                        }
                    ]
                });
            }

            const pagePlayers = allPlayers.slice(startIndex, endIndex);

            if (pagePlayers.length === 0) {
                return reply(message, {
                    embeds: [
                        {
                            title: "GLOBAL LEADERBOARD",
                            description: "No players found in the rankings yet.",
                            color: 0xfee75c
                        }
                    ]
                });
            }

            const leaderboardText = await Promise.all(
                pagePlayers.map(async (player, index) => {
                    const globalRank = startIndex + index + 1;
                    try {
                        const user = await client.rest.users.get(player.userId);
                        return `**${globalRank}.** **${user.username}** — ${player.title} — **${player.totalPoints}** points`;
                    } catch {
                        return `**${globalRank}.** User ${player.userId} — ${player.title} — **${player.totalPoints}** points`;
                    }
                })
            );

            return reply(message, {
                embeds: [
                    {
                        title: "GLOBAL LEADERBOARD",
                        description: leaderboardText.join('\n'),
                        color: 0x0099ff,
                        footer: { 
                            text: `Page ${page}/${totalPages} — Top players by total points` 
                        },
                    }
                ]
            });

        } catch (error) {
            return reply(message, "An error occurred while fetching the leaderboard.");
        }
    }
});