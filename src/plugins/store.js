import Vue from 'vue'
import Vuex from 'vuex'
import commonStore from '@/service/store/common'

Vue.use(Vuex)

const vuex = new Vuex.Store({
  ...commonStore
})

export default vuex
