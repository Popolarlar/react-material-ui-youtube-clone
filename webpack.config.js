const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  output: {
    publicPath: "/", // <- this is the important line along with historyApiFallback = true in the dev server config
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { modules: true },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: "url-loader",
            // options: {
            //   limit: 8192,
            // },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
  ],
  // https://stackoverflow.com/questions/56573363/react-router-v4-nested-routes-not-work-with-webpack-dev-server
  devServer: {
    historyApiFallback: true,
  },
};
