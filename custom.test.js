#!/usr/bin/env node

const Custom = require('./custom');

console.log(
  Custom({
    access: true,
    compat: true,
    prettier: true,
    defaultServerity: 'warn',
  }).template,
);
