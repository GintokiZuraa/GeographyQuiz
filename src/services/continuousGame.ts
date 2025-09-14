import { client } from "../Client";
import { flags } from "../data/flags";
import { capitals } from "../data/capitals";
import { languages } from "../data/languages";
import { kabupatens } from "../data/kabupatens";
import { addScore, Category } from "./scoreServices";
import { addCurrency } from "./currencyServices";
import { EMOJI, CONTINUOUS_GAMES } from "../constants";
import { AnyChannel, Constants } from "oceanic.js";
import { baseRewards } from "./rewardConfig";
import { categoryPoints } from "./pointsConfig";
import { playerExists } from "./playerCheck";

function isCategory(category: string): category is Category {
    return ['flag', 'capital', 'language', 'state', 'kabupaten', 'province'].includes(category);
}

function getCategoryValue<T>(record: Record<Category, T>, category: string, defaultValue: T): T {
    return isCategory(category) ? record[category] : defaultValue;
}

export const CONTINUOUS_GAMES_CONFIG = {
    FLAG_CHANNEL: {
        id: CONTINUOUS_GAMES.FLAG_CHANNEL, 
        category: "flag" as Category,
        data: flags,
        emoji: EMOJI.flag
    },
    CAPITAL_CHANNEL: {
        id: CONTINUOUS_GAMES.CAPITAL_CHANNEL, 
        category: "capital" as Category,
        data: capitals,
        emoji: EMOJI.capital
    },
    LANGUAGE_CHANNEL: {
        id: CONTINUOUS_GAMES.LANGUAGE_CHANNEL, 
        category: "language" as Category,
        data: languages,
        emoji: EMOJI.language
    },
    KABUPATEN_CHANNEL: {
        id: CONTINUOUS_GAMES.KABUPATEN_CHANNEL, 
        category: "kabupaten" as Category,
        data: kabupatens,
        emoji: EMOJI.kabupaten_provinsi
    }
} as const;

interface Question {
    image_url?: string;
    question: string;
    answer: string[];
}

interface ContinuousGameState {
    currentQuestion: Question | null;
    scores: Record<string, number>;
    lastAnswerTime: number;
    questionCount: number;
}

interface GameChannel {
    id: string;
    category: Category;
    data: any;
    emoji: string;
    state: ContinuousGameState;
}

const gameStates = new Map<string, GameChannel>();
const userCooldowns = new Map<string, number>();
const COOLDOWN_MS = 3000;

function isTextableChannel(channel: AnyChannel): boolean {
    return (
        channel.type === Constants.ChannelTypes.GUILD_TEXT ||
        channel.type === Constants.ChannelTypes.DM ||
        channel.type === Constants.ChannelTypes.GUILD_ANNOUNCEMENT
    );
}

export function startContinuousGames(): void {
    Object.values(CONTINUOUS_GAMES_CONFIG).forEach((channelConfig) => {
        const gameChannel: GameChannel = {
            id: channelConfig.id,
            category: channelConfig.category,
            data: channelConfig.data,
            emoji: channelConfig.emoji,
            state: {
                currentQuestion: null,
                scores: {},
                lastAnswerTime: Date.now(),
                questionCount: 0
            }
        };
        
        gameStates.set(channelConfig.id, gameChannel);
        postNewQuestion(channelConfig.id); 
    });
}

function pickRandomQuestion(data: any): Question {
  
    if (isKabupatenData(data)) {
        return pickFromKabupatenData(data);
    } else if (isCapitalData(data)) {
        return pickFromCapitalData(data);
    } else if (isLanguageData(data)) {
        return pickFromLanguageData(data);
    } else {
        return pickFromFlatData(data);
    }
}

function isCapitalData(data: any): boolean {
    if (!data || typeof data !== 'object') return false;
    
    return Object.values(data).every(continent => 
        continent && typeof continent === 'object' && 
        Object.values(continent).every(country => 
            country && typeof country === 'object' && 
            'question' in country && 'answer' in country &&
            !('image_url' in country) 
        )
    );
}

function isKabupatenData(data: any): boolean {
    if (!data || typeof data !== 'object') return false;
    
    return Object.values(data).some(province => 
        province && typeof province === 'object' && 
        Object.values(province).some(kabupaten => 
            kabupaten && typeof kabupaten === 'object' && 
            'image_url' in kabupaten && 
            'question' in kabupaten &&
            'answer' in kabupaten
        )
    );
}
function isLanguageData(data: any): data is Record<string, { question: string; sentences: string[]; answer: string[] }> {
    return data && typeof data === 'object' && Object.values(data).every(
        language => language && typeof language === 'object' && 'question' in language && 'sentences' in language && 'answer' in language
    );
}


function pickFromCapitalData(data: Record<string, Record<string, { question: string; answer: string[] }>>): Question {
   
    const allCountries: Array<{ question: string; answer: string[] }> = [];
    
    Object.values(data).forEach(continent => {
        Object.values(continent).forEach(country => {
            allCountries.push(country);
        });
    });
    
    const randomCountry = allCountries[Math.floor(Math.random() * allCountries.length)];
    return {
        question: randomCountry.question,
        answer: randomCountry.answer
    };
}



function pickFromKabupatenData(data: any): Question {
    
    const allKabupatens: Array<{ image_url: string; question: string; answer: string[] }> = [];
    

    Object.values(data).forEach((province: any) => {
      
        Object.values(province).forEach((kabupaten: any) => {
            if (kabupaten && typeof kabupaten === 'object' && 
                kabupaten.image_url && kabupaten.question && kabupaten.answer) {
                allKabupatens.push({
                    image_url: kabupaten.image_url,
                    question: kabupaten.question,
                    answer: kabupaten.answer
                });
            }
        });
    });
    
    
    if (allKabupatens.length === 0) {
        return {
            image_url: "",
            question: "No kabupaten data available",
            answer: ["error"]
        };
    }
    
    const randomKabupaten = allKabupatens[Math.floor(Math.random() * allKabupatens.length)];
    return randomKabupaten;
}

function pickFromLanguageData(data: Record<string, { question: string; sentences: string[]; answer: string[] }>): Question {
    const languages = Object.entries(data);
    const randomLanguage = languages[Math.floor(Math.random() * languages.length)];
    const [languageName, languageData] = randomLanguage;
    
    const randomSentence = languageData.sentences[Math.floor(Math.random() * languageData.sentences.length)];
    
    return {
        question: `${languageData.question}\n\n"${randomSentence}"`,
        answer: languageData.answer
    };
}

function pickFromFlatData(data: Record<string, { image_url?: string; question: string; answer: string[] }>): Question {
    const entries = Object.entries(data);
    const randomEntry = entries[Math.floor(Math.random() * entries.length)];
    const entryData = randomEntry[1];
    
    return {
        image_url: entryData.image_url,
        question: entryData.question,
        answer: Array.isArray(entryData.answer) ? entryData.answer : [entryData.answer]
    };
}

export async function postNewQuestion(channelId: string) {
    const gameChannel = gameStates.get(channelId);
    if (!gameChannel) return;

    gameChannel.state.currentQuestion = pickRandomQuestion(gameChannel.data);
    gameChannel.state.questionCount++;
    
    try {
        const channel = await client.rest.channels.get(channelId);
        
        if (channel && isTextableChannel(channel)) {
            const embedData: any = {
                title: `${gameChannel.emoji} ${gameChannel.category.toUpperCase()} Quiz #${gameChannel.state.questionCount}`,
                description: gameChannel.state.currentQuestion.question,
                color: 0x57f287,
                footer: { 
                    text: `Continuous ${gameChannel.category} Game - Type your answer!` 
                }
            };

           
            if (gameChannel.state.currentQuestion.image_url && 
                gameChannel.state.currentQuestion.image_url.startsWith('http')) {
                embedData.image = { url: gameChannel.state.currentQuestion.image_url };
            } else {
            }

            await client.rest.channels.createMessage(channelId, {
                embeds: [embedData]
            });
        }
    } catch (error) {
        console.error(`Error posting question in channel ${channelId}:`, error);
    }
}

export async function handleContinuousAnswer(
    channelId: string, 
    userId: string, 
    content: string
): Promise<{
    correct: boolean;
    points?: number;
    category?: Category;
}> {
    const gameChannel = gameStates.get(channelId);
    if (!gameChannel || !gameChannel.state.currentQuestion) {
        return { correct: false };
    }

    const cooldownKey = `${userId}-${channelId}`;
    const now = Date.now();
    if (userCooldowns.has(cooldownKey) && now - userCooldowns.get(cooldownKey)! < COOLDOWN_MS) {
        return { correct: false };
    }
    userCooldowns.set(cooldownKey, now);
    
    const normalized = content.toLowerCase().trim();
    const isCorrect = gameChannel.state.currentQuestion.answer.some(
        a => a.toLowerCase() === normalized
    );
    
    if (isCorrect) {
        const points = getCategoryValue(categoryPoints, gameChannel.category, 1);
        gameChannel.state.scores[userId] = (gameChannel.state.scores[userId] || 0) + points;
        gameChannel.state.lastAnswerTime = Date.now();
        
        await addScore(userId, gameChannel.category, points);
        
        const rewardCoins = points * getCategoryValue(baseRewards, gameChannel.category, { coins: 10 }).coins;
        const reward = {
            coins: rewardCoins,
            gems: 0
        };
        await addCurrency(userId, reward);
        

        await postNewQuestion(channelId);
        
        return { 
            correct: true, 
            points,
            category: gameChannel.category
        };
    }
    
    return { correct: false };
}

export function getContinuousScores(channelId: string): Record<string, number> {
    const gameChannel = gameStates.get(channelId);
    return gameChannel ? { ...gameChannel.state.scores } : {};
}

export function getAllScores(): Record<string, Record<string, number>> {
    const allScores: Record<string, Record<string, number>> = {};
    gameStates.forEach((gameChannel, channelId) => {
        allScores[channelId] = { ...gameChannel.state.scores };
    });
    return allScores;
}

export function resetScores(channelId: string): void {
    const gameChannel = gameStates.get(channelId);
    if (gameChannel) {
        gameChannel.state.scores = {};
        gameChannel.state.questionCount = 0;
    }
}

export function getCurrentQuestion(channelId: string): Question | null {
    const gameChannel = gameStates.get(channelId);
    return gameChannel?.state.currentQuestion || null;
}

export function getGameChannel(channelId: string): GameChannel | undefined {
    return gameStates.get(channelId);
}

export function isContinuousGameChannel(channelId: string): boolean {
    return gameStates.has(channelId);
}


export function skipContinuousQuestion(channelId: string): string | null {
    const gameChannel = gameStates.get(channelId);
    if (!gameChannel || !gameChannel.state.currentQuestion) return null;
    
    const currentAnswer = gameChannel.state.currentQuestion.answer[0];
    
   
    postNewQuestion(channelId);
    
    return currentAnswer;
}

export function getCurrentQuestionAnswer(channelId: string): string | null {
    const gameChannel = gameStates.get(channelId);
    if (!gameChannel || !gameChannel.state.currentQuestion) return null;
    
    return gameChannel.state.currentQuestion.answer[0];
}

