const commonConfig = require('./webpack.config.common');
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpackMerge = require('webpack-merge');

module.exports = webpackMerge(commonConfig, {
  
  // TODO make uglify play nice with and without Babel
  plugins: [
    // new UglifyJSPlugin()
  ]
  
});