'use strict';

const webpack = require('webpack');

var PLUGINS = [];
if (process.env.NODE_ENV === 'production') {
  PLUGINS.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: './bundle/bundle.js'
  },
  plugins: PLUGINS
};
