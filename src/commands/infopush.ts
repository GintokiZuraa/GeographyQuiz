import { defineCommand } from '../Command';
import { prisma } from '../Prisma';
import { Message } from 'oceanic.js';

export default defineCommand({
    name: 'infopush',
    description: 'item info price increased for 3 days',
    aliases: [],
    run: async (message: Message) => {
        const args = message.content.split(' ').slice(1); 
        const categoryFilter = args[0]?.toLowerCase(); 

        const validTypes = ['tool', 'material', 'refined', 'product', 'assembly'];
        if (categoryFilter && !validTypes.includes(categoryFilter)) {
            return message.channel?.createMessage({
                content: ` Invalid category. Valid types: ${validTypes.join(', ')}.`
            });
        }

        const items = await prisma.idleItem.findMany({
            where: {
                percent: { not: null },
                percentHistory: { not: undefined },
                ...(categoryFilter ? { type: categoryFilter } : {})
            }
        });

        const risingItems = items.filter(item => {
            if (!Array.isArray(item.percentHistory)) return false;

            const history = (item.percentHistory as number[]).filter(x => typeof x === 'number');
            if (history.length < 2 || item.percent === null) return false;

            const [day1, day2] = history.slice(-2);
            const day3 = item.percent;

            return day1 < day2 && day2 < day3;
        });

        if (risingItems.length === 0) {
            return message.channel?.createMessage({
                content: `No ${categoryFilter || ''} items have increased in price for 3 consecutive days.`.trim()
            });
        }

        const result = risingItems
            .map(item => {
                const history = item.percentHistory as number[];
                const lastTwo = history.slice(-2);
                return `**${item.name}**: \`${lastTwo.join('% → ')}% → ${item.percent}%\``;
            })
            .join('\n');

        return message.channel?.createMessage({
            content: ` Items with increasing price for 3 days${categoryFilter ? ` (category: ${categoryFilter})` : ''}:\n${result}`
        });
    }
});
