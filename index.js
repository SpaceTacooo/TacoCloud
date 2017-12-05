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
      message.channel.send(`__SpaceTaco Commands__:\n\n  **${prefix}help**\n  Shows a help menu with a list of commands.`);
    }
    
});

client.login(data.token);
