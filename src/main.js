// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 引入插件
import router from '@/plugins/router'
import inject from '@/plugins/inject'
import store from '@/plugins/store'
import { VuxPlugin } from '@/plugins/vux'
import customltemPlugin from '@/plugins/customltem'
// 依赖注入
Vue.use(inject)
// 引入UI库/样式
Vue.use(VuxPlugin)
// 引入自定义组件
Vue.use(customltemPlugin)
/* eslint-disable no-new */
const vm = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
window.vm = vm

Vue.use({ vm })
