
import { defineCommand } from "../Command";
import { reply } from "../utils";
import { ButtonStyles, ComponentTypes, MessageActionRow } from "oceanic.js";


import * as americanStates from "../data/americanStates";
import * as capitals from "../data/capitals";
import * as flags from "../data/flags";
import * as kabupatens from "../data/kabupatens";
import * as languages from "../data/languages";
import * as provinsis from "../data/provinsis";


const categoryData: Record<string, any> = {
    "american-states": americanStates.UnitedStates || americanStates,
    "capitals": capitals.capitals || capitals,
    "flags": flags.flags || flags,
    "kabupatens": kabupatens.kabupatens || kabupatens,
    "languages": languages.languages || languages,
    "provinsis": provinsis.provinsis || provinsis
};


const categoryInfo: Record<string, { name: string; hasSubcategories: boolean }> = {
    "american-states": { name: "American States", hasSubcategories: false },
    "capitals": { name: "Capitals", hasSubcategories: true },
    "flags": { name: "Flags", hasSubcategories: false },
    "kabupatens": { name: "Kabupatens", hasSubcategories: true },
    "languages": { name: "Languages", hasSubcategories: false },
    "provinsis": { name: "Provinces", hasSubcategories: false }
};

const ITEMS_PER_PAGE = 10;

interface AliasItem {
    name: string;
    answers: string[];
}

interface AliasData {
    items: AliasItem[];
    totalPages: number;
    currentPage: number;
    totalItems: number;
}

export function getAliasData(category: string, subcategory?: string, page = 1): AliasData | null {
    const data = categoryData[category];
    if (!data) return null;

    let items: AliasItem[] = [];
    let totalPages = 1;


    const hasSubcategories = categoryInfo[category]?.hasSubcategories;

    if (subcategory && hasSubcategories) {
      
        const subData = data[subcategory];
        if (!subData) return null;

        items = Object.entries(subData).map(([name, item]: [string, any]) => ({
            name,
            answers: item.answer || []
        }));
    } else if (!subcategory && hasSubcategories) {
      
        items = Object.keys(data).map(sub => ({
            name: sub,
            answers: [`Use \`?aliases ${category} ${sub}\` to view answers`]
        }));
    } else {
       
        items = Object.entries(data).map(([name, item]: [string, any]) => ({
            name,
            answers: item.answer || []
        }));
    }

   
    totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);
    const startIdx = (page - 1) * ITEMS_PER_PAGE;
    const endIdx = startIdx + ITEMS_PER_PAGE;
    const paginatedItems = items.slice(startIdx, endIdx);

    return {
        items: paginatedItems,
        totalPages,
        currentPage: page,
        totalItems: items.length
    };
}

export function createAliasEmbed(category: string, subcategory: string | undefined, page: number, data: AliasData) {
    const info = categoryInfo[category];
    
    let title: string;
    let description: string;

    if (subcategory) {
        title = `Aliases: ${info.name} - ${subcategory}`;
        description = data.items.map((item: AliasItem) => 
            `**${item.name}**: ${item.answers.map((a: string) => `\`${a}\``).join(', ')}`
        ).join('\n');
    } else if (categoryInfo[category]?.hasSubcategories) {
        title = `Aliases: ${info.name} - Subcategories`;
        description = data.items.map((item: AliasItem) => 
            `• **${item.name}** - ${item.answers[0]}`
        ).join('\n');
    } else {
        title = `Aliases: ${info.name}`;
        description = data.items.map((item: AliasItem) => 
            `**${item.name}**: ${item.answers.map((a: string) => `\`${a}\``).join(', ')}`
        ).join('\n');
    }

    return {
        title,
        description: description || 'No aliases found.',
        color: 0x5865f2,
        footer: {
            text: `Page ${page}/${data.totalPages} | Total: ${data.totalItems} items`
        },
        timestamp: new Date().toISOString()
    };
}


export function createPaginationButtons(category: string, subcategory: string | undefined, currentPage: number, totalPages: number) {
    const buttons = [];

   
    const subcategoryParam = subcategory === "" ? undefined : subcategory;
    const subcategoryID = subcategoryParam || "";

    if (currentPage > 1) {
        buttons.push({
            type: ComponentTypes.BUTTON,
            style: ButtonStyles.SECONDARY,
            label: "◀️ Previous",
            customID: `alias_prev_${category}_${subcategoryID}_${currentPage - 1}`
        });
    }

    if (currentPage < totalPages) {
        buttons.push({
            type: ComponentTypes.BUTTON,
            style: ButtonStyles.SECONDARY,
            label: "Next ▶️",
            customID: `alias_next_${category}_${subcategoryID}_${currentPage + 1}`
        });
    }

    if (buttons.length > 0) {
        return [{
            type: ComponentTypes.ACTION_ROW,
            components: buttons
        } as MessageActionRow];
    }

    return [];
}
defineCommand({
    name: "aliases",
    description: "View answer aliases for different categories",
    aliases: ["al","alias",],
    usages: ["<category>", "<category> <subcategory>", "<category> <page>", "<category> <subcategory> <page>", "list", "list <category>"],
    async run(message, args) {
        const [arg1, arg2, arg3] = args;

        
        if (arg1 === "list") {
            if (arg2) {
            
                const category = arg2;
                if (!categoryData[category]) {
                    return reply(message, {
                        embeds: [{
                            title: " Invalid Category",
                            description: `Available categories: ${Object.keys(categoryData).join(', ')}`,
                            color: 0xed4245
                        }]
                    });
                }

                const info = categoryInfo[category];
                if (!info.hasSubcategories) {
                    return reply(message, {
                        embeds: [{
                            title: " No Subcategories",
                            description: `The ${info.name} category does not have subcategories.`,
                            color: 0xed4245
                        }]
                    });
                }

                const data = categoryData[category];
                const subcategories = Object.keys(data);
                
                return reply(message, {
                    embeds: [{
                        title: `Subcategories for ${info.name}`,
                        description: subcategories.map(sub => `• **${sub}**`).join('\n'),
                        color: 0x5865f2,
                        footer: { text: `Use aliases ${category} <subcategory> to view answers` }
                    }]
                });
            }

      
            const categories = Object.entries(categoryInfo).map(([key, info]) => 
                `• \`${key}\` - ${info.name}${info.hasSubcategories ? ' (has subcategories)' : ''}`
            ).join('\n');

            return reply(message, {
                embeds: [{
                    title: "Available Categories",
                    description: categories,
                    color: 0x5865f2,
                    footer: { text: "Use aliases <category> to view aliases" }
                }]
            });
        }

        if (!arg1 || !categoryData[arg1]) {
            return reply(message, {
                embeds: [{
                    title: " Invalid Category",
                    description: `Available categories: ${Object.keys(categoryData).join(', ')}\nUse \`aliases list\` for more details.`,
                    color: 0xed4245
                }]
            });
        }

       
        let subcategory: string | undefined;
        let page = 1;

        if (arg2) {
         
            const pageNum = parseInt(arg2);
            if (!isNaN(pageNum)) {
                page = pageNum;
            } else {
                subcategory = arg2;
              
                if (arg3) {
                    const pageNum2 = parseInt(arg3);
                    if (!isNaN(pageNum2)) {
                        page = pageNum2;
                    }
                }
            }
        }

   
        const data = getAliasData(arg1, subcategory, page);
        if (!data || data.items.length === 0) {
            return reply(message, {
                embeds: [{
                    title: " No Data Found",
                    description: subcategory 
                        ? `No data found for ${arg1}/${subcategory}`
                        : `No data found for ${arg1}`,
                    color: 0xed4245
                }]
            });
        }

      
        const embed = createAliasEmbed(arg1, subcategory, page, data);
        const components = createPaginationButtons(arg1, subcategory, page, data.totalPages);

        await reply(message, {
            embeds: [embed],
            components: components
        });
    }
});

