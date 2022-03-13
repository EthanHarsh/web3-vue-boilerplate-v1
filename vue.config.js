const { defineConfig } = require('@vue/cli-service')
const { ProvidePlugin } = require('webpack')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      fallback: {
          "buffer": require.resolve('buffer/'),
          "assert": require.resolve('assert'),
          "http": require.resolve('stream-http'),
          "https": require.resolve('https-browserify'),
          "os": require.resolve('os-browserify/browser'),
          "url": require.resolve('url'),
          "stream": require.resolve('stream-browserify'),
          "crypto": require.resolve('crypto-browserify'),
      }       
    },
    plugins: [
        new ProvidePlugin({
            Buffer: ['buffer', 'Buffer'],
        }),
        new ProvidePlugin({
            process: 'process/browser',
        })
    ]
  }
})
