const rules = require('../rules/accessbility');
const compareRules = require('./compareRules');
const query = require('./queryWebDocRules');

const offRules = ['no-display-none'];
const check = async function checkJavaScriptRules() {
  const webRules = await query(
    'https://github.com/YozhikM/stylelint-a11y',
    /<a href=".*?\/(.*?)\/README\.md.*?>(\1)<\/a>/gu,
  );
  const usedRules = Object.keys(rules.rules).map(rule =>
    rule.replace(/^a11y\//u, ''),
  );
  compareRules({
    webRules,
    usedRules,
    offRules,
    rulesPath: 'accessbility',
  });
};

module.exports = check;
