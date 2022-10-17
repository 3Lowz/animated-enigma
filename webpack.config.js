// remote/webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");
const fs = require("fs");
const { dependencies } = require("./package.json");
const { Module } = require('module');

// const federations = {};
// // Resolves deps
// (createFederations = function() {
//   fs.readdirSync(path.resolve(__dirname, "./src/modules/")).forEach((folder) => {
//     fs.readdirSync(path.resolve(__dirname, `./src/modules/${folder}/src/components`)).forEach((file) => {
//       const nameElements = file.split('.js');
//       federations[`./adm/${folder}/${nameElements[0]}`] = `./src/modules/${folder}/src/components/${file}`;
//     })
//   })
// })();
// console.log(federations);

module.exports = {
  entry: {
    server: "./src/index.ts",
    app: "./src/services/gui/app/index.tsx"
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].js"
  },
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    port: 4004,
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
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
          {
            loader: 'ts-loader'
          }
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    // new TsconfigPathPlugin({ baseUrl: './' })
    new ModuleFederationPlugin({
      name: 'Skeleton',
      filename: 'skeleton.js',
      exposes: {
        './App': './src/services/gui/app/App'
      },
      shared: {
        react: {
          eager: true,
          singleton: true,
          requiredVersion: dependencies.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: dependencies["react-dom"],
        },
        "react-router": {
          singleton: true,
          requiredVersion: dependencies["react-router"],
        },
        "react-router-dom": {
          singleton: true,
          requiredVersion: dependencies["react-router-dom"],
        },
        "react-router-config": {
          singleton: true,
          requiredVersion: dependencies["react-router-config"],
        },
        "reactstrap": {
          eager: true,
          singleton: true,
          requiredVersion: dependencies.reactstrap,
        },
        "module-federation-import-remote": {
          eager: true,
          requiredVersion: dependencies['module-federation-import-remote']
        }
      },
    })
  ],
  target: "web",
};