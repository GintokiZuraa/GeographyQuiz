import { fileURLToPath } from "url";
import { dirname } from "path";
import { setTimeout as delay } from "timers/promises";
import { Client } from "oceanic.js";


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const CHANNEL_ID = "1396111144787251210"; 
const ROLE_ID = "1378990467038974032";  

let reminderMessage = "Buy daily push"; 
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
            const msUntilMidnightUTC =
                Date.UTC(
                    now.getUTCFullYear(),
                    now.getUTCMonth(),
                    now.getUTCDate() + 1,
                    0, 0, 0
                ) - now.getTime();

            await delay(msUntilMidnightUTC);

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
