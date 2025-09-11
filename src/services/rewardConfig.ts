
import { Category } from "./scoreServices";
import { CurrencyReward } from "./currencyServices";


export const baseRewards: Record<Category, CurrencyReward> = {
  flag: { coins: 11 },
  capital: { coins: 14 },
  language: { coins: 10 },
  state: { coins: 5 },
  kabupaten: { coins: 12 },
  province: { coins: 3 }
};


export const completionBonus: CurrencyReward = {
  coins: 50, 
  gems: 1   
};


export const streakBonuses = [
  { streak: 3, reward: { coins: 25 } },
  { streak: 5, reward: { coins: 50, gems: 1 } },
  { streak: 10, reward: { coins: 100, gems: 3 } }
];