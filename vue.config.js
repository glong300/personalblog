const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  assetsDir: '@/assets',
  // webpack 基本操作
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       "assets": '@/assets',
  //       "components": '@/components'
  //     }
  //   }
  // },
  // webpack链式操作
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
  }
}
