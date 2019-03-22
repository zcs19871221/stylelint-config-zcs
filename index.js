module.exports = {
  extends: [
    // './rules/errors',
    // './rules/limitFeature',
    // './rules/style',
    // './rules/accesbility',
    // './rules/compatibility',
    './rules/rules.js',
  ]
    .map(require.resolve)
    .concat(['stylelint-config-prettier']),
  defaultSeverity: 'error',
};
