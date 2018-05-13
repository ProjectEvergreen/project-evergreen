const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const path = require('path');

module.exports = {
  context: path.resolve('./src'),

  entry: {
    index: './index'
  },

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[chunkhash].bundle.js'
  },

  module: {
    rules: [{
      test: /\.js$/,
      enforce: 'pre',
      loader: 'eslint-loader',
      exclude: path.join(__dirname, 'node_modules')
    // TODO
    // }, {
    //   test: /\.js$/,
    //   loaders: [
    //     'babel-loader'
    //   ],
    //   exclude: path.join(__dirname, 'node_modules')
    }, {
      test: /\.css$/,
      use: ['css-to-string-loader', 'css-loader', 'postcss-loader'],
      exclude: path.join(__dirname, 'node_modules')
    }, {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url-loader?limit=10000&mimetype=application/font-woff'
    }, {
      test: /\.(ttf|eot|svg|jpe?g|png|gif|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file-loader'
    }]
  },

  plugins: [

    new HtmlWebpackPlugin({
      template: './index.html',
      chunksSortMode: 'dependency'
    })
  
  ]

};