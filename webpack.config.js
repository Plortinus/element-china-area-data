const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const config = {
  entry: './src/address.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
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
