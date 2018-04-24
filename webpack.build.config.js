'use strict'

const { resolve } = require('path')

const config = {
  mode: 'production',
  entry: './src/app.js',
  output: {
    path: resolve(__dirname, './dist'),
    filename: 'app.js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}

module.exports = config
