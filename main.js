const Discord = require('discord.js');
const Promise = require('bluebird');

const fs = require('fs');
const Functions = require('./functions');
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
    if (!guild.channels.cache.find( channel => channel.name === "sims-challenger")) {
        guild.channels.create("sims-challenger")
    }
    if (!guild.channels.cache.find( channel => channel.name === "sims-4-dlc")) {
        guild.channels.create("sims-4-dlc");
    }

    guild.roles.fetch()
        .then(roles => {
            Promise.each(Bibliotheque.guildRoles, roleName => {
                Functions.searchAndSetAMissingGuildRole(roles, guild, roleName);
            })
        })
        .catch (console.error)
})
// bot.on('messageReactionAdd', async (reaction, user) => {
//     if (reaction.message.partial) await reaction.message.fetch();
//     if (reaction.partial) await reaction.fetch();
//     if (user.bot) return;
//     if (!reaction.message.guild) return;

//     if (reaction.message.channel.name == 'sims-4-dlc') {
//         const { cache } = reaction.message.guild.roles;
//     const basicGame = {
//       role: cache.find(role => role.name == 'Les Sims 4'),
//       emoji: '👨‍👩‍👦'
//     }
//     const moschino = {
//       role : cache.find(role => role.name == 'Les Sims 4 - Kit Moschino'),
//       emoji : '🏺'
//     }
//     const auTravail = {
//       role : cache.find(role => role.name == 'Les Sims 4 - Au Travail'),
//       emoji : '👷🏼'
//     };
//     const auRestaurant = {
//       role : cache.find(role => role.name == 'Les Sims 4 - Au Restaurant'),
//       emoji : '🍽️'
//     };
//     const vieCitadine = {
//       role : cache.find(role => role.name == 'Les Sims 4 - Vie Citadine'),
//       emoji : '🌇'
//     };
//     const chiensEtChats = {
//       role : cache.find(role => role.name == 'Les Sims 4 - Chiens et Chats'),
//       emoji : '🐶'
//     };
//     const saisons = {
//       role : cache.find(role => role.name == 'Les Sims 4 - Saisons'),
//       emoji : '🍁'
//     };
//     const heureDeGloire = {
//       role : cache.find(role => role.name == 'Les Sims 4 - Heure de Gloire'),
//       emoji : '🤩'
//     };
//     const ilesParadisiaques = {
//       role : cache.find(role => role.name == 'Les Sims 4 - Iles Paradisiaques'),
//       emoji : '🏝️'
//     };
//     const aLaFac = {
//       role : cache.find(role => role.name == 'Les Sims 4 - A la Fac'),
//       emoji : '📚'
//     };
//     const strangerVille = {
//       role : cache.find(role => role.name == 'Les Sims 4 - StrangerVille'),
//       emoji : '👽'
//     };
//     const ecologie = {
//       role : cache.find(role => role.name == 'Les Sims 4 - Ecologie'),
//       emoji : '🌳'
//     };
//     const etreParents = {
//       role : cache.find(role => role.name == 'Les Sims 4 - Etre Parents'),
//       emoji: '🧑🏼‍🍼'
//     }
//       switch (reaction.emoji.name) {
//         case basicGame.emoji:
//           await reaction.message.guild.members.cache.get(user.id).roles.add(basicGame.role);
//           break;
//           case moschino.emoji:
//             await reaction.message.guild.members.cache.get(user.id).roles.add(moschino.role);
//             break;
//           case auTravail.emoji:
//             await reaction.message.guild.members.cache.get(user.id).roles.add(auTravail.role);
//             break;
//           case auRestaurant.emoji:
//             await reaction.message.guild.members.cache.get(user.id).roles.add(auRestaurant.role);
//             break;
//           case vieCitadine.emoji:
//             await reaction.message.guild.members.cache.get(user.id).roles.add(vieCitadine.role);
//             break;
//           case chiensEtChats.emoji:
//             await reaction.message.guild.members.cache.get(user.id).roles.add(chiensEtChats.role);
//             break;
//           case saisons.emoji:
//             await reaction.message.guild.members.cache.get(user.id).roles.add(saisons.role);
//             break;
//           case heureDeGloire.emoji:
//             await reaction.message.guild.members.cache.get(user.id).roles.add(heureDeGloire.role);
//             break;
//           case ilesParadisiaques.emoji:
//             await reaction.message.guild.members.cache.get(user.id).roles.add(ilesParadisiaques.role);
//             break;
//           case aLaFac.emoji:
//             await reaction.message.guild.members.cache.get(user.id).roles.add(aLaFac.role);
//             break;
//           case strangerVille.emoji:
//             await reaction.message.guild.members.cache.get(user.id).roles.add(strangerVille.role);
//             break;
//           case ecologie.emoji:
//             await reaction.message.guild.members.cache.get(user.id).roles.add(ecologie.role);
//             break;
//           case etreParents.emoji:
//             await reaction.message.guild.members.cache.get(user.id).roles.add(etreParents.role);
//             break;
//       }
//     }
//     else {
//       return;
//     }
//   })
bot.on('message', message => {
    if (message.channel.name == 'sims-challenger' && message.content.startsWith(prefix) && !message.author.bot) {
        const args = message.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();
        switch (command) {
            case 'help':
                bot.commands.get('help').execute(message, args);
                break;
            case 'challenge':
                var game = bot.commands.get('challenge').gameProfile(message, args);
                bot.commands.get('challenge').execute(game, message);
                break;
            case 'newjobs':
                game = bot.commands.get('challenge').gameProfile(message, args);
                bot.commands.get('newjobs').execute(game, message);
                break;
            case 'halftime':
                game = bot.commands.get('challenge').gameProfile(message, args);
                bot.commands.get('halfTime').execute(game, message);
                break;
            case 'optionalobjective':
                game = bot.commands.get('challenge').gameProfile(message, args);
                bot.commands.get('optionalObjective').execute(game, message);
                break;
            case 'helpjob':
                bot.commands.get('helpJob').execute(message);
                break;
            case 'update':
                bot.commands.get('update').execute(message, bot);
                break;
        }
    }


    if (message.channel.name == 'sims-4-dlc') {
        const args = message.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();
        console.log(command);
        switch (command) {
            case 'reactionrole':
                console.log('hi');
                bot.commands.get('reactionRole').execute(message, args, Discord, bot);
                break;
    }
    }
    
})

bot.login(process.env.BOT_TOKEN)

