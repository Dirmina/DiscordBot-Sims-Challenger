const Promise = require('bluebird');
const _ = require('lodash');

const Bibliotheque = require('../bibliotheque');

let Reactions = {};


Reactions.fetch = async reaction => {
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();
    return reaction
}

module.exports = Reactions;
