<template>
<div>
  <view-box id="index">
    <router-view></router-view>
    <Tabs></Tabs>
  </view-box>
</div>
</template>

<script>
import Tabs from '@/components/common/Tabs.vue'

export default {
  components: {
    Tabs
  },
  data () {
    return {
    }
  },
  methods: {
  },
  computed: {
  }
}
</script>
<style lang="less">
#index{
  .weui-tabbar__label{
    color: #999999;
  }
  // tab
  .weui-tabbar{
    background-color: #fff;
    box-sizing: border-box;
    padding: 0 0.55rem;
  }
}
</style>
