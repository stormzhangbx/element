const path = require('path')

module.exports = {
  devServer: {
    port: 9000,
    proxy: {
      '/icity': {
        target: 'https://yqfkgzjl.szft.gov.cn',
        changeOrigin: true
      }
      // '/': {
      //   target: 'http://localhost:8080',
      //   changeOrigin: true
      // },
    }
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, './src/assets/styles/variables.less')
      ]
    }
  }
}
