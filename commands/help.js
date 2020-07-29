const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: 'A Help Fonction',
    execute(message, args) {
        const embed = new Discord.MessageEmbed()
        embed.setTitle('Commandes disponibles : ')
        embed.setColor('#f5b3f3')
        embed.addField('!help', 'Décrit les commandes disponibles');
        embed.addField('!challenge', 'génère aléatoirement un challenge');
        embed.addField('!newjobs', "Dans le cadre de la contrainte générationnelle \"A chaque niveau 4 de carrière atteint, la carrière si conventionnelle doit être tiré à nouveau pour l'héritier et son conjoint\" génère un travail pour l'héritier et le conjoint");

        message.author.send(embed);
    }
}