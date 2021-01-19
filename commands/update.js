const Discord = require('discord.js');
const Promise = require('bluebird');
const _ = require('lodash');

module.exports = {
  name: 'update',
  description: 'update the bot !',
  async execute(message, bot) {
      const { roles } = message.guild;
      const { channels } = message.guild;
      if (!roles.cache.find(role => role.name == 'Les Sims 4 - Etre Parents')) {
        roles.create({
          data: {
            name: 'Les Sims 4 - Etre Parents',
            color : "cfcfcf"
          }
        })
      }
      const {messages} = await channels.cache.find(channel => channel.name == 'sims-4-dlc');
      const fetchmessages = await messages.fetch();
      const filteredMessages = _.filter(fetchmessages.first(10), message => !_.isEmpty(message.embeds));
      const lastMessages = _.pick(filteredMessages[0], ['embeds','id']);
      messageToEdit = await messages.fetch(lastMessages.id);
      messageToEdit.embeds[0].description += `\n:person_feeding_baby_tone2: : 'Les Sims 4 - Être Parents'`;
      let embed = new Discord.MessageEmbed()
        .setDescription(messageToEdit.embeds[0].description);
      await messageToEdit.edit(embed);
      messageToEdit.react('🧑🏼‍🍼');
      let field;
      let fields = [];
      const currentVersion = 'v2.1.0'
      embed = new Discord.MessageEmbed()
      embed.setTitle(`Update the Sims-Challenger to the ${currentVersion} !`)
      embed.setColor('#f5b3f3')

      field = {
        name: 'DLC ajouté :',
        value: 'Être Parents'
      }
      fields.push(field);

      field = {
        name: 'Objectifs Générationnels ajoutés avec le DLC :',
        value: ["Les enfants doivent avoir au moins 3 qualités à l'âge adulte", "Un enfant doit avoir 5 qualités à l'age adulte"]
      }
      fields.push(field);
      embed.addFields(...fields);

      message.guild.channels.cache.find(channel => channel.name == 'sims-challenger').send(embed);
  }
}