const Promise = require('bluebird');
const _ = require('lodash');

const Bibliotheque = require('../bibliotheque');

let Roles = {};

Roles.searchAndSetAMissingGuildRole = (roles, roleName) => {
    if (!roles.cache.find( role => role.name === roleName)) {
        return roles.create( {
            data : {
                name : roleName,
                color: "#42f566"
            }
        })
    }
}

Roles.editRolesFromReaction = (reaction, reactionName, cache) => {
    const { roles } = reaction.message.guild.members.cache.get(user.id);
    _.forEach(Bibliotheque.emojisRoles(cache), emojiRole => {
        if (reaction.emoji.name == emojiRole.emoji)  {
            reactionName == 'messageReactionAdd'
            ? roles.add(emojiRole.role)
            : roles.remove(emojiRole.role);
        }
    })
}

module.exports = Roles;
