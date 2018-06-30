import axios from './axios'
// import api from './api'
// import consts from './const'

export default {
  install: (Vue, options) => {
    // 挂载vue原型
    // Vue.prototype.$api = api
    // Vue.prototype.$ajax = axios
    // Vue.prototype.$const = consts
    // 挂载全局变量
    window.GLOBAL = {}
    window.GLOBAL.ajax = axios
    // 处理一些问题
    Vue.config.productionTip = false
    require('@/utils/rem.js')
    require('es6-promise').polyfill()
  }
}
