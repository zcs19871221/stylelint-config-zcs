module.exports = {
  extends: [
    './rules/errors',
    './rules/limitFeature',
    './rules/style',
    './rules/accessbility',
    './rules/compatibility',
  ]
    .map(require.resolve)
    .concat(['stylelint-config-prettier']),
  defaultSeverity: 'error',
};
