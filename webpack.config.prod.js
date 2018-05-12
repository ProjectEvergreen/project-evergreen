const commonConfig = require('./webpack.config.common');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

module.exports = webpackMerge(commonConfig, {
  
  mode: 'production',

  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
  
});