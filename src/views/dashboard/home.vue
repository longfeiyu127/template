<template >
  <view-box id="home">
    <h2>首页</h2>
    <!-- <div class="goto" @click="$router.push('/showPage')">去世界</div> -->
    <XButton class="goto" action-type='button' @click.native="$router.push('/showPage')">去看看外面的世界</XButton>
  </view-box>
</template>
<script>
// import { mapGetters } from 'vuex'
import Tabs from '@/components/Tabs.vue'
import { XButton } from 'vux'

export default {
  name: 'home',
  components: {
    Tabs,
    XButton
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
  background: #fff;
  padding-bottom: 50px;
  padding-right: 0.3rem;
  padding-left: 0.3rem;
}
h2 {
  text-align: center;
}
.goto {
  margin-top: 3rem;
}
</style>
