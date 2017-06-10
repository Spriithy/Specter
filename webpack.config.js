const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: 'body'
});


module.exports = {
  entry: __dirname + '/src/index.js',
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
    filename: 'bundle.js',
    path: __dirname + '/build'
  },

  plugins: [
    HTMLWebpackPluginConfig,
    new ExtractTextPlugin({
      filename: 'styles/[name].css',
      allChunks: true
    }),
    new FriendlyErrorsPlugin({
      compilationSuccessInfo: {
        messages: ['Dev server running at http://localhost:3000']
      }
    })
  ]
};