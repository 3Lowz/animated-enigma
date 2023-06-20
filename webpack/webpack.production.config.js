// remote/webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");
const { federation } = require("./../package.json");

const serverConfig = {
  target: "node",
  mode: "production",
  entry: { server: "./src/index.ts" },
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "server/main.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts)?$/,
        exclude: /node_modules|app/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      }
    ],
  },
  resolve: {
    extensions: [".ts",".js"],
  },
};

const clientConfig = {
  target: "web",
  mode: "production",
  entry: { app: "./src/services/gui/app/index.tsx" },
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/typescript",
              ],
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ['css-loader']
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'Skeleton',
      filename: 'remoteEntry.js',
      exposes: {
        './Page': './src/services/gui/app/components/dashboard/Page.dashboard',
        './Subroute': './src/services/gui/app/components/Subroute',
        './Routes': './src/services/gui/app/components/dashboard/index'
      },
      shared: {
        // ...federation,
        react: {
          singleton: true,
          requiredVersion: federation.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: federation['react-dom'],
        },
        "react-router-dom": {
          singleton: true,
          requiredVersion: federation['react-router-dom'],
        },
      },
    })
  ],
};

module.exports = clientConfig;