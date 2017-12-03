// https://nodejs.org/api/path.html
const path = require('path');

// Constant with our paths
const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  SRC: path.resolve(__dirname, 'src'),
  JS: path.resolve(__dirname, 'src/js'),
};

const htmlWebpackPlugin = require('html-webpack-plugin');
const extractTextPlugin = require('extract-text-webpack-plugin'); 

// Webpack configuration
module.exports = {
  entry: path.join(paths.JS, 'app.js'),
  output: {
    path: paths.DIST,
    filename: 'app.bundle.js'
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.join(paths.SRC, 'index.html'),
    }),
    new extractTextPlugin('style.bundle.css'),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.css$/,
        loader: extractTextPlugin.extract({
          use: 'css-loader',
        }),
      },
      {
        test: /\.(png|jpg|gif|ico)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.scss$/,
        loader: extractTextPlugin.extract({
          use: ['css-loader', 'sass-loader']
        })
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};