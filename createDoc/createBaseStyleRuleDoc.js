const path = require('path');
const createDoc = require('./createDoc');

const createEslintDoc = () => {
  const eslint = [
    {
      rulePath: 'errors',
      title: '错误语法',
    },
    {
      rulePath: 'limitFeature',
      title: '限制功能',
    },
    {
      rulePath: 'style',
      title: '代码样式',
    },
  ];
  eslint.forEach(config => {
    const { rulePath, title } = config;
    const realPath = path.join(__dirname, '../rules', `${rulePath}.js`);
    const baseName = path.basename(realPath);
    const outPutPath = path.join(
      __dirname,
      `../doc/${baseName.replace('.js', '.md')}`,
    );
    createDoc({
      rulePath: realPath,
      title,
      outPutPath,
      linkTemplate: ruleName =>
        `https://stylelint.io/user-guide/rules/${ruleName}/`,
    });
  });
};
module.exports = createEslintDoc;
