const serverConfig = require('./webpack/webpack.development.server.config');
const clientConfig = require('./webpack/webpack.development.client.config');

module.exports = [
  serverConfig,
  clientConfig
]