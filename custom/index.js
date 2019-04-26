const pkg = require('../package.json');

const stylelintName = 'stylelint';
const prettierConfigName = 'stylelint-config-prettier';
const stylelintAccess = 'stylelint-a11y';
const compatPgName = 'stylelint-no-unsupported-browser-features';
const {
  name: pkgName,
  version,
  devDependencies: {
    [stylelintName]: stylelint,
    [prettierConfigName]: prettierConfig,
    [stylelintAccess]: stylelintAccessPg,
    [compatPgName]: compatPg,
  },
} = pkg;

const custom = ({
  access = false,
  compat = false,
  prettier = true,
  defaultServerity = 'error',
} = {}) => {
  const template = `
    module.exports = {
      extends: [
        '${pkgName}/rules/errors',
        '${pkgName}/rules/style',
        '${pkgName}/rules/limitFeature',
        ${compat ? `'${pkgName}/rules/compatibility',` : ''}
        ${access ? `'${pkgName}/rules/accessbility',` : ''}
        ${prettier ? `'${prettierConfigName}'` : ''}
      ],
      defaultSeverity: '${defaultServerity}',
    };
  `;
  const depend = [
    `${stylelintName}@${stylelint}`,
    `${pkgName}@${version}`,
    compat && `${compatPgName}@${compatPg}`,
    access && `${stylelintAccess}@${stylelintAccessPg}`,
    prettier && `${prettierConfigName}@${prettierConfig}`,
  ].filter(dep => dep !== false);
  return {
    template: template
      .split('\n')
      .filter(line => line.trim())
      .join('\n'),
    depend,
  };
};

module.exports = custom;
