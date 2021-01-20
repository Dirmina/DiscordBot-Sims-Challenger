const Discord = require('discord.js')
const Promise = require('bluebird');
const _ = require('lodash');

const Bibliotheque = require('../bibliotheque');

let Embeds = {};

Embeds.createForCommand = (title, field) =>{
  new Discord.MessageEmbed()
        embed.setTitle(title)
        embed.setColor('#f5b3f3')
        embed.addField(field);
}

Embeds.editEmbed = (messageToEdit, descriptionUpdate) => {
  messageToEdit.embeds[0].description += descriptionUpdate;
  let embed = new Discord.MessageEmbed()
    .setDescription(messageToEdit.embeds[0].description);
  return messageToEdit.edit(embed);
}

Embeds.setEmbedForUpdate = (currentVersion) =>
      embed = new Discord.MessageEmbed()
        .setTitle(`Update the Sims-Challenger to the ${currentVersion} !`)
        .setColor('#f5b3f3')

Embeds.createField = (name, value, fields) =>
  fields.push({ name, value });


module.exports = Embeds;
