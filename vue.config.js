// const path = require('path')
// function resolve(dir) {
//   return path.join(__dirname, dir)
// }
const BASE_URL = process.env.NODE_ENV === 'production' ? '/personalblog/' : '/'
module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'assets',
  // webpack 基本操作
  configureWebpack: {
    resolve: {
      alias: {
        assets: '@/assets',
        components: '@/components'
      }
    }
  },
  chainWebpack: (config) => {
    config.module
      .rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        raw: true
      })
  },
  // 配置代理
  devServer: {
    // proxy: 'http: localhost:8080',
    open: true
    // host: 'localhost',
    // port: '8080',
    // hotOnly: false,
    // proxy: {
    //   '/api': {
    //     target: 'https://glong300.gitee.io/', //设置你调用的接口域名和端口号 别忘了加http
    //     changeOrigin: true, //这里设置是否跨域
    //     pathRewrite: {
    //       // 路径重写
    //       '^/api': ''
    //     }
    //   }
    // }
  }
  // webpack链式操作
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     .set('@', resolve('src'))
  //     .set('assets', resolve('src/assets'))
  //     .set('components', resolve('src/components'))
  // }
}
