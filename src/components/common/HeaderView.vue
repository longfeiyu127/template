<template>
<div>
  <view-box :class="{'on-header': !isWX}">
    <div class="header vux-1px-b" v-if="!isWX">
      <div class="goback" @click="$router.back()">
        <x-icon type="ios-arrow-left" size="18"></x-icon>
      </div>
      <span class="title">{{title}}</span>
    </div>
    <slot></slot>
  </view-box>
</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  components: {
  },
  computed: {
    ...mapState({
      title: state => state.customltem.headerTitle,
      isWX: state => state.userAgent.isWX
    })
  },
  mounted () {
  }
}
</script>

<style lang="less" scoped>
.header {
  position: absolute;
  top: 0;
  height: 46px;
  width: 100%;
  display: flex;
  justify-content: center;
  background: #fff;
  z-index: 1;
  .goback{
    position: absolute;
    left: 0.3rem;
    font-weight: 500;
    color: #333333;
    background: #fff;
    border: none;
    height: 46px;
    box-sizing: border-box;
    padding-top: 14px;
  }
  .title{
    font-family: PingFangSC-Regular;
    font-weight: 500;
    line-height: 46px;
    font-size: 0.32rem;
    color: #333333;
  }
}
.on-header {
  padding-top: 46px;
}
</style>
