import { defineCommand } from "../Command";
import { reply } from "../utils";
import { playerExists, createPlayerRecords } from "../services/playerCheck";
import { prisma } from "../Prisma";

defineCommand({
    name: "start",
    description: "Create your player profile to start playing GeoGuessr games",
    aliases: ["register", "begin"],
    usages: [""],
    hidden: true,
    async run(message) {
        const userId = message.author.id;

        try {
            const [score, profile, currency] = await Promise.all([
                prisma.playerScore.findUnique({ where: { userId } }),
                prisma.playerProfiles.findUnique({ where: { userId } }),
                prisma.playerCurrency.findUnique({ where: { userId } })
            ]);

            if (score && profile && currency) {
                return reply(message, {
                    embeds: [
                        {
                            title: "Already Registered",
                            description: "You already have a complete player profile! Use `Geo profile` to view your profile.",
                            color: 0xfee75c
                        }
                    ]
                });
            }

            await createPlayerRecords(userId);

            return reply(message, {
                embeds: [
                    {
                        title: "Welcome to GeoGuessr!",
                        description: "Your player profile has been created!\n\nYou can now:\n• Play games and earn points\n• View your profile with `Geo profile`\n• Earn badges and rewards\n• Compete on the leaderboard",
                        color: 0x57f287,
                        footer: { text: "Type Geo profile to see your profile" }
                    }
                ]
            });

        } catch (error) {
            return reply(message, "An error occurred while creating your profile. Please try again.");
        }
    }
});