// remote/webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");
const fs = require("fs");
const { dependencies } = require("./package.json");

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

const serverConfig = {
  entry: {
    server: "./src/index.ts",
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].js"
  },
  mode: "development",
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
  target: "node",
};

const clientConfig = {
  entry: {
    app: "./src/services/gui/app/GUITemplate.tsx"
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
    port: 4000,
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
    })
  ],
  target: "web",
};


module.exports = [serverConfig, clientConfig];