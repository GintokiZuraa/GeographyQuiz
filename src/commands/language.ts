import { defineCommand } from "../Command";
import { EMOJI } from "../constants";
import { languages } from "../data/languages";
import { createGame, startGame, games, stopGame } from "../services/gameManager";
import { reply } from "../utils";

function pickRandomQuestions(num: number) {
    const entries = Object.entries(languages);
    const shuffled = entries.sort(() => 0.5 - Math.random()).slice(0, num);
    return shuffled.map(([languageName, languageData]) => {
      
        const randomSentence = languageData.sentences[
            Math.floor(Math.random() * languageData.sentences.length)
        ];
        
        return {
            question: `${languageData.question}\n\n"${randomSentence}"`,
            answer: languageData.answer
        };
    });
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
    name: "language",
    description: `Start a language ${EMOJI.language} guessing game`,
    aliases: ["lang"],
    usages: ["<num>", "start"],
    async run(message, args) {
        const sub = args[0];

        if (!sub || !isNaN(Number(sub))) {
            const num = Math.min(Number(sub) || 5, 15);

          
            const existing = [...games.values()].find(
                g => g.channelId === message.channel!.id && !g.started
            );
            if (existing) return reply(message, "A game is already waiting in this channel.");

            const questions = pickRandomQuestions(num);
            const game = createGame(message.author.id, "language", questions, message.channel!.id);

            return reply(message, {
                embeds: [
                    {
                        title: `${EMOJI.language} New Language Game`,
                        description: `Host: <@${message.author.id}>\nPlayers can join with \`Geo join\`\nHost can start with \`Geo language start\` (within 1 minute).`,
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
                        title: `${EMOJI.language} Question 1/${game.questions.length}`,
                        description: q.question,
                        color: 0x57f287,
                        footer: { text: "Game will automatically end in 5 minutes" }
                    }
                ]
            });
        } 
    }
});