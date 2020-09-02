const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {//['./src/index.js', './src/styles.scss'],
      index: ['./src/index.js']
  },
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
      rules: [
          {
            test: /\.(scss|png|jpe?g)$/,
            // use: [{
            //   loader: 'style-loader', // inject CSS to page
            // }, {
            //   loader: 'css-loader', // translates CSS into CommonJS modules
            // }, {
            //   loader: 'postcss-loader', // Run post css actions
            //   options: {
            //     plugins: function () { // post css plugins, can be exported to postcss.config.js
            //       return [
            //         require('precss'),
            //         require('autoprefixer')
            //       ];
            //     }
            //   }
            // }, {
            //   loader: 'sass-loader' // compiles Sass to CSS
            // }]
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader?url=false',
                //'resolve-url-loader',
                'sass-loader',
            ]
          }
      ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/styles.css',
    }),
    new CopyWebpackPlugin({
        patterns: [
            { from: './node_modules/@fortawesome/fontawesome-free/webfonts', to: './webfonts'}
        ],
    }),
  ],
};
