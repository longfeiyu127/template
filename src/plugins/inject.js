// import axios from './axios'
// import api from './api'
// import consts from './const'
import storage from './storage'
import axiosInterceptors from '../config/interceptors/axios'

export default {
  install: (Vue, options) => {
    // 挂载全局变量
    window.GLOBAL = {}
    // window.GLOBAL.ajax = axios
    // 挂载vue原型
    // Vue.prototype.$api = api
    // Vue.prototype.$ajax = axios
    // Vue.prototype.$const = consts
    Vue.prototype.$storage = storage
    // 处理一些问题
    Vue.config.productionTip = false
    require('@/utils/rem.js')
    require('es6-promise').polyfill()
    // axios拦截器
    axiosInterceptors()
  }
}
