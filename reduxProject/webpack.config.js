const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: {
        directory: path.join(__dirname, 'dist'),
    },
    port: 3000,
  },
  devtool: "source-map",  // New item added for dev-tools extension for code tracing more in configureStore.js file.
  mode: 'development',
};