const getCleanLines = doc =>
  doc
    .split('\n')
    .filter(line => line.trim().startsWith('* '))
    .map(line => line.trim().replace(/^\* /, ''));

const createSubContent = (doc, keyMapDocStyle) => {
  let subStr = '';
  doc.replace(
    /(@[a-z]+?)\n([^@][\s\S]+?)(?=((\s+\* @[a-z]+\n)|($)))/g,
    (match, key, content) => {
      const docStyle = keyMapDocStyle[key];
      if (docStyle && content && !content.match(/^\s+$/)) {
        const { titleName, bodyStyle } = docStyle;
        const cleanLines = getCleanLines(content);
        const body = cleanLines
          .map(line => {
            const preSpace = ' '.repeat(bodyStyle === 'block' ? 2 : 6);
            return `${preSpace}${line}`;
          })
          .join('  \n');
        subStr += `- ${titleName}\n\n${body}\n\n`;
      }
    },
  );
  return subStr;
};

const createContent = (file, linkTemplate) => {
  const keyMapDocStyle = {
    '@meaning': {
      titleName: '规则含义',
      bodyStyle: 'block',
    },
    '@why': {
      titleName: '规则原因',
      bodyStyle: 'block',
    },
    '@wrong': {
      titleName: '错误例子',
      bodyStyle: 'code',
    },
    '@right': {
      titleName: '正确例子',
      bodyStyle: 'code',
    },
  };
  const rulesName = [];
  let content = '';
  file.replace(
    /\/\*\*([\s\S]*?)\*\/[\s\n]+'?(.*?)'?:/g,
    (match, doc, ruleName) => {
      rulesName.push(ruleName);
      const ruleTitle = `<a id='${ruleName}'></a>\n## ${ruleName}\n\n`;
      const ruleContent = createSubContent(doc, keyMapDocStyle);
      const eslintLink = `[stylelint](${linkTemplate(
        ruleName.replace(/^.*?\//, ''),
      )})\n\n`;
      const jumpContentTable = '**[⬆ 回到目录](#目录)**\n\n';
      content += `${ruleTitle}${ruleContent}${eslintLink}${jumpContentTable}`;
    },
  );
  return {
    rulesName,
    content,
  };
};

module.exports = createContent;
