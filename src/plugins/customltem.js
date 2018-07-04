import store from '@/plugins/store'
// import { mapAction } from 'vuex'
import Toast from '../components/common/Toast'

export default {
  install: (Vue) => {
    // 注册全局组件
    Vue.component('Toast', Toast)
    // 配置自定义组件数据状态
    store.registerModule('customltem', {
      state: {
        Toast: {
          html: '',
          type: 'text',
          timeout: '1500'
        },
        headerTitle: '招商仁和人寿'
      },
      mutations: {
        updateToast (state, params) {
          state.Toast = JSON.parse(JSON.stringify(params))
        },
        updateTitle (state, params) {
          state.headerTitle = params
        }
      },
      actions: {
        updateToastAction ({commit}, option) {
          let resOption = Object.assign({html: '', type: 'text', timeout: '1500'}, option)
          resOption.type = (resOption.html.length < 6 && resOption.type === 'text') ? 'error' : resOption.type
          commit('updateToast', resOption)
        },
        updateTitleAction ({commit}, params) {
          commit('updateTitle', params)
        }
      }
    })
    function showToast (params) {
      store.dispatch('updateToastAction', params)
    }
    function setTitle (params) {
      store.dispatch('updateTitleAction', params)
    }
    Vue.prototype.$Toast = showToast
    window.GLOBAL.alert = showToast
    window.GLOBAL.setTitle = setTitle
  }
}
