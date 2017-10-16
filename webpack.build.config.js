const { resolve } = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const config = {
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
  },
  plugins: [
    new UglifyJSPlugin()
  ]
}

module.exports = config
