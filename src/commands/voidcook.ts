import { defineCommand } from '../Command';
import { reply } from '../utils';

defineCommand({
  name: 'voidcook',
  description: 'Displays Void Areas Cooking info',
  aliases: ['voidcooking', 'vcook', 'void'],
  usages: [],
  ownerOnly: false,

  async run(message) {
    const embed = {
      title: 'VOID AREAS COOKING',
      description: '**What to cook in each area**',
      color: 0xFFFFFF, 

      fields: [
        {
          name: 'D16',
          value: `17.405 Fruit salad L1500\n375 Apple Juice L1500`,
          inline: true,
        },
        {
          name: 'D17',
          value: `One shot needs\n35k Fruit salad until success\n4.625 Apple Juice until success`,
          inline: true,
        },
        {
          name: 'D18',
          value: `One shot needs\n240k Fruit salad, if fail 300k until success\n18k Apple Juice, if fail 23.750 until success`,
          inline: true,
        },
        {
          name: 'D19',
          value: `One shot needs\n1.15m Fruit salad\n103.750 Apple Juice\nOn failed cooks cook 50% of the last cooked amount`,
          inline: true,
        },
        {
          name: 'D20',
          value: `One shot needs\n8.55m Fruit salad\n247.500 Apple Juice`,
          inline: true,
        },
      ],
      footer: {
        text: 'Use Geo help to see other commands'
      }
    };

    if (message.channel) {
      await message.channel.createMessage({ embeds: [embed] });
    }
  }
});
