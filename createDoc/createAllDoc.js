const path = require('path');
const createBaseStyleRuleDoc = require('./createBaseStyleRuleDoc');
const createDoc = require('./createDoc');

const main = () => {
  createDoc({
    rulePath: path.join(__dirname, '../rules/accessbility.js'),
    title: 'css 可访问性',
    outPutPath: path.join(__dirname, '../doc/accessbility.md'),
    linkTemplate: ruleName =>
      `https://github.com/YozhikM/stylelint-a11y/blob/master/src/rules/${ruleName}/README.md`,
  });
  createBaseStyleRuleDoc();
};

main();
