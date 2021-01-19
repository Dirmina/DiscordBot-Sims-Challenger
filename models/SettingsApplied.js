const Functions = require('../functions');

let SettingsApplied = {};
SettingsApplied.objectifTriplet = (random, gameKeyRandom, categoryName) => {
  let newSentence;
  if (random < 3) {
    newSentence = `${gameKeyRandom} (monte à 3 triplés si tu acceptes l'objectif familial optionnel)`;
  }
  else if (random == 3) {
    newSentence = `${gameKeyRandom} (des triplés si tu acceptes l'objectif familial optionnel)`;
  }
  else {
    newSentence = `${gameKeyRandom} (dont 3 triplés si tu acceptes l'objectif familial optionnel)`;
  }
  const fieldName = `${categoryName} :`
  return Functions.setField(fieldName, newSentence)
};

SettingsApplied.noWorkForOneGen = (key, gameKeyRandom, categoryName) => {
  let newSentence;
  if (key == 'revenus') {
    newSentence = `${gameKeyRandom} (aucune si vous acceptez votre objectif familial optionnel)`
  }
  if (key =='carrieresConventionnelles' || key == 'carrieresNonConventionnelles' || key == 'carrieresMiTemps') {
    newSentence = `${gameKeyRandom} (sans-emploi sur une génération si vous acceptez votre objectif familial optionnel)`
  }
  const fieldName = `${categoryName} :`;
  return Functions.setField(fieldName, newSentence);
}

SettingsApplied.secondRandomOnOneKey = (randomMax, random, categoryName, gameKey) => {
  let random2 = Functions.getRandomIntInclusive(1, randomMax);
  //we dont want random2 === random :
  while (random === random2) {
    random2 = Functions.getRandomIntInclusive(1, randomMax);
  }
  const fieldName = `${categoryName} n°2 (si objectif familial optionnel accepté) :`;
  return Functions.setField(fieldName, gameKey[random2]);
};
module.exports = SettingsApplied;