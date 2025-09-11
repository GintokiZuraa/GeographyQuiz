import { Command, commands, defineCommand } from "../Command";
import { commandListEmbed, createInfoEmbed, createErrorEmbed, reply } from "../utils";

defineCommand({
    name: "help",
    description: "List all commands or get info about a specific command",
    usages: ["[command]"],
    async run(message, [name]) {
        if (!name) {
            return reply(message, {
                embeds: [commandListEmbed()]
            });
        }

        name = name.toLowerCase();
      
        const command =
            commands.get(name) ||
            commands.find(({ aliases }) => aliases?.includes(name));

        if (!command) {
            return reply(message, {
                embeds: [createErrorEmbed("Error", "That command does not exist")]
            });
        }

        await reply(message, {
            embeds: [commandHelp(command)]
        });
    }
});

function commandHelp({ name, aliases, description, usages, ownerOnly }: Command) {
    let usageText = usages?.length
        ? usages.map((u) => `\`${name} ${u}\``).join("\n")
        : "None";

    const fields = [
        {
            name: "Description",
            value: description || "No description provided",
            inline: false
        },
        {
            name: "Usages",
            value: usageText,
            inline: false
        }
    ];

    if (aliases?.length) {
        fields.push({
            name: "Aliases",
            value: aliases.map((a) => `\`${a}\``).join(", "),
            inline: false
        });
    }

    if (ownerOnly) {
        fields.push({
            name: "Owner Only",
            value: "✅ Yes",
            inline: false
        });
    }

    return {
        title: `Help: ${name}`,
        color: 0x5865f2,
        fields,
        timestamp: new Date().toISOString()
    };
}
