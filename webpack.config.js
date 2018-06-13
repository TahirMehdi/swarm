const path = require("path");
CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: "src/index.html" },
      { from: "src/styles.css" }
    ])
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        options: { plugins: ["transform-object-rest-spread"] }
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, "build"),
    compress: true,
    port: 3000
  }
};
