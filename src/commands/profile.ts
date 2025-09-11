
import { defineCommand } from "../Command";
import { getAllScores } from "../services/scoreServices";
import { getCurrency } from "../services/currencyServices";
import { getProfile } from "../services/profileServices";
import { getEarnedBadges } from "../services/badgeConfig";
import { EMOJI } from "../constants";
import { reply } from "../utils";
import { getPlayerRank } from "../services/scoreServices";

defineCommand({
    name: "profile",
    description: "Show your GeoGuessr profile with badges and stats",
    aliases: ["p"],
    usages: [""],
    hidden: true,
    async run(message) {
        const userId = message.author.id;

        const scores = await getAllScores(userId);
        const currency = await getCurrency(userId);
        const profile = await getProfile(userId);
        const globalRank = await getPlayerRank(userId);

      
        const geoStats = [
            `${EMOJI.flag} Flags: ${scores.flag}`,
            `${EMOJI.capital} Capitals: ${scores.capital}`,
            `${EMOJI.language} Languages: ${scores.language}`,
            `${EMOJI.states} States: ${scores.state}`,
            `${EMOJI.kabupaten_provinsi} Kabupatens: ${scores.kabupaten}`,
            `${EMOJI.province} Provinces: ${scores.province}`
        ].join('\n');

        const totalPoints = Object.values(scores).reduce((sum, score) => sum + score, 0);

      
        const earnedBadges = getEarnedBadges(scores);
        const displayTitle = profile.title;

     
        const badgeDisplay = earnedBadges.map(b => EMOJI[b.badge] || '❓').join(' ') || "No badges lol";

        const coins = currency?.coins || 0;
        const gems = currency?.gems || 0;

     
        const rankText = globalRank > 0 ? `Rank #${globalRank}` : 'Unranked';

        return reply(message, {
            embeds: [
                {
                    title: `${message.author.username} - Profile`,
                    description: `**${displayTitle}**`,
                    color: 0x5865f2,
                    fields: [
                        {
                            name: ``,
                            value: badgeDisplay,
                            inline: false
                        },
                        {
                            name: "Stats",
                            value: `${geoStats}\n\n**${EMOJI.points} Total Points:** ${totalPoints}`,
                            inline: false
                        },
                        {
                            name: "Currency",
                            value: `${EMOJI.geocoin} Coins: ${coins}\n${EMOJI.geogems} Gems: ${gems}`,
                            inline: false
                        }
                    ],
                    thumbnail: {
                         url: message.author.avatarURL() || message.author.defaultAvatarURL()
                    },
                    footer: {
                        text: rankText
                    }
                }
            ]
        });
    }
});