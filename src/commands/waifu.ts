import { defineCommand } from '../Command';
import { Message, Client } from 'oceanic.js';
import axios from 'axios';

export default defineCommand({
  name: 'waifu',
  description: 'Get a random waifu image',
  aliases: [],
  async run(message: Message, args: string[]) {
    const client = message.client as Client;

    try {
      const res = await axios.get('https://api.waifu.pics/sfw/waifu');
      const imageUrl = res.data.url;

      await message.channel?.createMessage({
        content: `Here you go ---> ${imageUrl}`
      });
    } catch (err) {
      console.error('Error fetching waifu image:', err);
      await message.channel?.createMessage({
        content: 'Failed to fetch waifu image. Please try again later.'
      });
    }
  }
});
