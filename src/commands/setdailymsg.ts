import { defineCommand } from "../Command";
import { reply } from "../utils";
import { setReminderMessage } from "../modules/reminderScheduler";

defineCommand({
    name: "setreminder",
    description: "Set the daily reminder message",
    usages: ["<message>"],
    ownerOnly: true,
    async run(message, args) {
        const content = args.join(" ");
        if (!content) return reply(message, "Please provide a reminder message.");

        setReminderMessage(content);
        return reply(message, `Reminder message updated to:\n${content}`);
    },
});
