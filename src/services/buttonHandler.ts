import { handleAliasButtonInteraction } from "../commands/aliases";

export function handleButtonInteraction(interaction: any) {
    if (interaction.data.customID.startsWith('alias_')) {
        const isValid = handleAliasButtonInteraction(interaction);
        if (!isValid) return; 
        
        
        const parts = interaction.data.customID.split('_');
        const action = parts[1]; 
        const category = parts[2];
        const subcategory = parts[3] === "" ? undefined : parts[3];
        const page = parseInt(parts[4]);
    }
}