const Promise = require('bluebird');
const _ = require('lodash');

const Bibliotheque = require('./bibliotheque');

exports.getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}

exports.setField = (categoryName, description) => 
    field = {
        name: categoryName,
        value: description
    }
exports.searchAndSetAMissingGuildRole = (roles, guild, roleName) => {
    if (!roles.cache.find( role => role.name === roleName)) {
        return guild.roles.create( {
            data : {
                name : roleName,
                color: "#42f566"
            }
        })
    }
}

exports.searchAndSetAMissingChannelText = (guild, channelName) => {
    if (!guild.channels.cache.find( channel => channel.name === channelName)) {
        guild.channels.create(channelName)
    }
}

exports.setGameProfile = message => {
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

exports.executeCommand = (command, bot, message, argumentOfCommand) => {
    if (bot.commands.get(command)) {
        return bot.commands.get(command).execute(message, argumentOfCommand);
    }
    else {
        console.error(`The command "${command}" does NOT exist or is not available on this channel ! try again or try the command !help`)
    }
}

exports.commandFormatter = (message, prefix) => {
    const args = message.content.slice(prefix.length).split(/ +/);
    return args.shift().toLowerCase();
}