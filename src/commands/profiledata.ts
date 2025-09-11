import { defineCommand } from '../Command';
import { prisma } from '../Prisma';
import { Message } from 'oceanic.js';

export default defineCommand({
    name: 'database',
    aliases: ['db'],
    description: 'Display your EPIC RPG and Idle database summary',
    run: async (message: Message) => {
        if (!message.channel) return;

        const userId = message.author.id;
        const userTag = message.author.globalName || message.author.username;


        const user = await prisma.user.findUnique({
            where: { id: userId },
            include: {
                profile: true,
                horse: true,
                profession: true,
                idleProfile: true
            }
        });

        if (!user) {
            return message.channel.createMessage({ content: 'No profile data found, try use command rpg p or something' });
        }

        const profile = user.profile;
        const horse = user.horse;
        const profession = user.profession;
        const idle = user.idleProfile;

        const league = await prisma.idleLeague.findUnique({
        where: { username: message.author.username }
        });


        const epicData = [
            profile && `**Level:** ${profile.level}`,
            profile && `**Area:** ${profile.area} / ${profile.maxArea}`,
            profile && `**Time Travel:** ${profile.timeTravel}`,
            profile && `**Coolness:** ${profile.coolness}`,
            horse && `**Horse:** ${horse.type} (Lv. ${horse.level}, Tier ${horse.tier}, Epicness ${horse.epicness})`,
            profession && `**Professions:** Worker ${profession.worker}, Crafter ${profession.crafter}, Lootboxer ${profession.lootboxer}, Merchant ${profession.merchant}, Enchanter ${profession.enchanter}`
        ].filter(Boolean).join('\n');

        const idleData = [
            idle ? `**Packing:** ${idle.pack}` : null,
            league ? `**League Points:** ${league.point}` : null
        ].filter(Boolean).join('\n') || 'No idle data found.';

        const embed = {
    title: `${userTag}'s Profile Summary`,
    color: Math.floor(Math.random() * 0xFFFFFF),
    thumbnail: {
        url: message.author.avatarURL("jpg") || '' 
    },
    fields: [
        {
            name: ' EPIC RPG Database',
            value: epicData || 'No EPIC RPG data found.',
            inline: false
        },
        {
            name: ' Idle Database',
            value: idleData,
            inline: false
        }
    ]
};


        await message.channel.createMessage({ embeds: [embed] });
    }
});
