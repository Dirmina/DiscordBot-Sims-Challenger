const Discord = require('discord.js');
const Promise = require('bluebird');

const fs = require('fs');
const Functions = require('./functions');
const Roles = require('./models/Roles');
const Bibliotheque = require('./bibliotheque');
const dotenv = require('dotenv').config();
const bot = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});



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

bot.on('guildCreate', guild => {
    //Add channel text needed if not existing.
    Promise.each(Bibliotheque.channelsName, channelName => {
        Functions.searchAndSetAMissingChannelText(guild, channelName)
    })
    //Same for roles
    guild.roles.fetch()
        .then(roles => {
            Promise.each(Bibliotheque.guildRoles, roleName => {
                Roles.searchAndSetAMissingGuildRole(roles, guild, roleName);
            })
        })
        .catch (console.error)
})

bot.on('message', message => {
    let command;
    message.content.startsWith(prefix) 
        ? command = Functions.commandFormatter(message, prefix) 
        : false;

    if (message.channel.name == 'sims-challenger' && !message.author.bot && command !== 'reactionrole') {
        game = Functions.setGameProfile(message)
        Functions.executeCommand(command, bot, message, game);
    }

    if (message.channel.name == 'sims-4-dlc') {
        command == 'reactionrole' 
            ? Functions.executeCommand(command, bot, message, bot)
            : false;
    }
})

bot.login(process.env.BOT_TOKEN)

