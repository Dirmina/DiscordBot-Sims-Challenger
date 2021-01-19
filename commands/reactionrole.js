const Discord = require('discord.js');
const _ = require('lodash');

const Bibliotheque = require("../bibliotheque.js");
const Functions = require('../functions');

module.exports = {
  name: 'reactionrole',
  description: "Add or remove a role with a reaction role message handler",
  async execute(message, client) {
    const { cache } = message.guild.roles;
    const channel = message.channel.id;

    const emojisRoles = Bibliotheque.emojisRoles(cache);
    let embed = Functions.setEmbed(Discord, emojisRoles);
    let messageEmbed = await message.channel.send(embed);
    
    _.forEach(emojisRoles, emojiRole => {
      messageEmbed.react(emojiRole.emoji);
    })
    const addReactionEvent = 'messageReactionAdd';
    client.on(addReactionEvent, async (reaction, user) => {
      await Functions.checkReaction(reaction, user, channel, cache, addReactionEvent);
    })

    const removeReactionEvent = 'messageReactionRemove';
    client.on(removeReactionEvent, async (reaction, user) => {
      await Functions.checkReaction(reaction, user, channel, cache, removeReactionEvent);
    })
  }
}