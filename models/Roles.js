const Promise = require('bluebird');
const _ = require('lodash');

const Bibliotheque = require('../bibliotheque');

let Roles = {};


Roles.addRolesToUser = async (reaction, user, cache) => {
    console.log('coucou add');
    const emojisRoles = Bibliotheque.emojisRoles(cache);
    _.forEach(emojisRoles, emojiRole => {
        if (reaction.emoji.name == emojiRole.emoji)  {
            return reaction.message.guild.members.cache.get(user.id).roles.add(emojiRole.role);
        }
    })
}

Roles.removeRolesToUser = async (reaction, user, cache) => {
    const emojisRoles = Bibliotheque.emojisRoles(cache);
    _.forEach(emojisRoles, emojiRole => {
        if (reaction.emoji.name == emojiRole.emoji)  {
            return reaction.message.guild.members.cache.get(user.id).roles.remove(emojiRole.role);
        }
    })
};

module.exports = Roles;
