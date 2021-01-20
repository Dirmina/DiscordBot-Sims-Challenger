const Discord = require('discord.js');
const Promise = require('bluebird');
const _ = require('lodash');

const Roles = require('../models/Roles');
const Messages = require('../models/Messages');
const Embeds = require('../models/Embeds');
const Bibliotheque = require('../bibliotheque');

module.exports = {
  name: 'update',
  description: 'update the bot !',
  async execute(message) {
      const { roles } = message.guild;
      const { channels } = message.guild;
      const { messages } = channels.cache.find(channel => channel.name == 'sims-4-dlc');
      const currentVersion = 'v2.1.0'
      const descriptionUpdate = "\n:person_feeding_baby_tone2: : 'Les Sims 4 - Être Parents'"
      let fields = [];
      Roles.searchAndSetAMissingGuildRole(roles, 'Les Sims 4 - Etre Parents');
      let messageToEdit = Messages.getlastMessage(messages);
      Embeds.editEmbed(messageToEdit, descriptionUpdate);
      messageToEdit.react('🧑🏼‍🍼');
      let embed = Embeds.setEmbedForUpdate(currentVersion);
      Embeds.createField('DLC ajouté :', 'Être Parents', fields);
      Embeds.createField('Objectifs Générationnels ajoutés avec le DLC :', _.values(Bibliotheque["Les Sims 4 - Etre Parents"].objectifGenerationnel), fields)
      embed.addFields(...fields);
      message.guild.channels.cache.find(channel => channel.name == 'sims-challenger').send(embed);
  }
}