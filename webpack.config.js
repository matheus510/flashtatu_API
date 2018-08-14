const path = require('path')

module.exports = {
  mode: 'none',
  entry: './server/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  target: 'node'
}
