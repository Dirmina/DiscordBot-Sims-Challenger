const Discord = require('discord.js');
const _ = require('lodash');

module.exports = {
    name: 'optionalObjective',
    description: 'The list of all available jobs for you !',
    execute(game, message) {
        const embed = new Discord.MessageEmbed()
        embed.setTitle('Optional Family Objective Command =D ! ')
        embed.setColor('#f5b3f3')
        embed.addField('Tous les objectifs familiaux optionnels disponibles :', _.values(game.objectifFamilialOptionnel));

        message.author.send(embed);
    }
}