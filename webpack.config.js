const path = require('path');

module.exports = {
  entry: './src/app/page.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};
