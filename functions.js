const Promise = require('bluebird');
const _ = require('lodash');

const Bibliotheque = require('./bibliotheque');
const Roles = require('./models/Roles');
const Reactions = require('./models/Reactions');

let Functions = {};

Functions.getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}

Functions.setField = (categoryName, description) => 
    field = {
        name: categoryName,
        value: description
    }
Functions.searchAndSetAMissingGuildRole = (roles, guild, roleName) => {
    if (!roles.cache.find( role => role.name === roleName)) {
        return guild.roles.create( {
            data : {
                name : roleName,
                color: "#42f566"
            }
        })
    }
}

Functions.searchAndSetAMissingChannelText = (guild, channelName) => {
    if (!guild.channels.cache.find( channel => channel.name === channelName)) {
        guild.channels.create(channelName)
    }
}

Functions.setGameProfile = message => {
    const { cache: roles } = message.member.roles;
    let game = {}     
    _.forEach(Bibliotheque.guildRoles, roleToSearch => {
        if (roleToSearch == "Les Sims 4") {
            roles.find(role => role.name === roleToSearch) 
            ? game = Bibliotheque.game.base 
            : false;
        }

        else if (roles.find(role => role.name === roleToSearch)) {
            Promise.each(Bibliotheque.typeOfCarriere, carriereType => {
                let keys = _.keys(game[carriereType]);
                if (Bibliotheque.game[roleToSearch][carriereType] !== undefined) {
                    _.forEach(Bibliotheque.game[roleToSearch][carriereType], (value, key) => {
                        key = _.parseInt(key);
                        newKey = keys.length + key;
                        game[carriereType][newKey] = value;
                    })
                }
            })    
        }
    })
    return game;
}

Functions.executeCommand = (command, bot, message, argumentOfCommand) => {
    if (bot.commands.get(command)) {
        return bot.commands.get(command).execute(message, argumentOfCommand);
    }
    else {
        console.error(`The command "${command}" does NOT exist or is not available on this channel ! try again or try the command !help`)
    }
}

Functions.commandFormatter = (message, prefix) => {
    const args = message.content.slice(prefix.length).split(/ +/);
    return args.shift().toLowerCase();
}

Functions.setEmbed = (Discord, emojisRoles) => {
    let description = "";
    _.forEach(emojisRoles, emojiRole => {
        description += `${emojiRole.emoji} : '${emojiRole.role.name}'\n`
    })
    return new Discord.MessageEmbed()
        .setColor('#565')
        .setTitle('Tu joues aux Sims 4 ? Choisis tes DLCS pour avoir une expériences totalement personnalisée !!')
        .setDescription(description);
}

Functions.checkReaction = async (reaction, user, channel, cache, reactionName) => {
    Reactions.fetch(reaction);
    if (user.bot || !reaction.message.guild) return;
    if (reaction.message.channel.id == channel) {
       reactionName == 'messageReactionAdd' ? await Roles.addRolesToUser(reaction, user, cache)
        : await Roles.removeRolesToUser(reaction, user, cache)
      }
}

module.exports = Functions;
