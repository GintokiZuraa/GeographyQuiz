import { defineCommand } from '../Command';
import { prisma } from '../Prisma';
import { itemList, reply, send } from '../utils';
import type { IdleItem } from '@prisma/client';

defineCommand({
    name: 'market',
    aliases: ['ma'],
    description: 'Check market price for IDLE FARM',
    async run(message, args) {
        const today0UTC = new Date().setUTCHours(0, 0, 0, 0);

        const outdated: IdleItem[] = await prisma.idleItem.findMany({
            where: {
                lastUpdate: { lt: today0UTC }
            }
        });
        if (outdated.length) {
            return reply(
                message,
                `Outdated item:\n${outdated.map((item: IdleItem) => item.name).join(', ')}`
            );
        }

        let min: number | null = null;
        let max: number | null = null;
        let exact: number | null = null;

        if (args.length === 1) {
            // Exact match mode
            exact = parseFloat(args[0]);
            if (isNaN(exact)) return reply(message, 'Invalid number.');
        } else if (args.length === 2) {
            // Range mode
            min = parseFloat(args[0]);
            max = parseFloat(args[1]);
            if (isNaN(min) || isNaN(max)) return reply(message, 'Invalid range numbers.');
            if (min > max) [min, max] = [max, min]; // Swap if reversed
        }

        // Fetch all types in one go
        const allItems: IdleItem[] = await prisma.idleItem.findMany({
            orderBy: { percent: 'desc' }
        });

        // Filter by exact or range if provided
        let filteredItems: IdleItem[] = allItems;
        if (exact !== null) {
            filteredItems = allItems.filter((item: IdleItem) => item.percent === exact);
        } else if (min !== null && max !== null) {
            filteredItems = allItems.filter(
                (item: IdleItem) =>
                    item.percent !== null &&
                    item.percent >= min &&
                    item.percent <= max
            );
        }

        if (filteredItems.length === 0) {
            if (exact !== null) {
                return reply(message, `There are no items that have ${exact}% today.`);
            } else {
                return reply(message, `There are no items in the range ${min}% to ${max}% today.`);
            }
        }

        // Group by type
        const groupByType = (type: string) =>
            itemList(filteredItems.filter((item: IdleItem) => item.type === type));

        const title =
            exact !== null
                ? `Here are items that are exactly ${exact}% today`
                : min !== null && max !== null
                ? `Here are items that are between ${min}% and ${max}% today`
                : null;

        if (title) await reply(message, `**${title}**`);

        await send(message.channelID, `**Material**\n${groupByType('material')}`);
        await send(message.channelID, `**Refined**\n${groupByType('refined')}`);
        await send(
            message.channelID,
            `**Product**\n${groupByType('product')}\n**Tool**\n${groupByType('tool')}\n**Assembly**\n${groupByType('assembly')}`
        );
    }
});
