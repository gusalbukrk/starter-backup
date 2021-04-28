import HtmlWebpackPlugin from 'html-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';
import StylelintPlugin from 'stylelint-webpack-plugin';

export default {
  entry: {
    main: './src/index.js',
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        type: 'asset/resource', // emits a separate file (replaced file-loader)
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        type: 'asset/inline', // inserts inline (replaced url-loader)
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new ESLintPlugin({
      fix: true,
    }),
    new StylelintPlugin({
      context: './src',
      fix: true,
    }),
  ],
};
