import config from './config'
import axios from 'axios'
axios.defaults.baseURL = '/api'

/**
 * 返回请求地址
 * @param {Object} config 环境配置
 * @return {string} 请求url
 */
const getUrlConfig = () => {
  let url
  if (config.reqType == 'test') {
    url = config.test.testUrl
  } else {
    url = config.onLine.onLineUrl
  }
  return url
}

const request = (obj) => {
  let url = getUrlConfig()
  return axios({
    url: obj.url,
    method: obj.method || 'GET',
    data: obj.data
  }).then((res) => {
    return new Promise((reslove, reject) => {
      reslove(res.data)
      reject(res.data)
    })
  })
}

export default {
  request
}
