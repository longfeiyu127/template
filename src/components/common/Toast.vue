<template>
  <div class="toast" v-show="Toast.html">
    <div class="wrap_img">
      <img v-if="Toast.type == 'error'" src="../../assets/images/toast/warn_empty.png">
      <img v-if="Toast.type == 'success'" src="../../assets/images/toast/ok_empty.png">
    </div>
    <div class="msg" v-html="Toast.html"></div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'Toast',
  data () {
    return {
      timeout: 1500
    }
  },
  computed: {
    ...mapState({
      Toast: state => state.customltem.Toast
    })
  },
  watch: {
    Toast (val) {
      this.Toast.type = this.Toast.html.length < 6 && this.Toast.type === 'text' ? 'error' : 'text'
      setTimeout(() => {
        this.Toast.html = ''
      }, this.timeout)
    }
  },
  created () {
    console.log('创建')
  },
  mounted () {
    console.log(this.Toast)
  }
}
</script>
<style lang="less" scoped>
.toast{
  position: absolute;
  top: 36%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: 100;
  border-radius: 0.05rem;
  background-color: rgba(73,73,73,0.90);
  padding:0.06rem;
  .wrap_img{
    img{
      width:0.34rem;
      display: block;
      margin: 0 auto 0.06rem;
    }
  }
  .msg{
    font-size:0.12rem;
    // color:#d3d3d3;
    color:#fff;
    text-align: center;
  }
}
</style>
