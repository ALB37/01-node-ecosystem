'use strict';

const greet = module.exports = {};

greet.hello = name => {
  if (name === '' || typeof name !== 'string') return null;
  return `hello ${name}`;
};
