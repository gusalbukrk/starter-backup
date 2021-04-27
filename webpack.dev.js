import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

import { merge } from 'webpack-merge';

import common from './webpack.common.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default merge(common, {
  mode: "development",
  devtool: "source-map",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: '[name][ext]',
  },
  devServer: {
    contentBase: "./dist",
    open: true,

    // makes server accessible externally via `your-ip:8080`
    // tip: get ip with `ip address | grep 192.168.`
    // host: "0.0.0.0",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
});
