const Discord = require("discord.js")
const embed = new Discord.MessageEmbed()
const Bibliotheque = require('../bibliotheque')
const minMax = require('../min_max')
const Functions = require('../functions')

const objectifFamilialOptionnel = Bibliotheque.objectifFamilialOptionnel
const contrainteFamilialePermanente = Bibliotheque.contrainteFamilialePermanente
const structure = Bibliotheque.structure
const nombreEnfants = Bibliotheque.nombreEnfants
const revenus = Bibliotheque.revenus
const carrieresConventionnelles = Bibliotheque.carrieresConventionnelles
const carrieresNonConventionnelles =Bibliotheque.carrieresNonConventionnelles
const objectifGenerationnel = Bibliotheque.objectifGenerationnel
const contrainteGenerationnelle = Bibliotheque.contrainteGenerationnelle
const Heritier = Bibliotheque.heritier
const Demenagement = Bibliotheque.demenagement

module.exports = {
    name: 'challenge',
    description: 'Throw a random challenge to the user',
    execute(message, args) {
        const embed = new Discord.MessageEmbed()

        const randomObjectifFamilialOptionnel = Functions.getRandomIntInclusive(minMax.objectifFamilialOptionnel.get('min'), minMax.objectifFamilialOptionnel.get('max'));
        embed.addField(`Objectif Familial Optionnel, débloquant un trait de terrain positif :`, `${objectifFamilialOptionnel.get(randomObjectifFamilialOptionnel)}`);

        const randomContrainteFamilialePermanente =  Functions.getRandomIntInclusive(minMax.contrainteFamilialePermanente.get('min'), minMax.contrainteFamilialePermanente.get('max'));
        embed.addField(`Contrainte Familiale permanente à garder sur chaque génération :`, `${contrainteFamilialePermanente.get(randomContrainteFamilialePermanente)}` )

        let randomStructure = Functions.getRandomIntInclusive(minMax.structure.get('min'), minMax.structure.get('max'));
        if (randomStructure < 17) {
            (randomStructure > 0 && randomStructure < 9) ? randomStructure = 1 : randomStructure = 2;
        }
        embed.addField('Structure Familiale :', `${structure.get(randomStructure)}`)

        let randomNumberOfChild = Functions.getRandomIntInclusive(minMax.numberOfChild.get('min'), minMax.numberOfChild.get('max'));
        if (randomNumberOfChild < 8) {
            if ((randomNumberOfChild > 0) && (randomNumberOfChild < 3)) {
                randomNumberOfChild = 1;
            }
            else if ((randomNumberOfChild > 2) && (randomNumberOfChild < 6)) {
                randomNumberOfChild = 2;
            }
            else if ((randomNumberOfChild > 5) && (randomNumberOfChild < 8)) {
                randomNumberOfChild = 3;
            }
        }
        embed.addField(`Nombre d'enfants :`, `${nombreEnfants.get(randomNumberOfChild)}`);

        let randomTypeOfCarriere = Functions.getRandomIntInclusive(minMax.typeOfCarriere.get('min'), minMax.typeOfCarriere.get('max'));
        if (randomTypeOfCarriere < 10) {
            (randomTypeOfCarriere > 0) && (randomTypeOfCarriere <= 4) ? randomTypeOfCarriere = 1 : randomTypeOfCarriere = 2;
        }
        embed.addField('Type de Carrière :', `${revenus.get(randomTypeOfCarriere)}`); 
            
        switch (randomTypeOfCarriere) {
            case 1:
                let randomCarriereConventionnelle = Functions.getRandomIntInclusive(minMax.carrieresConventionnelles.get('min'), minMax.carrieresConventionnelles.get('max'));
                embed.addField('Carrière :', `${carrieresConventionnelles.get(randomCarriereConventionnelle)}`); 
                break;
            case 2:
                let randomCarriereNonConventionnelle = Functions.getRandomIntInclusive(minMax.carrieresNonConventionnelles.get('min'), minMax.carrieresNonConventionnelles.get('max'));
                embed.addField('Carrière :', `${carrieresNonConventionnelles.get(randomCarriereNonConventionnelle)}`); 
                break;
            case 3:
                embed.addField('Carrière à choisir parmi :',"• Baby-sitter • Barista • Employé de commerce • Employé de fast-food • Ouvrier");
                break;
            }


        if (randomStructure == 2 || randomStructure == 20) {
            randomTypeOfCarriere = Functions.getRandomIntInclusive(minMax.typeOfCarriere.get('min'), minMax.typeOfCarriere.get('max'));
            if (randomTypeOfCarriere < 10) {
                (randomTypeOfCarriere > 0) && (randomTypeOfCarriere < 5) ? randomTypeOfCarriere = 1 : randomTypeOfCarriere = 2;
            }
            embed.addField('Type de Carrière(conjoint) :', `${revenus.get(randomTypeOfCarriere)}`);             
                    
            switch (randomTypeOfCarriere) {
                case 1:
                    let randomCarriereConventionnelle = Functions.getRandomIntInclusive(minMax.carrieresConventionnelles.get('min'), minMax.carrieresConventionnelles.get('max'));
                    embed.addField('Carrière(conjoint) :', `${carrieresConventionnelles.get(randomCarriereConventionnelle)}`); 
                    break;
                case 2:
                    let randomCarriereNonConventionnelle = Functions.getRandomIntInclusive(minMax.carrieresNonConventionnelles.get('min'), minMax.carrieresNonConventionnelles.get('max'));
                    embed.addField('Carrière(conjoint) :', `${carrieresNonConventionnelles.get(randomCarriereNonConventionnelle)}`); 
                    break;
                case 3:
                    embed.addField('Carrière(conjoint) à choisir parmi :',"• Baby-sitter • Barista • Employé de commerce • Employé de fast-food • Ouvrier");
                    break;
            }
        }
        else if (randomStructure == 17) {
            for (child=1; child <= randomNumberOfChild; child++) {
                let randomTypeOfCarriere = Functions.getRandomIntInclusive(minMax.typeOfCarriere.get('min'), minMax.typeOfCarriere.get('max'));
                if (randomTypeOfCarriere < 10) {
                    (randomTypeOfCarriere > 0) && (randomTypeOfCarriere < 5) ? randomTypeOfCarriere = 1 : randomTypeOfCarriere = 2;
                }
                embed.addField(`Type de Carrière(conjoint  ${child})`, `${revenus.get(randomTypeOfCarriere)}`)
                    
                switch (randomTypeOfCarriere) {
                    case 1:
                        const randomCarriereConventionnelle = Functions.getRandomIntInclusive(minMax.carrieresConventionnelles.get('min'), minMax.carriereConventionnelles.get('max'));
                        embed.addField(`Carrière(conjoint) ${child}:`, `${carrieresConventionnelles.get(randomCarriereConventionnelle)}`); 
                        break;
                    case 2:
                        const randomCarriereNonConventionnelle = Functions.getRandomIntInclusive(minMax.carrieresNonConventionnelles.get('min'), minMax.carriereNonConventionnelles.get('max'));
                        embed.addField(`Carrière(conjoint) ${child}:`, `${carrieresNonConventionnelles.get(randomCarriereNonConventionnelle)}`); 
                        break;
                    case 3:
                        embed.addField(`Carrière(conjoint) ${child} à choisir parmi :`,"• Baby-sitter • Barista • Employé de commerce • Employé de fast-food • Ouvrier")
                        break;
                }
            }
        }

        const randomObjectifGenerationnel = Functions.getRandomIntInclusive(minMax.objectifGenerationnel.get('min'), minMax.objectifGenerationnel.get('max'));
        embed.addField('Objectif générationnel :', `${objectifGenerationnel.get(randomObjectifGenerationnel)}`); 
    
        const randomContrainteGenerationnelle = Functions.getRandomIntInclusive(minMax.contrainteGenerationnelle.get('min'), minMax.contrainteGenerationnelle.get('max'));
        embed.addField('Contrainte générationnelle :', `${contrainteGenerationnelle.get(randomContrainteGenerationnelle)}`); 

        const randomHeritier = Functions.getRandomIntInclusive(minMax.heritier.get('min'), minMax.heritier.get('max'));
        embed.addField("Héritier (à partir de la seconde génération) :", `${Heritier.get(randomHeritier)}\n`)  

        let randomDemenagement = Functions.getRandomIntInclusive(minMax.demenagement.get('min'), minMax.demenagement.get('max'));
        if (randomDemenagement < 10) {
            if ((randomDemenagement > 0) && (randomDemenagement < 5)) {
                randomDemenagement = 1;
            }
            else if ((randomDemenagement > 4) && (randomDemenagement < 8)) {
                randomDemenagement = 2;
            }
            else if (randomDemenagement > 7) {
                randomDemenagement = 3;
            }
        }
    
        embed.addField('Déménagement (à partir de la seconde génération) :', `${Demenagement.get(randomDemenagement)}`).setColor('#68e674')
        message.author.send(embed);
    }
}