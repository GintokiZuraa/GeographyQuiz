
import { EventEmitter } from 'events';
import { EMOJI } from '../constants';
import { baseRewards, completionBonus } from '../services/rewardConfig';
import { Game } from '../services/gameManager';

export const gameEvents = new EventEmitter();

export function formatScores(scores: Record<string, number>, category: string, game: Game): string {
    const sorted = Object.entries(scores)
        .sort(([, a], [, b]) => b - a)
        .map(([userId, score], index) => {
            const isPerfectScore = game.perfectScores?.has(userId) && 
                                 score === game.questions.length * baseRewards[category as keyof typeof baseRewards].coins;
            
            const baseCoins = score * baseRewards[category as keyof typeof baseRewards].coins;
            const bonusCoins = isPerfectScore ? completionBonus.coins : 0;
            const totalCoins = baseCoins + bonusCoins;
            
            let rewardText = `${index + 1}. <@${userId}>: ${EMOJI.points} ${score} points + ${EMOJI.geocoin} ${totalCoins} coins`;
            
            if (isPerfectScore) {
                rewardText += ` (${baseCoins} + ${bonusCoins} bonus) ${EMOJI.geogems} ${completionBonus.gems} gems`;
            } else {
                rewardText += ` (${baseCoins})`;
            }
            
            return rewardText;
        });
    
    return sorted.join('\n') || 'No one scored any points!';
}