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
    const GLOBAL = {}
    window.GLOBAL = {}
    GLOBAL.ajax = axios
  }
}
