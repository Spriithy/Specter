const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const appRootPath = __dirname;
const path = require('path');

module.exports = {
  entry: {
    app: path.resolve(appRootPath, 'src', 'index.js'),
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: ExtractTextPlugin.extract('css-loader!sass-loader')
      }
    ]
  },

  output: {
    filename: '[name].js',
    path: path.resolve(appRootPath, 'build')
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(appRootPath, 'src', 'index.html'),
      filename: 'index.html',
      inject: 'body'
    }),
    new ExtractTextPlugin({
      filename: 'styles/[name].css',
      allChunks: true
    }),
    new FriendlyErrorsPlugin({
      compilationSuccessInfo: {
        messages: ['Dev server running at http://localhost:3000']
      }
    })
  ],

  devtool: 'source-map' 
};