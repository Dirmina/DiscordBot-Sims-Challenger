const Discord = require("discord.js")
const Bibliotheque = require('../bibliotheque')
const Functions = require('../functions')

const carrieresConventionnelles = Bibliotheque.carrieresConventionnelles

module.exports = {
    name: 'newjobs',
    description: 'New jobs for the heir and his/her companion',
    execute(message, args) {
        const embed = new Discord.MessageEmbed()
        embed.setTitle("Nouveaux métiers pour l'héritier et le conjoint !")
        embed.setColor("#d1d1d1");
        let randomCarriereConventionnelle = Functions.getRandomIntInclusive(1, 19);
        embed.addField('Carrière :', `${carrieresConventionnelles.get(randomCarriereConventionnelle)}`);
          
        randomCarriereConventionnelle = Functions.getRandomIntInclusive(1, 19);
        embed.addField('Carrière(conjoint) :', `${carrieresConventionnelles.get(randomCarriereConventionnelle)}`);

        message.author.send(embed);
    }
}