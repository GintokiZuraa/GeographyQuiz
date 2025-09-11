import { client } from "../Client";
import { games, submitAnswer, stopGame } from "../services/gameManager";
import { reply } from "../utils";
import { addScore, getAllScores } from "../services/scoreServices";
import { addCurrency } from "../services/currencyServices";
import { EMOJI } from "../constants";
import { baseRewards, completionBonus } from "../services/rewardConfig";
import { categoryPoints } from "../services/pointsConfig";
import { unlockBadge, unlockTitle } from "../services/profileServices";
import { getEarnedBadges } from "../services/badgeConfig";

client.on("messageCreate", async (msg) => {
    if (msg.author.bot) return;

    for (const game of games.values()) {
        if (!game.started) continue;
        if (!game.players.has(msg.author.id)) continue;
        if (!msg.channel || msg.channel.id !== game.channelId) continue;

        const result = submitAnswer(game.id, msg.author.id, msg.content);
        if (result.correct) {
            if (result.finished) {
                const scores = game.scores;
                const totalPoints = Object.values(scores).reduce((sum, score) => sum + score, 0);

                for (const [uid, pts] of Object.entries(scores)) {
              
                    await addScore(uid, game.category, pts);
                    
          
                    const updatedScores = await getAllScores(uid);
                    
                
                    const earnedBadges = getEarnedBadges(updatedScores);
                    
           

          
                    const isPerfectScore = game.perfectScores?.has(uid) && 
                                         pts === game.questions.length * categoryPoints[game.category];
                    const baseCoins = pts * baseRewards[game.category].coins;
                    const bonusCoins = isPerfectScore ? completionBonus.coins : 0;
                    const totalCoins = baseCoins + bonusCoins;
                    
                    const reward = {
                        coins: totalCoins,
                        gems: isPerfectScore ? completionBonus.gems : 0
                    };
                    await addCurrency(uid, reward);
                    
              
                    for (const badge of earnedBadges) {
                        try {
                            await unlockBadge(uid, badge.badgeId);
                            await unlockTitle(uid, badge.titleId);
                        } catch (error) {
                            console.error(`Error unlocking badge/title for user ${uid}:`, error);
                        }
                    }
                }

                const desc = Object.entries(scores)
                    .sort(([, a], [, b]) => b - a)
                    .map(([uid, pts]) => {
                        const isPerfect = game.perfectScores?.has(uid) && 
                                        pts === game.questions.length * categoryPoints[game.category];
                        const baseCoins = pts * baseRewards[game.category].coins;
                        const bonusCoins = isPerfect ? completionBonus.coins : 0;
                        const totalCoins = baseCoins + bonusCoins;
                        
                        let rewardText = `<@${uid}> — ${EMOJI.points} ${pts} points + ${EMOJI.geocoin} ${totalCoins} coins`;
                        if (isPerfect) {
                            rewardText += ` (${baseCoins} base + ${bonusCoins} bonus) ${EMOJI.geogems} ${completionBonus.gems} gems`;
                        } else {
                             rewardText += ` (${baseCoins})`;
                        }
                        return rewardText;
                    })
                    .join("\n") || "No one scored.";

                await reply(msg, {
                    embeds: [
                        {
                            title: `${EMOJI.game_over} Game Over`,
                            description: `**Final Scores & Rewards:**\n${desc}`,
                            color: 0x57f287,
                            footer: { text: "Scores and rewards have been saved" }
                        }
                    ]
                });

                stopGame(game.id);
            } else {
                const nextQ = game.questions[game.currentIndex];
                
               
                let embedTitle = "";
                
                switch (game.category) {
                    case "flag":
                        embedTitle = `${EMOJI.flag} Next Question (${game.currentIndex + 1}/${game.questions.length})`;
                        break;
                    case "language":
                        embedTitle = `${EMOJI.language} Next Question (${game.currentIndex + 1}/${game.questions.length})`;
                        break;
                    case "capital":
                        embedTitle = `${EMOJI.capital} Next Question (${game.currentIndex + 1}/${game.questions.length})`;
                        break;
                    case "province":
                        embedTitle = `${EMOJI.kabupaten_provinsi} Next Question (${game.currentIndex + 1}/${game.questions.length})`;
                        break;
                    case "kabupaten":
                        embedTitle = `${EMOJI.kabupaten_provinsi} Next Question (${game.currentIndex + 1}/${game.questions.length})`;
                        break;
                    case "state":
                        embedTitle = `${EMOJI.states} Next Question (${game.currentIndex + 1}/${game.questions.length})`;
                        break;
                    default:
                        embedTitle = `❓ Next Question (${game.currentIndex + 1}/${game.questions.length})`;
                }

                await reply(msg, {
                    embeds: [
                        {
                            title: `${EMOJI.correct} Correct! +${EMOJI.geocoin} ${baseRewards[game.category].coins} coins`,
                            description: `<@${msg.author.id}> got it right! Answer: **${result.answer}**\nEarned: ${EMOJI.geocoin} ${baseRewards[game.category].coins} coins (base reward)`,
                            color: 0x57f287
                        },
                        {
                            title: embedTitle,
                            description: nextQ.question,
                            ...(nextQ.image_url ? { image: { url: nextQ.image_url } } : {}),
                            color: 0x5865f2,
                            footer: { text: `Category: ${game.category}` }
                        }
                    ]
                });
            }
            break;
        }
    }
});