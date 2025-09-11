import '~commands';
import '~modules';

import { client } from './Client.js';
import { startReminderScheduler } from './modules/reminderScheduler.js';
import { gameEvents, formatScores } from './modules/gameEvents.js';
import { getAliasData, createAliasEmbed, createPaginationButtons } from "./commands/aliases.js";

client.on("interactionCreate", async (interaction) => {
    // Check if it's a message component interaction
    if (interaction.type !== 3) return;
    
    // Check if it has a custom ID and it's an alias button
    if (!interaction.data.customID || !interaction.data.customID.startsWith("alias_")) return;

    try {
        const customID = interaction.data.customID;
        const parts = customID.split("_");
        
        if (parts.length < 5) return; // Invalid format
        
        const action = parts[1];
        const category = parts[2];
        const subcategory = parts[3] === "" ? undefined : parts[3];
        const page = parseInt(parts[4]);

        if (isNaN(page)) return;

        // Get the alias data
        const data = getAliasData(category, subcategory, page);
        if (!data) {
            await interaction.deferUpdate();
            await interaction.editOriginal({ content: "This alias list is no longer available." });
            return;
        }

        // Create the updated embed and buttons
        const embed = createAliasEmbed(category, subcategory, page, data);
        const components = createPaginationButtons(category, subcategory, page, data.totalPages);

        // Update the message
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
gameEvents.on('gameTimeout', async (gameId, channelId, scores, totalQuestions) => {
    try {
        const channel = await client.rest.channels.get(channelId);
        if (channel && 'messages' in channel) {
            await client.rest.channels.createMessage(channelId, {
                embeds: [
                    {
                        title: "⏰ Game Timeout",
                        description: `The 5-minute time limit has been reached!\n\n**Final Scores:**\n${formatScores(scores)}`,
                        color: 0xe74c3c,
                        footer: { text: "Game automatically ended due to timeout" }
                    }
                ]
            });
        }
    } catch (error) {
        console.error('Failed to send timeout message:', error);
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

// Connect the bot
client.connect();

// Start the reminder scheduler only when the bot is ready
client.on('ready', () => {
  console.log(`✅ Logged in as ${client.user?.tag}`);
  startReminderScheduler(client);
});



