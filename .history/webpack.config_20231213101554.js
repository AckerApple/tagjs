const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js', // Your entry file
  output: {
    filename: 'tagjs.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
