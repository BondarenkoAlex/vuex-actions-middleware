'use strict';

const path = require('path');

module.exports = {
  isProduction: process.env.NODE_ENV === 'production',

  paths: {
    root: path.join(__dirname, '..'),

    src: {
      main: path.join(__dirname, '..', 'src'),
      exampleSimple: path.join(__dirname, '..', 'examples/exampleSimple/src'),
      exampleAuth: path.join(__dirname, '..', 'examples/exampleAuth/src')
    },

    output: {
      main: path.join(__dirname, '..', 'dist'),
      exampleSimple: path.join(__dirname, '..', 'examples/exampleSimple/dist'),
      exampleAuth: path.join(__dirname, '..', 'examples/exampleAuth/dist')
    },

    resolve(location) {
      return path.join(__dirname, '..', location)
    }
  }
};
