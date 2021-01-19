const Bibliotheque = require("../bibliotheque.js");

const Functions = require('../functions');
const Settings = require('../models/Settings');
const SettingsApplied = require('../models/SettingsApplied');

const Discord = require("discord.js")
const _ = require('lodash');
const Promise = require('bluebird');

module.exports = {
    name: "challenge",
    description: "generate a sims challenge",
    gameProfile(message) {
        let game = {}
        if (message.member.roles.cache.find(role => role.name === "Les Sims 4")) {
            game = Bibliotheque.game.base;

            if (message.member.roles.cache.find(role => role.name === "Les Sims 4 - Kit Moschino")) {
                let keys = _.keys(game.carrieresNonConventionnelles);
                _.forEach(Bibliotheque.game.moschino.carrieresNonConventionnelles, (value, key) => {
                    key = _.parseInt(key);
                    newKey = keys.length + key;
                    game.carrieresNonConventionnelles[newKey] = value;
                })
            }

            if (message.member.roles.cache.find(role => role.name === "Les Sims 4 - Au Travail")) {
                let keysNC = _.keys(game.carrieresNonConventionnelles);
                _.forEach(Bibliotheque.game.auTravail.carrieresNonConventionnelles, (value, key) => {
                    key = _.parseInt(key);
                    newKey = keysNC.length + key;
                    game.carrieresNonConventionnelles[newKey] = value;
                })
                let keysC = _.keys(game.carrieresConventionnelles);
                _.forEach(Bibliotheque.game.auTravail.carrieresConventionnelles, (value, key) => {
                    key = _.parseInt(key);
                    newKey = keysC.length + key;
                    game.carrieresConventionnelles[newKey] = value;
                })
            }

            if (message.member.roles.cache.find(role => role.name === "Les Sims 4 - Au Restaurant")) {
                let keys = _.keys(game.carrieresNonConventionnelles);
                _.forEach(Bibliotheque.game.auRestaurant.carrieresNonConventionnelles, (value, key) => {
                    key = _.parseInt(key);
                    newKey = keys.length + key;
                    game.carrieresNonConventionnelles[newKey] = value;
                })
            }

            if (message.member.roles.cache.find(role => role.name === "Les Sims 4 - Vie Citadine")) {
                let keys = _.keys(game.carrieresConventionnelles);
                _.forEach(Bibliotheque.game.vieCitadine.carrieresConventionnelles, (value, key) => {
                    key = _.parseInt(key);
                    newKey = keys.length + key;
                    game.carrieresConventionnelles[newKey] = value;
                })
            }

            if (message.member.roles.cache.find(role => role.name === "Les Sims 4 - Chiens et Chats")) {
                let keys = _.keys(game.carrieresConventionnelles);
                _.forEach(Bibliotheque.game.chiensEtChats.carrieresConventionnelles, (value, key) => {
                    key = _.parseInt(key);
                    newKey = keys.length + key;
                    game.carrieresConventionnelles[newKey] = value;
                })
            }

            if (message.member.roles.cache.find(role => role.name === "Les Sims 4 - Saisons")) {
                let keysNC = _.keys(game.carrieresNonConventionnelles);
                _.forEach(Bibliotheque.game.saisons.carrieresNonConventionnelles, (value, key) => {
                    key = _.parseInt(key);
                    newKey = keysNC.length + key;
                    game.carrieresNonConventionnelles[newKey] = value;
                })
                let keysC = _.keys(game.carrieresConventionnelles);
                _.forEach(Bibliotheque.game.saisons.carrieresConventionnelles, (value, key) => {
                    key = _.parseInt(key);
                    newKey = keysC.length + key;
                    game.carrieresConventionnelles[newKey] = value;
                })
            }

            if (message.member.roles.cache.find(role => role.name === "Les Sims 4 - Heure De Gloire")) {
                let keys = _.keys(game.carrieresConventionnelles);
                _.forEach(Bibliotheque.game.heureDeGloire.carrieresConventionnelles, (value, key) => {
                    key = _.parseInt(key);
                    newKey = keys.length + key;
                    game.carrieresConventionnelles[newKey] = value;
                })
            }

            if (message.member.roles.cache.find(role => role.name === "Les Sims 4 - Iles Paradisiaques")) {
                let keys = _.keys(game.carrieresMiTemps);
                _.forEach(Bibliotheque.game.ileParadisiaques.carrieresMiTemps, (value, key) => {
                    key = _.parseInt(key);
                    newKey = keys.length + key;
                    game.carrieresMiTemps[newKey] = value;
                })
            }

            if (message.member.roles.cache.find(role => role.name === "Les Sims 4 - A la Fac")) {
                let keysC = _.keys(game.carrieresConventionnelles);
                _.forEach(Bibliotheque.game.aLaFac.carrieresConventionnelles, (value, key) => {
                    key = _.parseInt(key);
                    newKey = keysC.length + key;
                    game.carrieresConventionnelles[newKey] = value;
                })
                let keysMT = _.keys(game.carrieresMiTemps);
                _.forEach(Bibliotheque.game.aLaFac.carrieresMiTemps, (value, key) => {
                    key = _.parseInt(key);
                    newKey = keysMT.length + key;
                    game.carrieresConventionnelles[newKey] = value;
                })
            }

            if (message.member.roles.cache.find(role => role.name === "Les Sims 4 - StrangerVille")) {
                const keys = _.keys(game.carrieresConventionnelles);
                _.forEach(Bibliotheque.game.strangerVille.carrieresConventionnelles, (value, key) => {
                    key = _.parseInt(key);
                    newKey = keys.length + key;
                    game.carrieresConventionnelles[newKey] = value;
                })
            }

            if (message.member.roles.cache.find(role => role.name === "Les Sims 4 - Ecologie")) {
                const keys = _.keys(game.carrieresConventionnelles);
                _.forEach(Bibliotheque.game.ecologie.carrieresConventionnelles, (value, key) => {
                    key = _.parseInt(key);
                    newKey = keys.length + key;
                    game.carrieresConventionnelles[newKey] = value;
                })
            }
        }
    return game;
    },
    async execute(game, message) {
        console.log(game);
        let fields = []
        let settings = {
            objectifFamilialOptionnel: {
                triplet: false,
                noWorkForOneGen: false,
                theHeirHasTwoContraintes: false,
                twoWorksLevelTenForOneSim: false
            },
            revenus : {
                carrieresConventionnelles: false,
                carrieresNonConventionnelles: false,
                carrieresMiTemps: false
            }
        }


        const embed = new Discord.MessageEmbed();
        const keys =  _.keys(game);

        embed.setTitle("Ton nouveau Sims-Challenge ! Enjoy !");
        embed.setColor("#d1d1d1");
        await Promise.each(keys, key => {
            try {
                let field;
                const categoryName = _.startCase(key);
                const keyForRandom = _.keys(game[key]);
                const random = Functions.getRandomIntInclusive(1, keyForRandom.length);

                //when key = carrieresXXX settings.revenus[key] == false alors return;
                if (settings.revenus[key] === false) {
                    return;
                }
                //if twoWorks... is true so we will see if there is one or more settings on TRUE. if there is only one, so we need to create an optional field cause it means that the second revenus is the same as the first one.
                if (settings.objectifFamilialOptionnel.twoWorksLevelTenForOneSim && (key == 'carrieresConventionnelles' || key == 'carrieresNonConventionnelles' || key == 'carrieresMiTemps')) {
                    let count = 0;
                    const array = _.values(settings.revenus);
                    _.forEach(array, bool => {
                        if (bool) {
                            count++;
                        }
                    })
                    if (count == 1) {
                        var field_optional = SettingsApplied.secondRandomOnOneKey(keyForRandom.length, random, categoryName, game[key]);
                    }
                }

                //if settings.theHeirHasTwoContraintes so second random
                if ( key == 'contrainteGenerationnelle' && settings.objectifFamilialOptionnel.theHeirHasTwoContraintes == true ) {
                    var field_optional = SettingsApplied.secondRandomOnOneKey(keyForRandom.length, random, categoryName, game[key]);
                }
                //Set settings for optional family objective :
                if (key == 'objectifFamilialOptionnel') {
                    settings.objectifFamilialOptionnel = Settings.setSettingsForObjectifFamilialOptionnel(random, settings.objectifFamilialOptionnel);
                }
                //if settings.triplet == true :
                if (key == 'nombreEnfants' && settings.objectifFamilialOptionnel.triplet == true) {
                    field = SettingsApplied.objectifTriplet(random, game[key][random], categoryName);
                }

                //Set settings for the payCheck mode :
                if (key == 'revenus') {
                    settings.revenus = Settings.setSettingsForRevenus(random, settings.revenus);
                }
                if (key == 'revenus' && settings.objectifFamilialOptionnel.twoWorksLevelTenForOneSim) {
                    let random2 = Functions.getRandomIntInclusive(1, keyForRandom.length);
                    settings.revenus = Settings.setSettingsForRevenus(random2, settings.revenus);

                    const fieldOptionalName = `${categoryName} n°2 (si objectif familial optionnel accepté) :`;
                    var field_optional = Functions.setField(fieldOptionalName, game[key][random2]);
                }

                //Si personne n'a de boulot via l'objectif familial optionnel, alors revenus et carrieres doivent être maj 'sauf si objo opt accepté
                if (settings.objectifFamilialOptionnel.noWorkForOneGen == true && (key == 'revenus' || key == 'carrieresConventionnelles' || key == 'carrieresNonConventionnelles' || key == 'carrieresMiTemps')) {
                    field = SettingsApplied.noWorkForOneGen(key, game[key][random], categoryName);
                }

                //If the value of the field has not been modified :
                if (_.isUndefined(field)) {
                    const fieldName = `${categoryName} :`
                    field = Functions.setField(fieldName, game[key][random])
                }

                fields.push(field)

                //If there is an optional field :
                if (!_.isUndefined(field_optional)) {
                    fields.push(field_optional)
                }
            }
            catch (error) {
                return error;
            }
        })
        embed.addFields(...fields);
        console.log(fields);
        console.log("##########################################################################################");
        return message.author.send(embed);
    }
}