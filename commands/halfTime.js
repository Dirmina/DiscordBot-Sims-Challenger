const Discord = require('discord.js');
const _ = require('lodash');

module.exports = {
    name: 'halfTime',
    description: 'The list of all available jobs for you !',
    execute(game, message) {
        const embed = new Discord.MessageEmbed()
        embed.setTitle('Half Time Command =D ! ')
        embed.setColor('#f5b3f3')
        embed.addField('Carrières à Mi-Temps disponible juste pour toi :', _.values(game.carrieresMiTemps));

        message.author.send(embed);
    }
}