<template>
  <view-box id="index">
    <router-view></router-view>
    <Tabs></Tabs>
  </view-box>
</template>

<script>
import Tabs from '@/components/Tabs.vue'

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
}
</style>
