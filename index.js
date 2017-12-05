const Discord = require('discord.js');
const client = new Discord.Client();

    const data = require('./data.json');
    const prefix = data.prefix;
    
    var tags = data.tags;

client.on('ready', () => {
    console.log('SpaceTaco logged in!!');
});

client.on('message', message => {

    if (message.content.toLowerCase() === `${prefix}help`) {
      message.channel.send(`__SpaceTaco Commands__:\n\n  **${prefix}help**\n  Shows a help menu with a list of commands.\n\n  **${prefix}serverinfo**\n  Display information about the server the command is run in.`);
    }
    
    if (message.content.toLowerCase() === `${prefix}serverinfo`) {
        if (message.guild === false) return (`The bot hit an error while performing this command:\nGuild not available. This means the guild is not able to provide data right now.`);
        message.channel.send(`__Server Information__:\n\n  **Name**\n  ${message.guild.name}\n\n  **Owner**\n  ${message.guild.owner.tag} (${message.guild.owner.id})\n\n  **Members**\n  ${message.guild.members.size}`);       
    }
    
});

client.login(data.token);
