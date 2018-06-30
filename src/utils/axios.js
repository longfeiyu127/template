import axios from 'axios'
import qs from 'qs'

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
  if (response.data.resCode === 401) {
    window.vm.storage.setSessionStorage('Authorization', '')
    window.vm.storage.setCookie('userName', '')
    window.vm.storage.setCookie('userData', '')
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

function errorState(response) {
  window.GLOBAL.vm.store.commit('UPDATE_LOADING', false) // 隐藏loading
  console.log(response)
  // 如果http状态码正常，则直接返回数据
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    return response
    // 如果不需要除了data之外的数据，可以直接 return response.data
  } else {
    Vue.prototype.$msg.alert.show({
      title: '提示',
      content: '网络异常'
    })
  }

}

function successState(res) {
  store.commit('UPDATE_LOADING', false) //隐藏loading
  //统一判断后端返回的错误码
  if (res.data.errCode == '000002') {
    Vue.prototype.$msg.alert.show({
      title: '提示',
      content: res.data.errDesc || '网络异常',
      onShow() {
      },
      onHide() {
        console.log('确定')
      }
    })
  } else if (res.data.errCode != '000002' && res.data.errCode != '000000') {
    Vue.prototype.$msg.alert.show({
      title: '提示',
      content: res.data.errDesc || '网络异常',
      onShow() {

      },
      onHide() {
        console.log('确定')
      }
    })
  }
}
const httpServer = (opts, data) => {

  let Public = { //公共参数
    'srAppid': ""
  }

  let httpDefaultOpts = { //http默认配置
    method: opts.method,
    baseURL,
    url: opts.url,
    timeout: 10000,
    params: Object.assign(Public, data),
    data: qs.stringify(Object.assign(Public, data)),
    headers: opts.method == 'get' ? {
      'X-Requested-With': 'XMLHttpRequest',
      "Accept": "application/json",
      "Content-Type": "application/json; charset=UTF-8"
    } : {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
  }

  if (opts.method == 'get') {
    delete httpDefaultOpts.data
  } else {
    delete httpDefaultOpts.params
  }

  let promise = new Promise(function (resolve, reject) {
    axios(httpDefaultOpts).then(
      (res) => {
        successState(res)
        resolve(res)
      }
    ).catch(
      (response) => {
        errorState(response)
        reject(response)
      }
    )
  })
  return promise
}

export default httpServer
