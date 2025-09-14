import { defineCommand } from "../Command";
import { refreshLeaderboardCache, resetLeaderboardCache } from "../services/scoreServices";
import { reply } from "../utils";

defineCommand({
    name: "forceupdateleaderboard",
    description: "Force update the leaderboard cache (Owner only)",
    aliases: ["refreshleaderboard", "updateleaderboard", "ful"],
    ownerOnly: true, 
    async run(message) {
        try {

            resetLeaderboardCache();

            await refreshLeaderboardCache();
            return reply(message, " Leaderboard cache has been force updated!");
        } catch (error) {
            return reply(message, " An error occurred while force updating the leaderboard.");
        }
    }
});