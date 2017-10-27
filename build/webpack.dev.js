'use strict'

const merge = require('deep-assign');
const webpack = require('webpack');

const options = require('./options');
const base = require('./webpack.base.js');

let example;
if (process.env.EXAMPLE === 'simple') {
  example = 'exampleSimple';
}
if (process.env.EXAMPLE === 'auth') {
  example = 'exampleAuth';
}

console.log(options.paths.output[example]);

const config = merge(base, {
  watch: true,
  devtool: '#eval-source-map',

  entry: options.paths.src[example],
  //options.paths.resolve('examples/exampleSimple/index.js'),

  output: {
    filename: 'examples.bundle.js',
    path: options.paths.output[example]
  },

  plugins: [
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(options.version)
    })
  ],

  devServer: {
    contentBase: options.paths.output[example],
    host: 'localhost',
    historyApiFallback: true,
    noInfo: true
  }
});

// First item in module.rules array is Vue
config.module.rules[0].options.loaders = {
  scss: 'vue-style-loader!css-loader!sass-loader'
};

module.exports = config;
