'use strict'

const merge = require('deep-assign');
const webpack = require('webpack');

const options = require('./options');
const base = require('./webpack.base.js');

const config = merge(base, {
  entry: options.paths.src.main,

  output: {
    filename: options.isProduction
      ? 'vuex-actions-middleware.min.js'
      : 'vuex-actions-middleware.js',
    path: options.paths.output.main,
    library: 'VuexActionsMiddleware',
    libraryExport: 'default',
    libraryTarget: 'umd'
  },

  plugins: [],
});

// debug and production
config.plugins = config.plugins.concat([
  new webpack.LoaderOptionsPlugin({
    minimize: true
  }),
  new webpack.DefinePlugin({
    VERSION: JSON.stringify(options.version)
  })
]);

if (options.isProduction) {
  // production only
  config.plugins = config.plugins.concat([
    // Set the production environment
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),

    // Minify with dead-code elimination
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ])
}

module.exports = config;
