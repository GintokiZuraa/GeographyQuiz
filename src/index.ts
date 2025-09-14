import '~commands';
import '~modules';

import { client } from './Client.js';
import { startContinuousGames } from "./services/continuousGame.js";
import { handleContinuousGameMessage } from "./modules/handlerContinuous.js";
import { startReminderScheduler } from './modules/reminderScheduler.js';
import { gameEvents } from './modules/gameEvents.js';
import { getAliasData, createAliasEmbed, createPaginationButtons } from "./commands/aliases.js";
import { refreshLeaderboardCache } from "./services/scoreServices";

client.on("messageCreate", async (message) => {
  
    const wasHandled = await handleContinuousGameMessage(message);
    if (wasHandled) return;
    
});

client.on("interactionCreate", async (interaction) => {
  
    if (interaction.type !== 3) return;
    
  
    if (!interaction.data.customID || !interaction.data.customID.startsWith("alias_")) return;

    try {
        const customID = interaction.data.customID;
        const parts = customID.split("_");
        
        if (parts.length < 5) return; 
        
        const action = parts[1];
        const category = parts[2];
        const subcategory = parts[3] === "" ? undefined : parts[3];
        const page = parseInt(parts[4]);

        if (isNaN(page)) return;

    
        const data = getAliasData(category, subcategory, page);
        if (!data) {
            await interaction.deferUpdate();
            await interaction.editOriginal({ content: "This alias list is no longer available." });
            return;
        }


        const embed = createAliasEmbed(category, subcategory, page, data);
        const components = createPaginationButtons(category, subcategory, page, data.totalPages);

    
        await interaction.deferUpdate();
        await interaction.editOriginal({
            embeds: [embed],
            components: components
        });

    } catch (error) {
        console.error('Error handling alias button:', error);
        try {
            await interaction.deferUpdate();
            await interaction.editOriginal({ content: "An error occurred while processing your request." });
        } catch (e) {
            console.error('Failed to send error message:', e);
        }
    }

    
});

gameEvents.on('gameCancelled', async (game) => {
    try {
        const channel = await client.rest.channels.get(game.channelId);
        if (channel && 'messages' in channel) {
            await client.rest.channels.createMessage(game.channelId, {
                embeds: [
                    {
                        title: " Game Cancelled",
                        description: "The game was cancelled because no one started it within 1 minute.",
                        color: 0xe74c3c
                    }
                ]
            });
        }
    } catch (error) {
        console.error('Failed to send cancellation message:', error);
    }
});


client.connect();


client.on('ready', () => {
  console.log(`✅ Logged in as ${client.user?.tag}`);
  startReminderScheduler(client);
  refreshLeaderboardCache();
  startContinuousGames();
});