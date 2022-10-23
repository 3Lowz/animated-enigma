// remote/webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");
const { federation } = require("./package.json");

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
  target: "web",
  mode: "development",
  devtool: 'source-map',
  entry: {
    server: "./src/index.ts",
    app: "./src/services/gui/app/index.tsx"
  },
  output: {
    path: __dirname + "/dist",
    filename: "[id].js",
    // sourceMapFilename: "[id].map",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
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
    // new TsconfigPathPlugin({ baseUrl: './' })
    new ModuleFederationPlugin({
      name: 'Skeleton',
      // library: { type: "var", name: "skeleton" }
      filename: 'remoteEntry.js',
      exposes: {
        // './App': './src/services/gui/app/App',
        // './bootstrap': './src/services/gui/app/bootstrap',
        './Page': './src/services/gui/app/components/dashboard/Dashboard.page',
        './Subroute': './src/services/gui/app/components/Subroute',
        './Routes': './src/services/gui/app/components/dashboard/index'
      },
      shared: {
        // ...federation,
        "react": {
          singleton: true,
          // eager: true,
          requiredVersion: federation.react,
        },
        "react-dom": {
          singleton: true,
          // eager: true,
          requiredVersion: federation['react-dom'],
        },
        // "react-router": {
        //   singleton: true,
        //   eager: true,
        //   // requiredVersion: federation['react-router'],
        // },
        "react-router-dom": {
          singleton: true,
          // eager: true,
          requiredVersion: federation['react-router-dom'],
        },
        // "reactstrap": {
        //   singleton: true,
        //   eager: true,
        //   // requiredVersion: federation.reactstrap,
        // },
        // "module-federation-import-remote": {
        //   requiredVersion: dependencies['module-federation-import-remote']
        // }
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    })
  ],
};