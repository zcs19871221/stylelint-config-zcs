const errors = require('../rules/errors');
const limitFeature = require('../rules/limitFeature');
const style = require('../rules/style');
const queryStyleLintRules = require('./queryStyleLintRules');
const compareRules = require('./compareRules');
const offRules = require('./offRules');

const check = async function checkJavaScriptRules() {
  const webRules = await queryStyleLintRules();
  const usedRules = Object.keys({
    ...errors.rules,
    ...style.rules,
    ...limitFeature.rules,
  });
  compareRules({
    webRules,
    offRules,
    usedRules,
    rulesPath: 'errors,style,limitFeature',
  });
};

module.exports = check;
