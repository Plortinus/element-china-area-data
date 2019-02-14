'use strict'

const { resolve } = require('path')

const config = {
  mode: 'production',
  entry: './src/app.js',
  output: {
    path: resolve(__dirname, './dist'),
    filename: 'app.commonjs.js',
    libraryTarget: 'commonjs2'
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
