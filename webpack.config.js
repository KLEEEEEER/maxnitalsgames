const path = require('path');
const fs = require('fs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
              test: /\.pug$/,
              use: ['pug-loader']
          },
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
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/pug/index.pug'),
      filename: path.join(__dirname, './index.html'),
      templateParameters: {
          "maininfo": require("./src/data/maininfo.json"),
          "darkThemeScript": fs.readFileSync("./src/scripts/CheckDarkTheme.js", 'utf-8')
      },
      inject: false,
      minify: false,
    })
  ],
};
