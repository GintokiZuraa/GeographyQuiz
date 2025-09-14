// src/services/playerCheck.ts
import { prisma } from "../Prisma";

export async function playerExists(userId: string): Promise<boolean> {
    const player = await prisma.playerScore.findUnique({
        where: { userId }
    });
    return !!player;
}

export async function createPlayerRecords(userId: string) {
    return await prisma.$transaction([
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
        }),
        prisma.playerProfiles.create({
            data: {
                userId: userId,
                title: "Geo Beginner",
                badges: [],
                unlockedTitles: []
            }
        }),
        prisma.playerCurrency.create({
            data: {
                userId: userId,
                coins: 0,
                gems: 0
            }
        })
    ]);
}