const path = require("path");

const serverConfig = {
  target: "node",
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    server: './src/index.ts',
  },
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "[name].js", // [app]
    sourceMapFilename: "[name].map",
    // clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts)?$/,
        exclude: /node_modules|app/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/typescript",
              ],
            },
          },
        ],
      }
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};

module.exports = serverConfig;