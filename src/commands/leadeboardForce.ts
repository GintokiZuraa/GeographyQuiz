import { defineCommand } from "../Command";
import { refreshLeaderboardCache } from "../services/scoreServices";
import { reply } from "../utils";

defineCommand({
    name: "forceupdateleaderboard",
    description: "Force update the leaderboard cache (Owner only)",
    aliases: ["refreshleaderboard", "updateleaderboard", "ful"],
    ownerOnly: true, 
    async run(message) {
        try {
            await refreshLeaderboardCache();
            return reply(message, "Leaderboard cache has been force updated!");
        } catch (error) {
            console.error("Error force updating leaderboard:", error);
            return reply(message, "An error occurred while force updating the leaderboard.");
        }
    }
});