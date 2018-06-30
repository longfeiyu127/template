<template>
  <div id="app">
    <div v-transfer-dom>
      <loading v-model="isLoading" text="正在加载"></loading>
    </div>

    <transition
    @after-enter="$vux.bus && $vux.bus.$emit('vux:after-view-enter')"
    :name="viewTransition" :css="!!direction">
      <keep-alive>
        <router-view class="router-view"></router-view>
      </keep-alive>
    </transition>

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
    // 安卓输入框唤醒键盘被覆盖问题
    if (/Android/gi.test(navigator.userAgent)) {
      window.addEventListener('resize', function () {
        window.setTimeout(function () {
          document.activeElement.scrollIntoViewIfNeeded()
        }, 0)
      })
    }
  },
  computed: {
    ...mapState({
      isLoading: state => state.vux.isLoading,
      direction: state => state.vux.direction
    }),
    viewTransition () {
      console.log(this.direction)
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
}
</style>
