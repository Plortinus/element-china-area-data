const { join, resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const config = {
  entry: './src/main.js',
  output: {
    path: resolve(__dirname, './docs'),
    filename: 'index_bundles.js'
  },
  resolve: {
    // 配置别名，在项目中可缩减引用路径
    alias: {
      src: join(__dirname, '/src')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            root: resolve(__dirname, 'src'),
            attrs: ['img:src', 'link:href']
          }
        }]
      },
      {
        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
        exclude: /favicon\.png$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body' }),
    new UglifyJSPlugin()
  ],
  devServer: {
    host: '127.0.0.1',
    port: 8020,
    historyApiFallback: false,
    noInfo: true,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8080',
        changeOrigin: true,
        pathRewrite: { '^/api': '' }
      }
    }
  },
  devtool: '#eval-source-map'
}

module.exports = config
