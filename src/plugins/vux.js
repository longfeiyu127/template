import router from '@/plugins/router'
import store from '@/plugins/store'
import nativeFn from '@/utils/nativeFn'
import { sync } from 'vuex-router-sync'
import { ConfigPlugin, AlertPlugin, LoadingPlugin, ViewBox, ConfirmPlugin } from 'vux'

export function VuxPlugin (Vue) {
  // 注册全局插件
  Vue.use(AlertPlugin)
  Vue.use(LoadingPlugin)
  Vue.use(ConfirmPlugin)
  // Vue.use(ToastPlugin, {time: 1500})
  // 注册全局组件
  Vue.component('view-box', ViewBox)
  // 初始化全局toast
  Vue.prototype.$alert = function (attribute) {
    let attr = Object.assign(attribute)
    let TilleDom = document.querySelectorAll('.vux-alert .weui-dialog__hd')[0]
    // 有无标题
    attr.title ? nativeFn.removeClass(TilleDom, 'hideDom') : nativeFn.addClass(TilleDom, 'hideDom')
    Vue.$vux.alert.show(attr)
  }

  // 挂在全局loading
  window.GLOBAL.loadingStart = Vue.$vux.loading.show
  window.GLOBAL.loadingEnd = Vue.$vux.loading.hide

  // 配置vux页面切换动画
  store.registerModule('vux', {
    state: {
      demoScrollTop: 0,
      isLoading: false,
      direction: 'forward'
    },
    mutations: {
      updateDemoPosition (state, payload) {
        state.demoScrollTop = payload.top
      },
      updateLoadingStatus (state, payload) {
        state.isLoading = payload.isLoading
      },
      updateDirection (state, payload) {
        state.direction = payload.direction
      }
    },
    actions: {
      updateDemoPosition ({commit}, top) {
        commit({type: 'updateDemoPosition', top: top})
      }
    }
  })

  sync(store, router)
  Vue.use(ConfigPlugin, {
    $layout: 'VIEW_BOX' // global config for VUX, since v2.5.12
  })

  const history = window.sessionStorage
  history.clear()
  window.GLOBAL.historyCount = history.getItem('count') * 1 || 0
  window.GLOBAL.history = history
  history.setItem('/', 0)
  window.GLOBAL.isPush = false
  window.GLOBAL.endTime = Date.now()
  let methods = ['push', 'go', 'replace', 'forward', 'back']

  document.addEventListener('touchend', () => {
    window.GLOBAL.endTime = Date.now()
  })
  methods.forEach(key => {
    let method = router[key].bind(router)
    router[key] = function (...args) {
      window.GLOBAL.isPush = true
      method.apply(null, args)
    }
  })
}
