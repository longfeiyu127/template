<template >
<div>
  <view-box id="home">
    <h2>首页</h2>
    <XButton class="goto" action-type='button' @click.native="$router.push('/showPage')">去看看外面的世界</XButton>
    <XButton class="goto" action-type='button' @click.native="$router.push('/showPage2')">去看看外面的世界2</XButton>
  </view-box>
</div>
</template>
<script>
// import { mapGetters } from 'vuex'
import { XButton } from 'vux'

export default {
  name: 'home',
  components: {
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
.page{
  height: 100%;
  width: 100%;
}
#home {
  background: #fff;
  padding-bottom: 50px;
  padding-right: 0.3rem;
  padding-left: 0.3rem;
}
h2 {
  text-align: center;
  margin-bottom: 3rem;
}
</style>
