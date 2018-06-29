// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 引入插件
import router from '@/plugins/router'
import inject from '@/plugins/inject'
import store from '@/plugins/store'
import { VuxPlugin } from '@/plugins/vux'
// 引入UI库/样式
// 解决一些问题
require('es6-promise').polyfill()

Vue.config.productionTip = false

Vue.use(inject)
Vue.use(VuxPlugin)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
