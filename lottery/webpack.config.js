
var path = require('path');
var SRC_DIR = path.join(__dirname, 'client');
var DIST_DIR = path.join(__dirname, 'public');

module.exports = { 
  mode: 'development',
  target: 'web', 
  entry: `${SRC_DIR}/app.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['@babel/preset-env','@babel/preset-react']            
          }          
        }
      }
    ]
  }
}