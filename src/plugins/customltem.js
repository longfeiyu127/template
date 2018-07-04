import store from '@/plugins/store'
// import { mapAction } from 'vuex'
import Toast from '../components/common/Toast'

export default {
  install: (Vue) => {
    // 注册全局组件
    Vue.component('Toast', Toast)
    // 配置store
    store.registerModule('customltem', {
      state: {
        Toast: {
          html: '',
          type: 'text',
          timeout: '1500'
        }
      },
      mutations: {
        updateToast (state, params) {
          state.Toast = JSON.parse(JSON.stringify(params))
        }
      },
      actions: {
        updateToastAction ({commit}, option) {
          let resOption = Object.assign({html: '', type: 'text', timeout: '1500'}, option)
          resOption.type = (resOption.html.length < 6 && resOption.type === 'text') ? 'error' : resOption.type
          commit('updateToast', resOption)
        }
      }
    })
    function showToast (params) {
      store.dispatch('updateToastAction', params)
    }
    Vue.prototype.$Toast = showToast
    window.GLOBAL.alert = showToast
  }
}
