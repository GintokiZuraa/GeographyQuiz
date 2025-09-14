
import { prisma } from "../Prisma";
import { playerExists } from "./playerCheck";

export interface CurrencyReward {
  coins: number;
  gems?: number;
}

export async function addCurrency(userId: string, reward: CurrencyReward) {
    const exists = await playerExists(userId);
    if (!exists) {
        throw new Error("PLAYER_NOT_REGISTERED");
    }

    return await prisma.playerCurrency.upsert({
        where: { userId },
        update: {
            coins: { increment: reward.coins },
            gems: reward.gems ? { increment: reward.gems } : undefined,
            updatedAt: new Date()
        },
        create: {
            userId,
            coins: reward.coins,
            gems: reward.gems || 0
        }
    });
}

export async function getCurrency(userId: string) {
    const exists = await playerExists(userId);
    if (!exists) {
        throw new Error("PLAYER_NOT_REGISTERED");
    }

    return await prisma.playerCurrency.findUnique({
        where: { userId }
    });
}

export async function deductCurrency(userId: string, amount: number, currencyType: 'coins' | 'gems' = 'coins') {
  return await prisma.playerCurrency.update({
    where: { userId },
    data: {
      [currencyType]: { decrement: amount },
      updatedAt: new Date()
    }
  });
}

export async function getCurrencyLeaderboard(limit: number = 10) {
  return await prisma.playerCurrency.findMany({
    orderBy: { coins: 'desc' },
    take: limit,
    select: {
      userId: true,
      coins: true,
      gems: true
    }
  });
}