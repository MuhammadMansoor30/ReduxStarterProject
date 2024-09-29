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

// Webpack config is used to allow us to see our node.js application as frontend on localHost.
// It is a module bundler which enables us to bundle different modules together and run the build process seamlessly.
// Webpack main plus is this that it can bundle multiple JS files (output files) into single html file. 
// Using this we dont have to manually enable live server for html files and link Js files to it.