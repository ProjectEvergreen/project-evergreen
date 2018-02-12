const commonConfig = require('./webpack.config.common');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpackMerge = require('webpack-merge');

module.exports = webpackMerge(commonConfig, {
  
  plugins: [
    new UglifyJSPlugin()
  ]
  
});