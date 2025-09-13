// src/modules/handlerContinuous.ts
import { handleContinuousAnswer, isContinuousGameChannel } from "../services/continuousGame.js";
import { Message } from "oceanic.js";
import { client } from "../Client.js";

export async function handleContinuousGameMessage(message: Message): Promise<boolean> {
    if (message.author.bot || !message.channel) return false;
    
    // Check if this is a continuous game channel
    if (isContinuousGameChannel(message.channel.id)) {
        const result = await handleContinuousAnswer(
            message.channel.id, 
            message.author.id, 
            message.content
        );
        
        try {
            if (result.correct) {
                // Add checkmark reaction using REST method
                await client.rest.channels.createReaction(
                    message.channel.id,
                    message.id,
                    "✅" // Unicode checkmark
                );
                
                // Send success message
                const successMsg = await client.rest.channels.createMessage(message.channel.id, {
                    content: `✅ <@${message.author.id}> guessed correctly! +${result.points} ${result.category} points`
                });
                
                // Delete success message after 3 seconds
                setTimeout(async () => {
                    try {
                        await client.rest.channels.deleteMessage(message.channelID, successMsg.id);
                    } catch (error) {
                        // Ignore delete errors
                    }
                }, 3000);
                
            } else {
                // Add cross reaction using REST method
                await client.rest.channels.createReaction(
                    message.channel.id,
                    message.id,
                    "❌" // Unicode cross
                );
                
                // Remove reaction after 2 seconds
                setTimeout(async () => {
                    try {
                        await client.rest.channels.deleteReaction(
                            message.channelID,
                            message.id,
                            "❌" // Unicode cross
                        );
                    } catch (error) {
                        // Ignore remove errors
                    }
                }, 2000);
            }
        } catch (error) {
            console.error("Error handling game reaction:", error);
        }
        
        return true;
    }
    
    return false;
}