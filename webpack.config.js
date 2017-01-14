const webpack = require('webpack');
const path = require('path');
<<<<<<< HEAD
const AotPlugin = require('@ngtools/webpack').AotPlugin;
=======
>>>>>>> 9a135cfa8c8b74368e154ea2d4785fb826f69345
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: {
    'bundle': [
<<<<<<< HEAD
      'es6-shim',
      'rxjs',
      'zone.js',
      'reflect-metadata',
      './src/app/main.ts'
    ]
  },
  devtool: 'source-map',
  output: {
    filename: '[name].js',
    path: './src/build/',
    publicPath: '/build/'
=======
      './tmp/app/main.ts'
    ]
  },
  devtool: 'sourcemap',
  output: {
    filename: 'bundle.min.js',
    path: './build/',
    publicPath: '/'
>>>>>>> 9a135cfa8c8b74368e154ea2d4785fb826f69345
  },
  resolve: {
    extensions: ['.js','.jsx','.ts','.json', '.scss', '.css', '.html']
  },
  module: {
    loaders: [
      {
          test: /\.ts$/,
          loaders: ['awesome-typescript-loader','angular2-template-loader'],
          exclude: [/node_modules/]
      },
      
<<<<<<< HEAD
      // Support for *.json files.
      { test: /\.json$/,  loader: 'json' },

      { test: /\.jade$/,  loader: 'pug-html-loader' },

      // Support for image files + compression.
      {
        test: /\.scss$/,
        loaders: ['exports-loader?module.exports.toString()', 'css', 'sass', "sass-resources"]
      },

=======
>>>>>>> 9a135cfa8c8b74368e154ea2d4785fb826f69345
      // support for .css as raw text
      { test: /\.css$/,  loader: ['raw-loader'] },

      // support for .css as raw text
      {
        test: /\.html$/,
        loader: 'raw-loader'
      }
    ]
  },
<<<<<<< HEAD
  sassResources: [
    './node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_variables.scss',
    './node_modules/bootstrap-sass/assets/stylesheets/bootstrap/mixins/*.scss'
  ],
=======
>>>>>>> 9a135cfa8c8b74368e154ea2d4785fb826f69345
  plugins: [
    new BrowserSyncPlugin({host: 'localhost',port: 3100,proxy: 'http://localhost:3000'},{reload: true})
  ]
}