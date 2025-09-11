import { defineCommand } from "../Command";
import { games, skipQuestion, stopGame } from "../services/gameManager";
import { reply } from "../utils";
import { addScore } from "../services/scoreServices";
import { EMOJI } from "../constants";
import {formatScores} from "../modules/gameEvents";


const skipCooldowns = new Map<string, number>();
const COOLDOWN_TIME = 10000; 

function checkCooldown(userId: string): { onCooldown: boolean; remaining: number } {
    const lastSkip = skipCooldowns.get(userId);
    if (!lastSkip) return { onCooldown: false, remaining: 0 };

    const now = Date.now();
    const elapsed = now - lastSkip;
    const remaining = COOLDOWN_TIME - elapsed;

    return {
        onCooldown: elapsed < COOLDOWN_TIME,
        remaining: remaining > 0 ? remaining : 0
    };
}

function formatCooldown(ms: number): string {
    const seconds = Math.ceil(ms / 1000);
    return `${seconds} second${seconds !== 1 ? 's' : ''}`;
}

defineCommand({
    name: "skip",
    description: "Skip the current question in an active game (10s cooldown)",
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
                        description: `You can skip again in **${formatCooldown(cooldown.remaining)}**`,
                        color: 0xfee75c,
                        footer: { text: "Skip cooldown: 10 seconds" }
                    }
                ]
            });
        }

        const answer = skipQuestion(game.id);
        if (!answer) return reply(message, "No question to skip.");

        
        skipCooldowns.set(message.author.id, Date.now());

        
        if (game.currentIndex >= game.questions.length) {
           
            const result = await stopGame(game.id); 
            if (!result) return reply(message, "Failed to end the game.");

           
            for (const [uid, pts] of Object.entries(result.scores)) {
                await addScore(uid, result.game.category, pts);
            }

            return reply(message, {
                embeds: [
                    {
                        title: `${EMOJI.skip} Skipped - Game Over!`,
                        description: `Answer was: **${answer}**\n\n**Final Scores:**\n${formatScores(result.scores, result.game.category, result.game)}`,
                        color: 0xfee75c,
                        footer: { text: "Scores have been saved" }
                    }
                ]
            });
        }

        const q = game.questions[game.currentIndex];
        return reply(message, {
            embeds: [
                {
                    title: `${EMOJI.skip} Skipped!`,
                    description: `Answer was: **${answer}**`,
                    color: 0xfee75c,
                    footer: { text: "Skip cooldown: 10 seconds" }
                },
                {
                    title: `Next Question (${game.currentIndex + 1}/${game.questions.length})`,
                    description: q.question,
                    ...(q.image_url ? { image: { url: q.image_url } } : {}),
                    color: 0x57f287
                }
            ]
        });
    }
});