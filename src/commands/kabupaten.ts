import { defineCommand } from "../Command";
import { EMOJI } from "../constants";
import { kabupatens } from "../data/kabupatens";
import { createGame, startGame, games, stopGame, skipQuestion } from "../services/gameManager";
import { reply } from "../utils";


const typedKabupatens = kabupatens as Record<string, Record<string, {
    image_url: string;
    question: string;
    answer: string[];
}>>;


function getAllKabupatens() {
    const allKabupatens: any[] = [];
    for (const province of Object.values(typedKabupatens)) {
        for (const kabupaten of Object.values(province)) {
            allKabupatens.push(kabupaten);
        }
    }
    return allKabupatens;
}


function getKabupatensByProvince(provinceName: string) {
   
    const provinceKey = Object.keys(typedKabupatens).find(
        key => key.toLowerCase() === provinceName.toLowerCase()
    );
    
    if (!provinceKey) return null;
    
    const province = typedKabupatens[provinceKey];
    return Object.values(province);
}

function pickRandomQuestions(num: number, province?: string) {
    let questions;
    
    if (province) {
      
        questions = getKabupatensByProvince(province);
        if (!questions || questions.length === 0) {
            return null; 
        }
    } else {
       
        questions = getAllKabupatens();
    }
    
   
    const shuffled = questions.sort(() => 0.5 - Math.random()).slice(0, num);
    return shuffled.map(q => ({
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
    name: "kabupaten",
    description: `Start a kabupaten ${EMOJI.kabupaten_provinsi} guessing game`,
    aliases: ["kab"],
    usages: ["<num>", "<province> <num>", "start", "list"],
    async run(message, args) {
        const sub = args[0];

     
        if (!sub) {
            const provinces = Object.keys(typedKabupatens).map(p => p.charAt(0).toUpperCase() + p.slice(1));
            return reply(message, {
                embeds: [
                    {
                        title: `${EMOJI.kabupaten_provinsi} Kabupaten Game Help`,
                        description: `Available commands:\n• \`kabupaten <num>\` - Random kabupatens\n• \`kabupaten <province> <num>\` - Specific province\n• \`kabupaten start\` - Start game\n• \`kabupaten list\` - Show provinces\n\nAvailable provinces: ${provinces.join(', ')}`,
                        color: 0x5865f2
                    }
                ]
            });
        }

     
        if (sub === "list" || sub === "provinces") {
            const provinces = Object.keys(typedKabupatens).map(p => p.charAt(0).toUpperCase() + p.slice(1));
            return reply(message, {
                embeds: [
                    {
                        title: `${EMOJI.kabupaten_provinsi} Available Provinces`,
                        description: `Available provinces for kabupaten games:\n${provinces.join(', ')}\n\nUse \`Geo kabupaten <province> <num>\` to play with specific province.`,
                        color: 0x5865f2
                    }
                ]
            });
        }


        if (!isNaN(Number(sub)) || (args[1] && !isNaN(Number(args[1])))) {
            let num: number;
            let province: string | undefined;
            
            if (!isNaN(Number(sub))) {
              
                num = Math.min(Number(sub) || 5, 15);
            } else {
               
                province = sub; 
                num = Math.min(Number(args[1]) || 5, 10);
            }

          
            const existing = [...games.values()].find(
                g => g.channelId === message.channel!.id && !g.started
            );
            if (existing) return reply(message, "A game is already waiting in this channel.");

            const questions = pickRandomQuestions(num, province);
            if (!questions) return reply(message, "Province not found or no kabupatens available.");

            const game = createGame(message.author.id, "kabupaten", questions, message.channel!.id);

            let description = `Host: <@${message.author.id}>\nPlayers can join with \`Geo join\`\nHost can start with \`Geo kabupaten start\` (within 1 minute).`;
            if (province) {
          
                const provinceKey = Object.keys(typedKabupatens).find(
                    key => key.toLowerCase() === province!.toLowerCase()
                );
                description += `\nProvince: **${provinceKey ? provinceKey.charAt(0).toUpperCase() + provinceKey.slice(1) : province}**`;
            }

            return reply(message, {
                embeds: [
                    {
                        title: `${EMOJI.kabupaten_provinsi} New Kabupaten Game`,
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
                        title: `${EMOJI.kabupaten_provinsi} Question 1/${game.questions.length}`,
                        description: q.question,
                        ...(q.image_url ? { image: { url: q.image_url! } } : {}),
                        color: 0x57f287,
                        footer: { text: "Game will automatically end in 5 minutes" }
                    }
                ]
            });
        }

        
        const provinces = Object.keys(typedKabupatens).map(p => p.charAt(0).toUpperCase() + p.slice(1));
        return reply(message, {
            embeds: [
                {
                    title: "Invalid Command",
                    description: `Unknown command. Available commands:\n• \`kabupaten <num>\`\n• \`kabupaten <province> <num>\`\n• \`kabupaten start\`\n• \`kabupaten list\``,
                    color: 0xed4245
                }
            ]
        });
    }
});