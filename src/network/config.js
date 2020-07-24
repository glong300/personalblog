/**
 * 配置环境请求地址
 * @param {string} 'test'测试环境 'onLine'正式环境
 * @return {Object}
 */
module.exports = {
  reqType: 'test',
  test: {
    testUrl: '127.0.0.1:3000/',
    testImgPath: ''
  },
  onLine: {
    onLineUrl: '',
    onLineImgPath: ''
  }
}
