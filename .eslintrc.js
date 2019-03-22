module.exports = {
  extends: [
    'best-practices',
    'errors',
    'node',
    'style',
    'variables/variables',
    'es6',
  ].map(path => `eslint-config-zcs1/rules/${path}`),
  root: true,
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  env: {
    browser: true,
    commonjs: true,
    jest: true,
  },
  rules: {},
};
