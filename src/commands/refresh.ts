import { defineCommand } from "../Command";
import { EMOJI } from "../constants";
import { reply } from "../utils";
import { isContinuousGameChannel, postNewQuestion } from "../services/continuousGame";

defineCommand({
    name: "refresh",
    description: "Manually refresh the current question (Admin only)",
    aliases: ["newquestion", "next"],
    ownerOnly: true,
    async run(message) {
        if (!message.member?.permissions.has("ADMINISTRATOR")) {
            return reply(message, "Only administrators can refresh questions.");
        }
        
        if (!message.channel || !isContinuousGameChannel(message.channel.id)) {
            return reply(message, "This command only works in continuous game channels.");
        }
        
        await postNewQuestion(message.channel.id);
        
        return reply(message, `${EMOJI.correct} Question refreshed!`);
    }
});


