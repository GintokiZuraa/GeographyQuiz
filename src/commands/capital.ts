import { defineCommand } from "../Command";
import { EMOJI } from "../constants";
import { capitals } from "../data/capitals";
import { createGame, startGame, games, stopGame, skipQuestion } from "../services/gameManager";
import { reply } from "../utils";


const typedCapitals = capitals as Record<string, Record<string, {
    question: string;
    answer: string[];
}>>;


function getAllCapitals() {
    const allCapitals: any[] = [];
    for (const region of Object.values(typedCapitals)) {
        for (const country of Object.values(region)) {
            allCapitals.push(country);
        }
    }
    return allCapitals;
}


function getCapitalsByRegion(regionName: string) {
  
    const regionKey = Object.keys(typedCapitals).find(
        key => key.toLowerCase() === regionName.toLowerCase()
    );
    
    if (!regionKey) return null;
    
    const region = typedCapitals[regionKey];
    return Object.values(region);
}

function pickRandomQuestions(num: number, region?: string) {
    let questions;
    
    if (region) {
      
        questions = getCapitalsByRegion(region);
        if (!questions || questions.length === 0) {
            return null; 
        }
    } else {
      
        questions = getAllCapitals();
    }
    
  
    const shuffled = questions.sort(() => 0.5 - Math.random()).slice(0, num);
    return shuffled.map(q => ({
        question: q.question,
        answer: q.answer
    }));
}

function formatScores(scores: Record<string, number>, totalQuestions: number): string {
    const sorted = Object.entries(scores)
        .sort(([, a], [, b]) => b - a)
        .map(([userId, score], index) => 
            `${index + 1}. <@${userId}>: ${EMOJI.capital} ${score} points`
        );
    
    return sorted.join('\n') || 'No one scored any points!';
}

defineCommand({
    name: "capital",
    description: `Start a capital city ${EMOJI.capital} guessing game`,
    aliases: ["cap"],
    usages: ["<num>", "<region> <num>", "start", "list"],
    async run(message, args) {
        const sub = args[0];

        
        if (!sub) {
            const regions = Object.keys(typedCapitals).map(r => r.charAt(0).toUpperCase() + r.slice(1));
            return reply(message, {
                embeds: [
                    {
                        title: `${EMOJI.capital} Capital Game Help`,
                        description: `Available commands:\n• \`capital <num>\` - Random capitals\n• \`capital <region> <num>\` - Specific region\n• \`capital start\` - Start game\n• \`capital list\` - Show regions\n\nAvailable regions: ${regions.join(', ')}`,
                        color: 0x5865f2
                    }
                ]
            });
        }

        
        if (sub === "list" || sub === "regions") {
            const regions = Object.keys(typedCapitals).map(r => r.charAt(0).toUpperCase() + r.slice(1));
            return reply(message, {
                embeds: [
                    {
                        title: `${EMOJI.capital} Available Regions`,
                        description: `Available regions for capital games:\n${regions.join(', ')}\n\nUse \`capital <region> <num>\` to play with specific region.`,
                        color: 0x5865f2
                    }
                ]
            });
        }

      
        if (!isNaN(Number(sub)) || (args[1] && !isNaN(Number(args[1])))) {
            let num: number;
            let region: string | undefined;
            
            if (!isNaN(Number(sub))) {
            
                num = Math.min(Number(sub) || 5, 15);
            } else {
                
                region = sub; 
                num = Math.min(Number(args[1]) || 5, 15);
            }

            
            const existing = [...games.values()].find(
                g => g.channelId === message.channel!.id && !g.started
            );
            if (existing) return reply(message, "A game is already waiting in this channel.");

            const questions = pickRandomQuestions(num, region);
            if (!questions) return reply(message, "Region not found or no capitals available.");

            const game = createGame(message.author.id, "capital", questions, message.channel!.id);

            let description = `Host: <@${message.author.id}>\nPlayers can join with \`Geo join\`\nHost can start with \`Geo capital start\` (within 1 minute).`;
            if (region) {
               
                const regionKey = Object.keys(typedCapitals).find(
                    key => key.toLowerCase() === region!.toLowerCase()
                );
                description += `\nRegion: **${regionKey ? regionKey.charAt(0).toUpperCase() + regionKey.slice(1) : region}**`;
            }

            return reply(message, {
                embeds: [
                    {
                        title: `${EMOJI.capital} New Capital City Game`,
                        description: description,
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
                        title: `${EMOJI.capital} Question 1/${game.questions.length}`,
                        description: q.question,
                        color: 0x57f287,
                        footer: { text: "Game will automatically end in 5 minutes" }
                    }
                ]
            });
        }
       

  
        const regions = Object.keys(typedCapitals).map(r => r.charAt(0).toUpperCase() + r.slice(1));
        return reply(message, {
            embeds: [
                {
                    title: "Invalid Command",
                    description: `Unknown command. Available commands:\n• \`capital <num>\`\n• \`capital <region> <num>\`\n• \`capital start\`\n• \`capital list\``,
                    color: 0xed4245
                }
            ]
        });
    }
});