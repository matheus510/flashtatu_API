const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'production',
  entry: './src/server.js',
  plugins: [
    new webpack.ContextReplacementPlugin(
      /(.+)?express(\\|\/)(.+)?/,
      path.join(__dirname, 'src'),
      {}
    ),
    new webpack.ContextReplacementPlugin(
      /(.+)?mongoose(\\|\/)(.+)?/,
      path.join(__dirname, 'src/server.js'),
      {}
    ),
    new webpack.ContextReplacementPlugin(
      /(.+)?require_optional(\\|\/)(.+)?/,
      path.join(__dirname, './node_modules'),
      {}
    )
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  target: 'node',
  resolve: {
    alias: {
      '@': '../../.'
    }
  }
}
