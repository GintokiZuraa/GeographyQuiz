import { gameEvents } from "../modules/gameEvents";
import { Category, addScore } from "../services/scoreServices";
import { categoryPoints } from "./pointsConfig";
import { addCurrency } from "../services/currencyServices";
import { baseRewards, completionBonus, } from "../services/rewardConfig";
import { formatScores } from "../modules/gameEvents";
import { client } from "../Client";
import { EMOJI } from "../constants";
import { AnyTextableChannel, Client, Constants } from "oceanic.js";

export interface Question {
    image_url?: string;
    question: string;
    answer: string[];
}

export interface Game {
    id: string;
    hostId: string;
    category: Category;
    channelId: string;
    questions: Question[];
    players: Set<string>;
    scores: Record<string, number>;
    currentIndex: number;
    started: boolean;
    timeout?: NodeJS.Timeout;
    gameTimer?: NodeJS.Timeout;
    perfectScores?: Set<string>; 
}
export const games = new Map<string, Game>();

export function createGame(
    hostId: string,
    category: Category,
    questions: Question[],
    channelId: string,
    maxWait = 60000
): Game {
    const id = `${hostId}-${Date.now()}`;
    const game: Game = {
        id,
        hostId,
        category,
        channelId,
        questions,
        players: new Set([hostId]),
        scores: {},
        currentIndex: 0,
        started: false,
        perfectScores: new Set() 
    };

    game.timeout = setTimeout(() => {
        if (!game.started) {
            games.delete(id);
            gameEvents.emit('gameCancelled', game);
        }
    }, maxWait);

    games.set(id, game);
    return game;
}

export function joinGame(gameId: string, userId: string): boolean {
    const game = games.get(gameId);
    if (!game || game.started) return false;
    game.players.add(userId);
    return true;
}

export function startGame(gameId: string): Game | null {
    const game = games.get(gameId);
    if (!game || game.started) return null;
    game.started = true;
    if (game.timeout) clearTimeout(game.timeout);
  
    game.gameTimer = setTimeout(() => {
        endGameDueToTimeout(gameId);
    }, 5 * 60 * 1000);
    
    return game;
}

async function endGameDueToTimeout(gameId: string) {
    const game = games.get(gameId);
    if (!game) return;
    
    for (const [uid, pts] of Object.entries(game.scores)) {
        try {
            await addScore(uid, game.category, pts);
            
            const isPerfectScore = game.perfectScores?.has(uid) && pts === game.questions.length * categoryPoints[game.category];
            const reward = {
                coins: pts * baseRewards[game.category].coins,
                gems: isPerfectScore ? completionBonus.gems : 0 
            };
            await addCurrency(uid, reward);
        } catch (error: any) {
            if (error.message === "PLAYER_NOT_REGISTERED") {
                console.log(`Player ${uid} not registered, skipping score saving`);
            } else {
                console.error("Error saving score:", error);
            }
        }
    }
    
    try {
        const channel = await client.rest.channels.get(game.channelId);
        
        if (channel && isTextableChannel(channel)) {
            await client.rest.channels.createMessage(channel.id, {
                embeds: [
                    {
                        title: `${EMOJI.cd} Game Ended - Time's Up!`,
                        description: "The game has ended because the 5-minute time limit was reached.",
                        color: 0xffcc00,
                        fields: [
                            {
                                name: "Final Scores",
                                value: formatScores(game.scores, game.category, game) || "No one scored points in this game."
                            }
                        ]
                    }
                ]
            });
        }
    } catch (error) {
        console.error("Error sending timeout message:", error);
    }
    
    games.delete(gameId);
}


function isTextableChannel(channel: any): channel is AnyTextableChannel {
    const textableTypes = [
        Constants.ChannelTypes.GUILD_TEXT,
        Constants.ChannelTypes.DM,
        Constants.ChannelTypes.GUILD_ANNOUNCEMENT,
        Constants.ChannelTypes.GUILD_VOICE, 
        Constants.ChannelTypes.ANNOUNCEMENT_THREAD,
        Constants.ChannelTypes.PUBLIC_THREAD,
        Constants.ChannelTypes.PRIVATE_THREAD
    ];
    return textableTypes.includes(channel.type);
}

export async function stopGame(gameId: string): Promise<{ scores: Record<string, number>; game: Game } | null> {
    const game = games.get(gameId);
    if (!game) return null;
    
  
    if (game.timeout) clearTimeout(game.timeout);
    if (game.gameTimer) clearTimeout(game.gameTimer);
    
    const scores = { ...game.scores };
    games.delete(gameId);
    
   
    for (const [uid, pts] of Object.entries(scores)) {
        await addScore(uid, game.category, pts);
        
       
        const reward = {
            coins: pts * baseRewards[game.category].coins,
            gems: 0 
        };
        await addCurrency(uid, reward);
    }
    
    return { scores, game };
}

export function skipQuestion(gameId: string): string | null {
    const game = games.get(gameId);
    if (!game) return null;
    const current = game.questions[game.currentIndex];
    game.currentIndex++;
    
   
    if (game.perfectScores) {
        game.perfectScores.clear();
    }
    
    return current ? current.answer[0] : null;
}

export function submitAnswer(gameId: string, userId: string, content: string): {
    correct: boolean;
    answer?: string;
    finished?: boolean;
    points?: number;
} {
    const game = games.get(gameId);
    if (!game || !game.started) return { correct: false };

    const current = game.questions[game.currentIndex];
    if (!current) return { correct: false };

    const normalized = content.toLowerCase().trim();
    const isCorrect = current.answer.some(a => a.toLowerCase() === normalized);
    
    if (isCorrect) {
        const points = categoryPoints[game.category];
        game.scores[userId] = (game.scores[userId] || 0) + points;
        game.currentIndex++;

        const finished = game.currentIndex >= game.questions.length;
        
        if (game.perfectScores) {
            const currentScore = game.scores[userId] || 0;
            const maxPossibleScore = game.currentIndex * categoryPoints[game.category];
            
            if (currentScore === maxPossibleScore) {
                game.perfectScores.add(userId);
            } else {
                game.perfectScores.delete(userId);
            }
        }
        
        if (finished && game.gameTimer) {
            clearTimeout(game.gameTimer);
            
            setTimeout(async () => {
                for (const [uid, pts] of Object.entries(game.scores)) {
                    try {
                        await addScore(uid, game.category, pts);
                        
                        const isPerfect = game.perfectScores?.has(uid) && pts === game.questions.length * categoryPoints[game.category];
                        const reward = {
                            coins: pts * baseRewards[game.category].coins,
                            gems: isPerfect ? completionBonus.gems : 0
                        };
                        await addCurrency(uid, reward);
                    } catch (error: any) {
                        if (error.message === "PLAYER_NOT_REGISTERED") {
                            console.log(`Player ${uid} not registered, skipping score saving`);
                        } else {
                            console.error("Error saving score:", error);
                        }
                    }
                }
                games.delete(gameId);
            }, 1000);
        }
        
        return { correct: true, answer: current.answer[0], finished, points };
    } else {
        if (game.perfectScores) {
            game.perfectScores.delete(userId);
        }
        return { correct: false };
    }
}

export function getGame(gameId: string): Game | undefined {
    return games.get(gameId);
}