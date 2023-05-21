const HtmlWebpackPlugin = require('html-webpack-plugin')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './index.js',
  plugins: [
    new NodePolyfillPlugin(),
    new HtmlWebpackPlugin({
      template: './src/public/index.html'
    })
  ]
}
