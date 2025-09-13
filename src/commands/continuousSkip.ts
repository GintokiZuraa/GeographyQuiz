import { defineCommand } from "../Command";
import { EMOJI } from "../constants";
import { reply } from "../utils";
import { skipContinuousQuestion, isContinuousGameChannel, getCurrentQuestionAnswer } from "../services/continuousGame";

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
    name: "continuousskip",
    description: "Skip the current question in continuous game (10s cooldown)",
    aliases: ["cskip", "skipc"],
    usages: [],
    hidden: true,
    async run(message) {
     
        if (!message.channel || !isContinuousGameChannel(message.channel.id)) {
            return reply(message, "This command only works in continuous game channels.");
        }

   
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

      
        const currentAnswer = getCurrentQuestionAnswer(message.channel.id);
        
      
        const skippedAnswer = skipContinuousQuestion(message.channel.id);
        
        if (!skippedAnswer) {
            return reply(message, "Failed to skip the question.");
        }

     
        skipCooldowns.set(message.author.id, Date.now());

        return reply(message, {
            embeds: [
                {
                    title: `${EMOJI.skip} Question Skipped!`,
                    description: `The answer was: **${skippedAnswer}**`,
                    color: 0xfee75c,
                    footer: { text: "Skip cooldown: 10 seconds" }
                }
            ]
        });
    }
});