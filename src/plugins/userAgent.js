import store from '@/plugins/store'
// import { mapAction } from 'vuex'

export default {
  install: (Vue) => {
    // 环境
    store.registerModule('userAgent', {
      state: {
        isWX: false,
        isAndroid: false,
        isIos: false,
        isAthena: false
      },
      mutations: {
        updateIsWX (state, params) {
          state.isWX = params.isWX
        },
        updateIsAndroid (state, params) {
          state.isAndroid = params.isAndroid
        },
        updateIsIos (state, params) {
          state.isIos = params.isIos
        },
        updateIsAthena (state, params) {
          state.isAthena = params.isAthena
        }
      },
      actions: {
        updateUserAgent ({commit}, option) {
          let params = {}
          var ua = navigator.userAgent.toLowerCase()
          params.isWX = (/MicroMessenger/i).test(ua)
          params.isAndroid = (/Android/i).test(ua) || (/Linux/i).test(ua)
          commit('updateIsWX', params)
          commit('updateIsAndroid', params)
          // commit('updateIsIos', params)
        }
      }
    })
    store.dispatch('updateUserAgent')
  }
}
