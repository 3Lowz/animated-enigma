// remote/webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");
const { federation } = require("./../package.json");

const serverConfig = {
  target: "node",
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    server: './src/index.ts',
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[app]/[name].js",
    sourceMapFilename: "[app]/[name].map",
    clean: true,
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
    extensions: [".ts",".js"],
  },
};

const clientConfig = {
  target: "web",
  mode: "development",
  devtool: 'inline-source-map',
  entry: {
    app: './app/index.tsx'
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].js",
    sourceMapFilename: "[name].map",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 4004,
    historyApiFallback: true
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
      // library: { type: "var", name: "skeleton" }
      filename: 'remoteEntry.js',
      exposes: {
        './Page': './app/components/dashboard/Page.dashboard',
        './Subroute': './app/components/Subroute',
        './Routes': './app/components/dashboard/index'
      },
      shared: {
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
        // "reactstrap": {
        //   singleton: true,
        //   eager: true,
        //   // requiredVersion: federation.reactstrap,
        // },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    })
  ],
};

module.exports = clientConfig;
// module.exports = [serverConfig, clientConfig];