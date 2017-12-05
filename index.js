const Discord = require('discord.js');
const client = new Discord.Client();

    const data = require('./data.json');
    const prefix = data.prefix;
    
    var tags = data.tags;

client.on('ready', () => {
    console.log('TacoCloud logged in!!');
});

client.on('message', message => {

    if (message.content.toLowerCase() === `${prefix}help`) {
      message.channel.send(`__TacoCloud Commands__:\n\n  **${prefix}help**\n  Shows a help menu with a list of commands.\n\n  **${prefix}serverinfo**\n  Display information about the server the command is run in.`);
    }
    
    if (message.content.toLowerCase() === `${prefix}serverinfo`) {
        if (message.guild === false) return (`The bot hit an error while performing this command:\nGuild not available. This means the guild is not able to provide data right now.`);
        message.channel.send(`__Server Information__:\n\n  **Name**\n  ${message.guild.name}\n\n  **Owner**\n  ${message.guild.owner.user.tag} (${message.guild.owner.id})\n\n  **Members (inc. bots)**\n  ${message.guild.members.size}\n\n  **Region**\n  ${message.guild.region}\n\n  **Created**\n  ${message.guild.createdAt}
    }
    
});

client.login(data.token);
