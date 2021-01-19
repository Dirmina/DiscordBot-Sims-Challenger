const _ = require('lodash');
const Promise = require('bluebird');

let Settings = {};

Settings.setSettingsForObjectifFamilialOptionnel = (random, settingsObjoOpt) => {
  switch (random) {
    case 1:
      settingsObjoOpt.triplet = true;
      break;
    case 4:
      settingsObjoOpt.noWorkForOneGen = true;
      break;
    case 5:
      settingsObjoOpt.theHeirHasTwoContraintes = true;
      break;
    case 7:
      settingsObjoOpt.twoWorksLevelTenForOneSim = true;
      break;
  }
  return settingsObjoOpt;
}

Settings.setSettingsForRevenus = (random, settingsRevenus) => {
  switch (random) {
    case 1:
      settingsRevenus.carrieresConventionnelles = true;
      break;
    case 2:
      settingsRevenus.carrieresNonConventionnelles = true;
      break;
    case 3:
      settingsRevenus.carrieresMiTemps = true;
      break;
  }
  return settingsRevenus;
}
module.exports = Settings;