'use strict';

// Settings configured here will be merged into the final config object.
export default {
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
          'styles': __dirname + '/src/styles',
          'mixins': __dirname + '/src/mixins',
          'components': __dirname + '/src/components/'
        }
      },
      module: {
        preLoaders: [{
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'eslint-loader'
        }],
        loaders: [{
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'react-hot!babel-loader'// transpiling compiling
        }, {
          test: /\.json$/,
          loader: 'json-loader'
        }, {
          test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/,
          loader: 'url-loader?limit=8192'
        }]
      },
    
      plugins: [
        new webpack.HotModuleReplacementPlugin()
      ]
}
