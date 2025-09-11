import { defineCommand } from '../Command';
import { Message } from 'oceanic.js';

export default defineCommand({
    name: 'gcalc',
    description: 'Calculate cap g trade',
    usages: ['<TT value>'],
    run: async (message: Message) => {
        const args = message.content.split(' ').slice(1);
        const TT = parseInt(args[0]);

        if (isNaN(TT) || TT < 0) {
            return message.channel?.createMessage({
                content: 'Please enter a valid positive number for TT.'
            });
        }

        const result = Math.round(100 * Math.pow(TT + 1, 1.35));
        return message.channel?.createMessage({
            content: `Your cap g trade in TT ${TT} is ${result}`
        });
    }
});
