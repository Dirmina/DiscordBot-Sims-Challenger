module.exports = {
  name: 'reactionRole',
  description: "Add or remove a role with a reaction role message handler",
  async execute(message, args, Discord, client) {
    const { cache } = message.guild.roles;
    const channel = message.channel.id;
    const basicGame = {
      role: cache.find(role => role.name == 'Les Sims 4'),
      emoji: '👨‍👩‍👦'
    }
    const moschino = {
      role : cache.find(role => role.name == 'Les Sims 4 - Kit Moschino'),
      emoji : '🏺'
    }
    const auTravail = {
      role : cache.find(role => role.name == 'Les Sims 4 - Au Travail'),
      emoji : '👷🏼'
    };
    const auRestaurant = {
      role : cache.find(role => role.name == 'Les Sims 4 - Au Restaurant'),
      emoji : '🍽️'
    };
    const vieCitadine = {
      role : cache.find(role => role.name == 'Les Sims 4 - Vie Citadine'),
      emoji : '🌇'
    };
    const chiensEtChats = {
      role : cache.find(role => role.name == 'Les Sims 4 - Chiens et Chats'),
      emoji : '🐶'
    };
    const saisons = {
      role : cache.find(role => role.name == 'Les Sims 4 - Saisons'),
      emoji : '🍁'
    };
    const heureDeGloire = {
      role : cache.find(role => role.name == 'Les Sims 4 - Heure de Gloire'),
      emoji : '🤩'
    };
    const ilesParadisiaques = {
      role : cache.find(role => role.name == 'Les Sims 4 - Iles Paradisiaques'),
      emoji : '🏝️'
    };
    const aLaFac = {
      role : cache.find(role => role.name == 'Les Sims 4 - A la Fac'),
      emoji : '📚'
    };
    const strangerVille = {
      role : cache.find(role => role.name == 'Les Sims 4 - StrangerVille'),
      emoji : '👽'
    };
    const ecologie = {
      role : cache.find(role => role.name == 'Les Sims 4 - Ecologie'),
      emoji : '🌳'
    };
    const etreParents = {
      role : cache.find(role => role.name == 'Les Sims 4 - Etre Parents'),
      emoji: '🧑🏼‍🍼'
    }

    let embed = new Discord.MessageEmbed()
      .setColor('#565')
      .setTitle('Tu joues aux Sims 4 ? Choisis tes DLCS pour avoir une expériences totalement personnalisée !!')
      .setDescription(`
        ${basicGame.emoji} : '${basicGame.role.name}'\n
        ${moschino.emoji} : '${moschino.role.name}'\n
        ${auTravail.emoji} : '${auTravail.role.name}'\n
        ${auRestaurant.emoji} : '${auRestaurant.role.name}'\n
        ${vieCitadine.emoji} : '${vieCitadine.role.name}'\n
        ${chiensEtChats.emoji} : '${chiensEtChats.role.name}'\n
        ${saisons.emoji} : '${saisons.role.name}'\n
        ${heureDeGloire.emoji} : '${heureDeGloire.role.name}'\n
        ${ilesParadisiaques.emoji} : '${ilesParadisiaques.role.name}'\n
        ${aLaFac.emoji} : '${aLaFac.role.name}'\n
        ${strangerVille.emoji} : '${strangerVille.role.name}'\n
        ${ecologie.emoji} : '${ecologie.role.name}'\n
        ${etreParents.emoji} : '${etreParents.role.name}'\n
        `)

    let messageEmbed = await message.channel.send(embed);
    messageEmbed.react(basicGame.emoji);
    messageEmbed.react(moschino.emoji);
    messageEmbed.react(auTravail.emoji);
    messageEmbed.react(auRestaurant.emoji);
    messageEmbed.react(vieCitadine.emoji);
    messageEmbed.react(chiensEtChats.emoji);
    messageEmbed.react(saisons.emoji);
    messageEmbed.react(heureDeGloire.emoji);
    messageEmbed.react(ilesParadisiaques.emoji);
    messageEmbed.react(aLaFac.emoji);
    messageEmbed.react(strangerVille.emoji);
    messageEmbed.react(ecologie.emoji);
    messageEmbed.react(etreParents.emoji);

    client.on('messageReactionAdd', async (reaction, user) => {
      if (reaction.message.partial) await reaction.message.fetch();
      if (reaction.partial) await reaction.fetch();
      if (user.bot) return;
      if (!reaction.message.guild) return;

      if (reaction.message.channel.id == channel) {
        switch (reaction.emoji.name) {
          case basicGame.emoji:
            await reaction.message.guild.members.cache.get(user.id).roles.add(basicGame.role);
            break;
            case moschino.emoji:
              await reaction.message.guild.members.cache.get(user.id).roles.add(moschino.role);
              break;
            case auTravail.emoji:
              await reaction.message.guild.members.cache.get(user.id).roles.add(auTravail.role);
              break;
            case auRestaurant.emoji:
              await reaction.message.guild.members.cache.get(user.id).roles.add(auRestaurant.role);
              break;
            case vieCitadine.emoji:
              await reaction.message.guild.members.cache.get(user.id).roles.add(vieCitadine.role);
              break;
            case chiensEtChats.emoji:
              await reaction.message.guild.members.cache.get(user.id).roles.add(chiensEtChats.role);
              break;
            case saisons.emoji:
              await reaction.message.guild.members.cache.get(user.id).roles.add(saisons.role);
              break;
            case heureDeGloire.emoji:
              await reaction.message.guild.members.cache.get(user.id).roles.add(heureDeGloire.role);
              break;
            case ilesParadisiaques.emoji:
              await reaction.message.guild.members.cache.get(user.id).roles.add(ilesParadisiaques.role);
              break;
            case aLaFac.emoji:
              await reaction.message.guild.members.cache.get(user.id).roles.add(aLaFac.role);
              break;
            case strangerVille.emoji:
              await reaction.message.guild.members.cache.get(user.id).roles.add(strangerVille.role);
              break;
            case ecologie.emoji:
              await reaction.message.guild.members.cache.get(user.id).roles.add(ecologie.role);
              break;
            case etreParents.emoji:
              await reaction.message.guild.members.cache.get(user.id).roles.add(etreParents.role);
              break;
        }
      }
      else {
        return;
      }
    })

    client.on('messageReactionRemove', async (reaction, user) => {
      if (reaction.message.partial) await reaction.message.fetch();
      if (reaction.partial) await reaction.fetch();
      if (user.bot) return;
      if (!reaction.message.guild) return;

      if (reaction.message.channel.id == channel) {
        switch (reaction.emoji.name) {
          case basicGame.emoji:
            await reaction.message.guild.members.cache.get(user.id).roles.remove(basicGame.role);
            break;
            case moschino.emoji:
              await reaction.message.guild.members.cache.get(user.id).roles.remove(moschino.role);
              break;
            case auTravail.emoji:
              await reaction.message.guild.members.cache.get(user.id).roles.remove(auTravail.role);
              break;
            case auRestaurant.emoji:
              await reaction.message.guild.members.cache.get(user.id).roles.remove(auRestaurant.role);
              break;
            case vieCitadine.emoji:
              await reaction.message.guild.members.cache.get(user.id).roles.remove(vieCitadine.role);
              break;
            case chiensEtChats.emoji:
              await reaction.message.guild.members.cache.get(user.id).roles.remove(chiensEtChats.role);
              break;
            case saisons.emoji:
              await reaction.message.guild.members.cache.get(user.id).roles.remove(saisons.role);
              break;
            case heureDeGloire.emoji:
              await reaction.message.guild.members.cache.get(user.id).roles.remove(heureDeGloire.role);
              break;
            case ilesParadisiaques.emoji:
              await reaction.message.guild.members.cache.get(user.id).roles.remove(ilesParadisiaques.role);
              break;
            case aLaFac.emoji:
              await reaction.message.guild.members.cache.get(user.id).roles.remove(aLaFac.role);
              break;
            case strangerVille.emoji:
              await reaction.message.guild.members.cache.get(user.id).roles.remove(strangerVille.role);
              break;
            case ecologie.emoji:
              await reaction.message.guild.members.cache.get(user.id).roles.remove(ecologie.role);
              break;
            case etreParents.emoji:
              await reaction.message.guild.members.cache.get(user.id).roles.remove(etreParents.role);
              break;
        }
      }
      else {
        return;
      }
    })
  }
}