const Discord = require('discord.js');
const fs = require('fs');
const dotenv = require('dotenv').config();
const bot = new Discord.Client();

const prefix = '!';

bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    bot.commands.set(command.name, command);
}

bot.once('ready', () => {
    console.log("Sims Challenger Activated !");
})

bot.on('message', message => {
    if (message.channel.name !== 'sims-challenger' || !message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();


    switch (command) {
        case 'help':
           bot.commands.get('help').execute(message, args);
           break;
        case 'challenge':
            bot.commands.get('challenge').execute(message, args);
            break;
        case 'newjobs':
            bot.commands.get('newjobs').execute(message, args);
            break;
    }
})

bot.login(process.env.BOT_TOKEN)

