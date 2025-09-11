import { defineCommand } from "../Command"; 
import { games, stopGame } from "../services/gameManager";
import { reply } from "../utils";
import { addScore } from "../services/scoreServices";
import { EMOJI } from "../constants";
import { formatScores } from "../modules/gameEvents"; 


const stopCooldowns = new Map<string, number>();
const COOLDOWN_TIME = 5 * 60 * 1000; 

function checkCooldown(userId: string): { onCooldown: boolean; remaining: number } {
    const lastStop = stopCooldowns.get(userId);
    if (!lastStop) return { onCooldown: false, remaining: 0 };

    const now = Date.now();
    const elapsed = now - lastStop;
    const remaining = COOLDOWN_TIME - elapsed;

    return {
        onCooldown: elapsed < COOLDOWN_TIME,
        remaining: remaining > 0 ? remaining : 0
    };
}

function formatCooldown(ms: number): string {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.ceil((ms % 60000) / 1000);

    if (minutes > 0) {
        return `${minutes}m ${seconds}s`;
    }
    return `${seconds}s`;
}

defineCommand({
    name: "stop",
    description: "Stop the current game in this channel (5m cooldown)",
    usages: [],
    hidden: true,
    async run(message) {
        const game = [...games.values()].find(
            g => g.channelId === message.channel!.id && g.started
        );
        if (!game) return reply(message, "No active game in this channel.");

       
        const cooldown = checkCooldown(message.author.id);
        if (cooldown.onCooldown) {
            return reply(message, {
                embeds: [
                    {
                        title: `${EMOJI.cd} Cooldown Active`,
                        description: `You can stop again in **${formatCooldown(cooldown.remaining)}**`,
                        color: 0xfee75c,
                        footer: { text: "Stop cooldown: 5 minutes" }
                    }
                ]
            });
        }

        
        stopCooldowns.set(message.author.id, Date.now());

        const result = await stopGame(game.id);
        if (!result) return reply(message, "Failed to stop the game.");

      
        for (const [uid, pts] of Object.entries(result.scores)) {
            await addScore(uid, result.game.category, pts);
        }

        return reply(message, {
            embeds: [
                {
                    title: `${EMOJI.game_over} Game Stopped ${EMOJI.game_over}`,
                    description: `**Final Scores & Rewards:**\n${formatScores(result.scores, result.game.category, result.game)}`,
                    color: 0xed4245,
                    footer: { text: `Stopped by ${message.author.username} | Scores and rewards saved` }
                }
            ]
        });
    }
});
