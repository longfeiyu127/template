import axios from 'axios'
import storage from '../../plugins/storage'
function AxiosInit () {
  // 全局loding
  axios.interceptors.request.use((config) => {
    // loading.start()
    return config
  }, (error) => {
    // loading.end()
    return Promise.reject(error)
  })
  // 响应拦截器
  axios.interceptors.response.use((response) => {
    if (response.data.resCode === 0 && response.headers['x-session-id']) {
      // 拦截X-session-ID
      storage.setSessionStorage('X-Session-Id', response.headers['x-session-id'])
    }
    if (response.data.resCode === 401) {
      storage.setSessionStorage('Authorization', '')
      storage.setCookie('userName', '')
      storage.setCookie('userData', '')
      // if (!window.vm.AthenaJs.isAthena()) {
      if (!window.vm.AthenaJs) {
        window.GLOBAL.vm.router.replace({
          path: '/login',
          query: {
            redirect: window.vm.$route.fullPath
          }
        })
      } else {
        // AthenaJs.login('true')
      }
    }
    // loading.end()
    return response
  }, (err) => {
    // loading.end()
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          err.message = '请求错误'
          break
        case 401:
          err.message = '未授权，请登录'
          break
        case 403:
          err.message = '拒绝访问'
          break
        case 404:
          err.message = `请求地址出错: ${err.response.config.url}`
          break
        case 408:
          err.message = '请求超时'
          break
        case 500:
          err.message = '服务器内部错误'
          break
        case 501:
          err.message = '服务未实现'
          break
        case 502:
          err.message = '网关错误'
          break
        case 503:
          err.message = '服务不可用'
          break
        case 504:
          err.message = '网关超时'
          break
        case 505:
          err.message = 'HTTP版本不受支持'
          break
        default:
      }
    }
    // loading.timeout(err.message)
    return Promise.reject(err)
  })
}

export default AxiosInit
