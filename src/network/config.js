/**
 * 配置环境请求地址
 * @param {string} 'test'测试环境 'onLine'正式环境
 * @return {Object}
 */
module.exports = {
  reqType: 'test',
  test: {
    testUrl: 'https://ftwx.yiekj.com/caf-ss-api/',
    testImgPath: ''
  },
  onLine: {
    onLineUrl: '',
    onLineImgPath: ''
  }
}
