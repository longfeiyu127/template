<template>
  <div id="app">
    <div v-transfer-dom>
      <loading v-model="isLoading"></loading>
    </div>

    <transition
    @after-enter="$vux.bus && $vux.bus.$emit('vux:after-view-enter')"
    :name="viewTransition" :css="!!direction">
      <keep-alive>
        <router-view class="router-view"></router-view>
      </keep-alive>
    </transition>

    <Toast></Toast>
  </div>
</template>

<script>
import { Loading, TransferDom, ViewBox } from 'vux'
import { mapState } from 'vuex'

export default {
  name: 'App',
  directives: {
    TransferDom
  },
  components: {
    ViewBox,
    Loading
  },
  created () {
  },
  computed: {
    ...mapState({
      isLoading: state => state.vux.isLoading,
      direction: state => state.vux.direction
    }),
    viewTransition () {
      if (!this.direction) return ''
      return 'vux-pop-' + (this.direction === 'forward' ? 'in' : 'out')
    }
  }
}
</script>

<style lang="less">
@import "~vux/src/styles/reset.less";
@import "~vux/src/styles/1px.less";
@import "~vux/src/styles/tap.less";
@import './assets/style/common.less';
#app, body, html {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  position: relative;
  max-width: 750px;
  margin: 0 auto;
}
.router-view {
  width: 100%;
  height: 100%;
  background: #fff;
}
</style>
