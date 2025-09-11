import { fileURLToPath } from "url";
import { dirname } from "path";
import { setTimeout as delay } from "timers/promises";
import { Client } from "oceanic.js";


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const CHANNEL_ID = "1026446438500155432"; 
const ROLE_ID = "1333774477896454204";  

let reminderMessage = "Don't forget check Guild Tasks"; 
let schedulerRunning = false; 


export async function setReminderMessage(newMessage: string) {
    reminderMessage = newMessage;
}

export async function startReminderScheduler(client: Client) {
    const run = async () => {
        if (schedulerRunning) return;
        schedulerRunning = true;

        while (true) {
            const now = new Date();

      
            const daysUntilSaturday = (6 - now.getUTCDay() + 7) % 7; 
            const targetDate = new Date(
                Date.UTC(
                    now.getUTCFullYear(),
                    now.getUTCMonth(),
                    now.getUTCDate() + (daysUntilSaturday || 7), 
                    0, 0, 0
                )
            );

            const msUntilNextSaturday = targetDate.getTime() - now.getTime();

            await delay(msUntilNextSaturday);

            try {
                await client.rest.channels.createMessage(CHANNEL_ID, {
                    content: `<@&${ROLE_ID}> ${reminderMessage}`,
                });
            } catch {
                
            }
        }
    };

    if (client.ready) {
        run();
    } else {
        client.once("ready", run);
    }
}
