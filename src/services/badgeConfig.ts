import { Category } from "./scoreServices";

export interface BadgeRequirement {
    points: number;
    badge: string;
    title: string;
    badgeId: string;
    titleId: string; 
    unlocked?: boolean;
    currentProgress?: number;
}

export interface BadgeProgress {
    unlockedBadges: BadgeRequirement[];
    nextBadge: BadgeRequirement | null;
    progressToNext: number;
    totalRequired: number;
}

export interface BadgeRequirement {
    points: number;
    badge: string;
    title: string;
    badgeId: string;
    titleId: string;
    unlocked?: boolean;
    currentProgress?: number;
}

export interface BadgeProgress {
    unlockedBadges: BadgeRequirement[];
    nextBadge: BadgeRequirement | null;
    progressToNext: number;
    totalRequired: number;
}


export const badgeRequirements: Record<Category, BadgeRequirement[]> = {
    flag: [
        { points: 1000, badge: 'flag1', title: 'Flag Spotter', badgeId: '13', titleId: '1' },
        { points: 100000, badge: 'flag2', title: 'Flag Conqueror', badgeId: '14', titleId: '2' },
        { points: 1000000, badge: 'flag3', title: 'Flag Overlord', badgeId: '15', titleId: '3' }
    ],
    capital: [
        { points: 1000, badge: 'capital1', title: 'City Scout', badgeId: '16', titleId: '4' },
        { points: 100000, badge: 'capital2', title: 'City Strategist', badgeId: '17', titleId: '5' },
        { points: 1000000, badge: 'capital3', title: 'City Sovereign', badgeId: '18', titleId: '6' }
    ],
    language: [
        { points: 1000, badge: 'language1', title: 'Tongue Tinkerer', badgeId: '19', titleId: '7' },
        { points: 100000, badge: 'language2', title: 'Linguistic Maverick', badgeId: '20', titleId: '8' },
        { points: 1000000, badge: 'language3', title: 'Polyglot Supreme', badgeId: '21', titleId: '9' }
    ],
    state: [
        { points: 10000, badge: 'states', title: 'State Pathfinder', badgeId: '25', titleId: '13' },
        { points: 100000, badge: 'states', title: 'State Dominator', badgeId: '26', titleId: '14' },
        { points: 1000000, badge: 'states', title: 'State Monarch', badgeId: '27', titleId: '15' }
    ],
    kabupaten: [
        { points: 100000, badge: 'kabupaten_provinsi', title: 'Kabupaten Adventurer', badgeId: '28', titleId: '16' },
        { points: 1000000, badge: 'kabupaten_provinsi', title: 'Kabupaten Ruler', badgeId: '29', titleId: '17' },
        { points: 10000000, badge: 'kabupaten_provinsi', title: 'Kabupaten Emperor', badgeId: '30', titleId: '18' }
    ],
    province: [
        { points: 1000000, badge: 'province', title: 'Province Explorer', badgeId: '31', titleId: '19' },
        { points: 10000000, badge: 'province', title: 'Province Warlord', badgeId: '32', titleId: '20' },
        { points: 100000000, badge: 'province', title: 'Province Immortal', badgeId: '33', titleId: '21' }
    ]
};

export const championBadges: BadgeRequirement[] = [
    { points: 10000, badge: 'champ1', title: 'Geo Challenger', badgeId: '22', titleId: '10' },
    { points: 10000000, badge: 'champ2', title: 'Geo enthusiast', badgeId: '23', titleId: '11' },
    { points: 100000000, badge: 'champ3', title: 'Rainbolt', badgeId: '24', titleId: '12' },
];


export function calculateBadgeProgress(userPoints: number, category: Category): BadgeProgress {
    const requirements = badgeRequirements[category];
    const result: BadgeProgress = {
        unlockedBadges: [],
        nextBadge: null,
        progressToNext: 0,
        totalRequired: 0
    };

    requirements.forEach((req) => {
        const unlocked = userPoints >= req.points;
        
        if (unlocked) {
            result.unlockedBadges.push({ ...req, unlocked: true, currentProgress: userPoints });
        } else if (!result.nextBadge) {
            result.nextBadge = req;
            result.progressToNext = userPoints;
            result.totalRequired = req.points;
        }
    });

    return result;
}

export function calculateChampionProgress(totalPoints: number): BadgeProgress {
    const result: BadgeProgress = {
        unlockedBadges: [],
        nextBadge: null,
        progressToNext: totalPoints,
        totalRequired: 0
    };

    championBadges.forEach(badge => {
        if (totalPoints >= badge.points) {
            result.unlockedBadges.push({ ...badge, unlocked: true, currentProgress: totalPoints });
        } else if (!result.nextBadge) {
            result.nextBadge = badge;
            result.totalRequired = badge.points;
        }
    });

    return result;
}

export function getAllTitles(): BadgeRequirement[] {
    const allTitles: BadgeRequirement[] = [];
    
  
    Object.values(badgeRequirements).forEach(requirements => {
        allTitles.push(...requirements);
    });
    
  
    allTitles.push(...championBadges);
    
    return allTitles;
}

export function getEarnedBadges(scores: Record<string, number>): { 
    badge: string; 
    title: string; 
    badgeId: string; 
    titleId: string; 
}[] {
    const earnedBadges: { badge: string; title: string; badgeId: string; titleId: string }[] = [];
    const totalPoints = Object.values(scores).reduce((sum, score) => sum + score, 0);

    
    for (const [category, requirements] of Object.entries(badgeRequirements)) {
        const categoryScore = scores[category] || 0;
        for (const requirement of requirements) {
            if (categoryScore >= requirement.points) {
                earnedBadges.push({
                    badge: requirement.badge,
                    title: requirement.title,
                    badgeId: requirement.badgeId,
                    titleId: requirement.titleId
                });
            }
        }
    }

 
    for (const requirement of championBadges) {
        if (totalPoints >= requirement.points) {
            earnedBadges.push({
                badge: requirement.badge,
                title: requirement.title,
                badgeId: requirement.badgeId,
                titleId: requirement.titleId
            });
        }
    }

    return earnedBadges;
}


export function getEarnedTitles(scores: Record<string, number>): { title: string; titleId: string }[] {
    const earnedTitles: { title: string; titleId: string }[] = [];
    const totalPoints = Object.values(scores).reduce((sum, score) => sum + score, 0);

    for (const [category, requirements] of Object.entries(badgeRequirements)) {
        const categoryScore = scores[category] || 0;
        for (const requirement of requirements) {
            if (categoryScore >= requirement.points) {
                earnedTitles.push({
                    title: requirement.title,
                    titleId: requirement.titleId
                });
            }
        }
    }

    for (const requirement of championBadges) {
        if (totalPoints >= requirement.points) {
            earnedTitles.push({
                title: requirement.title,
                titleId: requirement.titleId
            });
        }
    }

    return earnedTitles;
}