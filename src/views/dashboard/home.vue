<template >
  <view-box id="home">
    首页
    <div class="goto" @click="$router.push('/showPage')">去世界</div>
  </view-box>
</template>
<script>
// import { mapGetters } from 'vuex'
import Tabs from '@/components/Tabs.vue'
export default {
  name: 'home',
  components: {
    Tabs
  },
  computed: {
    // ...mapGetters(['userinfoGetter'])
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
<style lang="less" scoped>
#home {
  background: red;
  padding-bottom: 50px;
}
</style>
