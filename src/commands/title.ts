
import { defineCommand } from "../Command";
import { getUnlockedTitles, updateTitle } from "../services/profileServices";
import { 
  getAllTitles, 
  calculateBadgeProgress, 
  calculateChampionProgress, 
  getEarnedTitles,
  badgeRequirements
} from "../services/badgeConfig";
import { EMOJI } from "../constants";
import { reply } from "../utils";
import { getAllScores } from "../services/scoreServices";
import { Category } from "../services/scoreServices";


const ACTIVE_CATEGORIES: Category[] = ['flag', 'capital', 'language'];

defineCommand({
    name: "title",
    description: "Manage your profile title",
    usages: ["list", "select <title>"],
    async run(message, args) {
        const subcommand = args[0]?.toLowerCase();

        if (!subcommand || subcommand === "list") {
            const scores = await getAllScores(message.author.id);
            const unlockedTitleIds = await getUnlockedTitles(message.author.id);
            const allTitles = getAllTitles();
            const earnedTitles = getEarnedTitles(scores);
            const totalPoints = Object.values(scores).reduce((sum, score) => sum + score, 0);

            const unlockedTitles = allTitles.filter(title => 
                unlockedTitleIds.includes(title.titleId)
            );

            if (unlockedTitles.length === 0) {
                const progressFields = [];
                
               
                for (const category of ACTIVE_CATEGORIES) {
                    const categoryPoints = scores[category] || 0;
                    const progress = calculateBadgeProgress(categoryPoints, category);
                    
                    if (progress.nextBadge) {
                        progressFields.push({
                            name: `${EMOJI[category] || ''} ${category.charAt(0).toUpperCase() + category.slice(1)}`,
                            value: `**${progress.nextBadge.title}**\n${progress.progressToNext}/${progress.totalRequired} points\n` +
                                  `Progress: ${Math.round((progress.progressToNext / progress.totalRequired) * 100)}%`,
                            inline: true
                        });
                    }
                }

                
                const championProgress = calculateChampionProgress(totalPoints);
                if (championProgress.nextBadge) {
                    progressFields.push({
                        name: `${EMOJI.champ3} Champion`,
                        value: `**${championProgress.nextBadge.title}**\n${championProgress.progressToNext}/${championProgress.totalRequired} total points\n` +
                              `Progress: ${Math.round((championProgress.progressToNext / championProgress.totalRequired) * 100)}%`,
                        inline: true
                    });
                }

                return reply(message, {
                    embeds: [
                        {
                            title: "🎖️ Title Progress 🎖️",
                            description: "You haven't unlocked any titles yet!\n\n**Progress towards next titles:**",
                            color: 0xfee75c,
                            fields: progressFields,
                            footer: { text: "Play more games to unlock titles!" }
                        }
                    ]
                });
            }

           const unlockedList = unlockedTitles.map(title => 
                `${EMOJI[title.badge] || '🏆'} **${title.title}**`
            ).join('\n');

            
            const progressFields = [];
            
           
            for (const category of Object.keys(badgeRequirements)) {
                const categoryPoints = scores[category] || 0;
                const progress = calculateBadgeProgress(categoryPoints, category as Category);
                
                if (progress.nextBadge && !unlockedTitleIds.includes(progress.nextBadge.titleId)) {
                    progressFields.push({
                        name: `${EMOJI[category] || ''} ${category.charAt(0).toUpperCase() + category.slice(1)}`,
                        value: `**${progress.nextBadge.title}**\n${progress.progressToNext}/${progress.totalRequired} points\n` +
                              `Progress: ${Math.round((progress.progressToNext / progress.totalRequired) * 100)}%`,
                        inline: true
                    });
                }
            }

            
            const championProgress = calculateChampionProgress(totalPoints);
            if (championProgress.nextBadge && !unlockedTitleIds.includes(championProgress.nextBadge.titleId)) {
                progressFields.push({
                    name: " Champion",
                    value: `**${championProgress.nextBadge.title}**\n${championProgress.progressToNext}/${championProgress.totalRequired} total points\n` +
                          `Progress: ${Math.round((championProgress.progressToNext / championProgress.totalRequired) * 100)}%`,
                    inline: true
                });
            }

            
            const missingTitles = earnedTitles.filter(earnedTitle => 
                !unlockedTitleIds.includes(earnedTitle.titleId)
            );

            let description = `**Unlocked Titles:**\n${unlockedList}`;

            if (missingTitles.length > 0) {
                description += `\n\n⚠️ **Notice:** You've earned these titles but they need to be unlocked:\n` +
                              missingTitles.map(t => `• ${t.title}`).join('\n') +
                              `\n\nPlay another game to automatically unlock them!`;
            }

            if (progressFields.length > 0) {
                description += `\n\n**Next Titles:**`;
            } else if (missingTitles.length === 0) {
                description += `\n\n🎉 You've unlocked all available titles!`;
            }

            const embed: any = {
                title: "🎖️ Your Titles 🎖️",
                description: description,
                color: 0xfee75c,
                footer: { text: "Use ?title select <title> to choose a title" }
            };

            if (progressFields.length > 0) {
                embed.fields = progressFields;
            }

            return reply(message, { embeds: [embed] });
        }
        if (subcommand === "select") {
            const titleName = args.slice(1).join(" ").toLowerCase();
            
            if (!titleName) {
                return reply(message, "Please specify a title to select. Use `Geo title list` to see your unlocked titles.");
            }

            const unlockedTitleIds = await getUnlockedTitles(message.author.id);
            const allTitles = getAllTitles();
            
            
            const selectedTitle = allTitles.find(title => 
                title.title.toLowerCase() === titleName && 
                unlockedTitleIds.includes(title.titleId)
            );

            if (!selectedTitle) {
               
                const titleExists = allTitles.some(title => title.title.toLowerCase() === titleName);
                if (titleExists) {
                    return reply(message, "Title found but not unlocked yet! Play more games to unlock it.");
                }
                return reply(message, "Title not found! Use `Geo title list` to see your available titles.");
            }

            await updateTitle(message.author.id, selectedTitle.title);

            return reply(message, {
                embeds: [
                    {
                        title: "Title Updated",
                        description: `Your title has been set to: **${selectedTitle.title}** ${EMOJI[selectedTitle.badge] || '🏆'}`,
                        color: 0x57f287,
                        footer: { text: "Your profile will now show this title" }
                    }
                ]
            });
        }

        return reply(message, "Invalid subcommand. Use `?title list` or `?title select <title>`");
    }

});