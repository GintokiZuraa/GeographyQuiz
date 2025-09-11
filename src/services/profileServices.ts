import { prisma } from "../Prisma";

export interface PlayerProfile {
    userId: string;
    title: string;
    badges: string[];
    unlockedTitles: string[]; 
}

export async function getProfile(userId: string): Promise<PlayerProfile> {
    return await prisma.playerProfiles.upsert({
        where: { userId },
        update: {},
        create: { 
            userId, 
            title: "Geo Beginner", 
            badges: [],
            unlockedTitles: [] 
        }
    });
}

export async function updateTitle(userId: string, title: string) {
    return await prisma.playerProfiles.update({
        where: { userId },
        data: { title }
    });
}

export async function unlockBadge(userId: string, badgeId: string) {
    const profile = await getProfile(userId);
    
    if (!profile.badges.includes(badgeId)) {
        return await prisma.playerProfiles.update({
            where: { userId },
            data: {
                badges: { push: badgeId }
            }
        });
    } else {
    }
    return profile;
}

export async function unlockTitle(userId: string, titleId: string) {
    
    const profile = await getProfile(userId);
    
    if (!profile.unlockedTitles.includes(titleId)) {
        const result = await prisma.playerProfiles.update({
            where: { userId },
            data: {
                unlockedTitles: { push: titleId }
            }
        });
        return result;
    }
    return profile;
}

export async function getUnlockedTitles(userId: string): Promise<string[]> {
    const profile = await getProfile(userId);
    return profile.unlockedTitles || []; 
}


export async function getUnlockedBadgesAndTitles(userId: string): Promise<{ badges: string[]; titles: string[] }> {
    const profile = await getProfile(userId);
    return {
        badges: profile.badges || [],
        titles: profile.unlockedTitles || []
    };
}