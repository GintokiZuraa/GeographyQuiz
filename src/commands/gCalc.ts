import { defineCommand } from '../Command';
import { Message } from 'oceanic.js';

export default defineCommand({
    name: 'gcalc',
    aliases: ['geo gcalc'],
    description: 'Calculate cap g trade',
    usages: ['<TT value>'],
    run: async (message: Message) => {
        let args = message.content.split(' ').slice(1);
        
        if (args[0] === 'gcalc') {
            args = args.slice(1);
        }
        
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