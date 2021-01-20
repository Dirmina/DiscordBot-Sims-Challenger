const Discord = require('discord.js');
const _ = require('lodash');

module.exports = {
    name: 'halftime',
    description: 'The list of all available jobs for you !',
    execute(message, game) {
        const title = 'Half Time Command =D ! '
        const name = 'Carrières à Mi-Temps disponible juste pour toi :';
        const value =  _.values(game.carrieresMiTemps);
        Embeds.createForCommand(title, { name, value })
        message.author.send(embed);
    }
}