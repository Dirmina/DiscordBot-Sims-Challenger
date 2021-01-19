const Discord = require("discord.js")
const Bibliotheque = require('../bibliotheque')
const Functions = require('../functions')
const _ = require('lodash');

module.exports = {
    name: 'newjobs',
    description: 'New jobs for the heir and his/her companion',
    execute(message, game) {
        const embed = new Discord.MessageEmbed()
        embed.setTitle("Nouveaux métiers pour l'héritier et le conjoint !")
        embed.setColor("#d1d1d1");
        const keyForRandom = _.keys(game.carrieresConventionnelles);
        let randomCarriereConventionnelle = Functions.getRandomIntInclusive(1, keyForRandom.length);
        embed.addField('Carrière Conventionnelle :', game.carrieresConventionnelles[randomCarriereConventionnelle]);

        randomCarriereConventionnelle = Functions.getRandomIntInclusive(1, keyForRandom.length);
        embed.addField('Carrière Conventionnelle (conjoint) :', game.carrieresConventionnelles[randomCarriereConventionnelle]);

        message.author.send(embed);
    }
}