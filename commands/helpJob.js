const Discord = require('discord.js');

module.exports = {
  name: 'helpjob',
  description: 'A Help Fonction for job\'s description',
  execute(message) {
      const embed = new Discord.MessageEmbed()
      embed.setTitle('Description des différents jobs : ')
      embed.setColor('#f5b3f3')
      embed.addField('Artiste Electrisé', 'carrière sur téléphone');
      embed.addField('Ecrivain', 'Différent de "Auteur numérique" et "Auteur Indépendant". Nécessite la carrière disponible sur téléphone');
      embed.addField('Peintre', 'Différent de "Peintre Indépendant". Etre "Peintre" est une carrière disponible avec horaire de travail');
      embed.addField('Peintre Indépendant', 'Différent de "Peintre". Etre "Peintre Indépendant" signifie peindre des toiles chez soi et les vendre');
      embed.addField('Créateur', 'Différent de "Fabricant Indépendant", est celui qui fabrique des bougies')
      embed.addField('Hôte Professionnel', 'En rapport avec les évènements');
      embed.addField('Joueur Professionnel', 'Différent de "Joueur d\'E-Sport". concerne les joueurs sur PC sans la carrière sur téléphone');

      message.author.send(embed);
  }
}

//Voir Photographe de mode et photographe carriere mobile
//Apiculteur en rezlation avec les sa ison ?
//objo generationnell 9 et 10 dans un DLC EtreParents
//nouveau tirage pour objectif générationnel 1 si pas Carriere Conventionnelles