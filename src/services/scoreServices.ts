import { prisma } from "../Prisma";


export type Category = 
  | 'flag' 
  | 'capital' 
  | 'language' 
  | 'state' 
  | 'kabupaten' 
  | 'province';

export async function addScore(userId: string, category: Category, points: number) {
  if (points <= 0) {
    throw new Error("Points must be positive");
  }

  const updateData = {
    [category]: { increment: points },
    updatedAt: new Date()
  };

  return await prisma.playerScore.upsert({
    where: { userId },
    update: updateData,
    create: { 
      userId: userId,  
      [category]: points
    }
  });
}

export async function getScore(userId: string, category: Category) {
  const playerScore = await prisma.playerScore.findUnique({
    where: { userId },
    select: { [category]: true }
  });

  return playerScore ? playerScore[category] : 0;
}


export async function getAllScores(userId: string): Promise<Record<string, number>> {
  const playerScore = await prisma.playerScore.findUnique({
    where: { userId },
    select: {
      flag: true,
      capital: true,
      language: true,
      state: true,
      kabupaten: true,
      province: true
    }
  });

  return playerScore || {
    flag: 0,
    capital: 0,
    language: 0,
    state: 0,
    kabupaten: 0,
    province: 0
  };
}

export async function getTotalScore(userId: string) {
  const playerScore = await prisma.playerScore.findUnique({
    where: { userId },
    select: {
      flag: true,
      capital: true,
      language: true,
      state: true,
      kabupaten: true,
      province: true,
    }
  });

  if (!playerScore) return 0;

  return Object.values(playerScore).reduce((total, score) => total + score, 0);
}

export async function getLeaderboard(category?: Category, limit: number = 10) {
  if (category) {
  
    return await prisma.playerScore.findMany({
      orderBy: { [category]: 'desc' },
      take: limit,
      select: {
        userId: true,  
        [category]: true
      }
    });
  } else {

    const allScores = await prisma.playerScore.findMany({
      take: limit,
      select: {
        userId: true,
        flag: true,
        capital: true,
        language: true,
        state: true,
        kabupaten: true,
        province: true
      }
    });

   
    return allScores
      .map(player => ({
        userId: player.userId,
        total: Object.values(player).filter(val => typeof val === 'number')
                 .reduce((sum: number, score: number) => sum + score, 0)
      }))
      .sort((a, b) => b.total - a.total);
  }
}


export async function addScores(userId: string, scores: Partial<Record<Category, number>>) {
  const updateData: any = { updatedAt: new Date() };
  
  for (const [category, points] of Object.entries(scores)) {
    if (points && points > 0) {
      updateData[category] = { increment: points };
    }
  }

  return await prisma.playerScore.upsert({
    where: { userId },
    update: updateData,
    create: { 
      userId: userId, 
      ...scores
    }
  });
}


export interface PlayerRank {
    userId: string;
    totalPoints: number;
    rank: number;
}

export interface LeaderboardEntry {
    userId: string;
    username: string;
    title: string;
    totalPoints: number;
    rank: number;
}


let cachedLeaderboard: LeaderboardEntry[] = [];
let lastCacheTime: number = 0;
const CACHE_DURATION = 60 * 60 * 1000; 

export async function getCachedLeaderboard(): Promise<LeaderboardEntry[]> {
    const now = Date.now();

    if (cachedLeaderboard.length > 0 && now - lastCacheTime < CACHE_DURATION) {
        return cachedLeaderboard;
    }

    return await refreshLeaderboardCache();
}

export async function refreshLeaderboardCache(): Promise<LeaderboardEntry[]> {
    const allPlayers = await prisma.playerScore.findMany({
        include: {
            profile: {
                select: { title: true }
            }
        }
    });

    const playersWithTotal = allPlayers.map(player => {
        const totalPoints = Object.values(player)
            .filter(val => typeof val === "number")
            .reduce((sum: number, score: number) => sum + score, 0);

        return {
            userId: player.userId,
            totalPoints,
            title: player.profile?.title || "Geo Beginner"
        };
    });

    playersWithTotal.sort((a, b) => b.totalPoints - a.totalPoints);

    cachedLeaderboard = playersWithTotal.map((player, index) => ({
        userId: player.userId,
        username: "",
        title: player.title,
        totalPoints: player.totalPoints,
        rank: index + 1
    }));

    lastCacheTime = Date.now();
    return cachedLeaderboard;
}

export async function getPlayerRank(userId: string): Promise<number> {
    const leaderboard = await getCachedLeaderboard();
    const player = leaderboard.find(p => p.userId === userId);
    return player ? player.rank : 0;
}

export async function getTotalPlayers(): Promise<number> {
    const leaderboard = await getCachedLeaderboard();
    return leaderboard.length;
}

export async function getTopPlayers(limit: number = 45): Promise<LeaderboardEntry[]> {
    const leaderboard = await getCachedLeaderboard();
    return leaderboard.slice(0, limit);
}