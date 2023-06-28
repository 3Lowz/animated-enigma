// remote/webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");
const { federation } = require("./package.json");

module.exports = {
  target: "web",
  mode: "development",
  devtool: 'inline-source-map',
  entry: {
    // server: './src/index.ts',
    app: './src/services/gui/app/index.tsx'
    // server: {
    //   import: "./src/index.ts",
    //   filename: "./[app]/[name].js",
    //   // sourcemMapFilename: "./dist/[app]/[name].map"

    // },
    // app: {
    //   import: "./src/services/gui/app/index.tsx",
    //   filename: "[name].js",
    //   // sourceMapFilename: "[name].map",
    // },
  },
  output: {
    // server: {
    //   path: __dirname + '/dist',
    //   filename: "[app]/[name].js",
    //   sourcemMapFilename: "[app]/[name].map"
    // },
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
    // new TsconfigPathPlugin({ baseUrl: './' })
    new ModuleFederationPlugin({
      name: 'Skeleton',
      // library: { type: "var", name: "skeleton" }
      filename: 'remoteEntry.js',
      exposes: {
        // './App': './src/services/gui/app/App',
        // './bootstrap': './src/services/gui/app/bootstrap',
        './Page': './app/components/page-base/Page.base',
        './Subroute': './app/components/Subroute.page.component',
        './Routes': './app/components/page-base/index'
      },
      shared: {
        // ...federation,
        react: {
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
