const Discord = require('discord.js');
const _ = require('lodash');

module.exports = {
    name: 'optionalobjective',
    description: 'The list of all available jobs for you !',
    execute(message, game) {
        const title = 'Optional Family Objective Command =D ! '
        const name = 'Tous les objectifs familiaux optionnels disponibles :';
        const value =  _.values(game.objectifFamilialOptionnel);
        Embeds.createForCommand(title, { name, value })
        message.author.send(embed);
    }
}