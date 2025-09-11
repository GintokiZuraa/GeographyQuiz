import { defineCommand } from "../Command";
import { EMOJI } from "../constants";
import { provinsis } from "../data/provinsis";
import { createGame, startGame, games, stopGame } from "../services/gameManager";
import { reply } from "../utils";

function pickRandomQuestions(num: number) {
    const entries = Object.entries(provinsis);
    const shuffled = entries.sort(() => 0.5 - Math.random()).slice(0, num);
    return shuffled.map(([_, q]) => ({
        image_url: q.image_url,
        question: q.question,
        answer: q.answer
    }));
}

function formatScores(scores: Record<string, number>, totalQuestions: number): string {
    const sorted = Object.entries(scores)
        .sort(([, a], [, b]) => b - a)
        .map(([userId, score], index) => 
            `${index + 1}. <@${userId}>: ${EMOJI.points} ${score} points`
        );
    
    return sorted.join('\n') || 'No one scored any points!';
}

defineCommand({
    name: "province",
    description: `Start a province ${EMOJI.province} guessing game`,
    aliases: ["prov"],
    usages: ["<num>", "start",],
    async run(message, args) {
        const sub = args[0];

    
        if (!sub || !isNaN(Number(sub))) {
            const num = Math.min(Number(sub) || 5, 10);

           
            const existing = [...games.values()].find(
                g => g.channelId === message.channel!.id && !g.started
            );
            if (existing) return reply(message, "A game is already waiting in this channel.");

            const questions = pickRandomQuestions(num);
            const game = createGame(message.author.id, "province", questions, message.channel!.id);

            return reply(message, {
                embeds: [
                    {
                        title: `${EMOJI.province} New Province Game`,
                        description: `Host: <@${message.author.id}>\nPlayers can join with \`Geo join\`\nHost can start with \`Geo province start\` (within 1 minute).`,
                        color: 0x5865f2
                    }
                ]
            });
        }


        if (sub === "start") {
            let game = [...games.values()].find(
                g => g.channelId === message.channel!.id && g.hostId === message.author.id && !g.started
            );
            if (!game) return reply(message, "No waiting game found in this channel.");

            game = startGame(game.id)!;

            const q = game.questions[game.currentIndex];
            return reply(message, {
                embeds: [
                   {
                        title: `${EMOJI.province} Question 1/${game.questions.length}`,
                        description: q.question,
                        ...(q.image_url ? { image: { url: q.image_url! } } : {}),
                        color: 0x57f287,
                        footer: { text: "Game will automatically end in 5 minutes" }
                    }
                ]
            });
        }

        
    }
});