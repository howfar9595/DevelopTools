/**
 * Base webpack config used across other specific configs
 */

import path from 'path';
import webpack from 'webpack';
import {
  dependencies
} from '../package.json';

export default {
  externals: [...Object.keys(dependencies || {})],

  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      use: {
        options: {
          cacheDirectory: true,
          plugins: [
            ['import', [{
              libraryName: "antd",
              style: 'css'
            }]],
          ]
        }
      }
    }]
  },

  output: {
    path: path.join(__dirname, '..', 'app'),
    // https://github.com/webpack/webpack/issues/1114
    libraryTarget: 'commonjs2'
  },

  /**
   * Determine the array of extensions that should be used to resolve modules.
   */
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },

  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production'
    }),

    new webpack.NamedModulesPlugin()
  ]
};
