// continuousHandler.ts
import { handleContinuousAnswer, isContinuousGameChannel } from "../services/continuousGame.js";
import { Message } from "oceanic.js";
import { client } from "../Client.js";

export async function handleContinuousGameMessage(message: Message): Promise<boolean> {
    if (message.author.bot || !message.channel) return false;
    
    if (isContinuousGameChannel(message.channel.id)) {
        try {
            const result = await handleContinuousAnswer(
                message.channel.id, 
                message.author.id, 
                message.content
            );
            
            try {
                if (result.correct) {
                    await client.rest.channels.createReaction(
                        message.channel.id,
                        message.id,
                        "✅" 
                    );
                    
                    const successMsg = await client.rest.channels.createMessage(message.channel.id, {
                        content: `✅ <@${message.author.id}> guessed correctly! +${result.points} ${result.category} points`
                    });
                    
                    setTimeout(async () => {
                        try {
                            await client.rest.channels.deleteMessage(message.channelID, successMsg.id);
                        } catch (error) {
                     
                        }
                    }, 3000);
                    
                } else {
                    await client.rest.channels.createReaction(
                        message.channel.id,
                        message.id,
                        "❌" 
                    );
                    
                    setTimeout(async () => {
                        try {
                            await client.rest.channels.deleteReaction(
                                message.channelID,
                                message.id,
                                "❌" 
                            );
                        } catch (error) {
                       
                        }
                    }, 2000);
                }
            } catch (error) {
                console.error("Error handling game reaction:", error);
            }
            
        } catch (error: any) {
            if (error.message === "PLAYER_NOT_REGISTERED") {
                // Send message telling user to register
                const warningMsg = await client.rest.channels.createMessage(message.channel.id, {
                    content: `<@${message.author.id}>, you need to register first! Use \`Geo start\` to create your player profile.`
                });
                
                setTimeout(async () => {
                    try {
                        if (message.channel) {
                            await client.rest.channels.deleteMessage(message.channel.id, warningMsg.id);
                        }
                    } catch (error) {
                    }
                }, 5000);
            } else {
                console.error("Error handling continuous game answer:", error);
            }
        }
        
        return true;
    }
    
    return false;
}