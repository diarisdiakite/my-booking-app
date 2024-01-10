const path = require('path');

module.exports = function override(config, env) {
  // Add polyfill fallback for http and https
  config.resolve.fallback = {
    http: require.resolve('stream-http'),
    https: require.resolve('https-browserify'),
  };

  return config;
};
