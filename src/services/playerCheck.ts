import { prisma } from "../Prisma";

export async function playerExists(userId: string): Promise<boolean> {
    const [score, profile, currency] = await Promise.all([
        prisma.playerScore.findUnique({ where: { userId } }),
        prisma.playerProfiles.findUnique({ where: { userId } }),
        prisma.playerCurrency.findUnique({ where: { userId } })
    ]);
    
    return !!(score || profile || currency);
}

export async function createPlayerRecords(userId: string) {
    const [existingScore, existingProfile, existingCurrency] = await Promise.all([
        prisma.playerScore.findUnique({ where: { userId } }),
        prisma.playerProfiles.findUnique({ where: { userId } }),
        prisma.playerCurrency.findUnique({ where: { userId } })
    ]);

    const operations = [];

    if (!existingProfile) {
        operations.push(
            prisma.playerProfiles.create({
                data: {
                    userId: userId,
                    title: "Geo Beginner",
                    badges: [],
                    unlockedTitles: []
                }
            })
        );
    }

    if (!existingScore) {
        operations.push(
            prisma.playerScore.create({
                data: { 
                    userId: userId,
                    flag: 0,
                    capital: 0,
                    language: 0,
                    state: 0,
                    kabupaten: 0,
                    province: 0
                }
            })
        );
    }

    if (!existingCurrency) {
        operations.push(
            prisma.playerCurrency.create({
                data: {
                    userId: userId,
                    coins: 0,
                    gems: 0
                }
            })
        );
    }

    if (operations.length > 0) {
        return await prisma.$transaction(operations);
    }
    
    return [];
}