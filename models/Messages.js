const Discord = require('discord.js')
const Promise = require('bluebird');
const _ = require('lodash');

const Bibliotheque = require('../bibliotheque');

let Messages = {};


Messages.getlastMessage = async messages => {
  const fetchmessages = await messages.fetch();
  const filteredMessages = _.filter(fetchmessages.first(10), message => !_.isEmpty(message.embeds));
  const lastMessage = _.pick(filteredMessages[0], ['embeds','id']);
  return await messages.fetch(lastMessage.id);
}
module.exports = Messages;
