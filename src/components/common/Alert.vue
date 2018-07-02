<template>
  <div class="alert" v-show="Alert.html">
    <div class="mask"></div>
    <div class="dialog"></div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'Alert',
  data () {
    return {
      time: ''
    }
  },
  computed: {
    ...mapState({
      Toast: state => state.customltem.Toast
    })
  },
  watch: {
    Toast (val) {
      if (this.time) {
        clearTimeout(this.time)
      }
      this.time = setTimeout(() => {
        this.Toast.html = ''
      }, this.Toast.timeout)
    }
  }
}
</script>
<style lang="less" scoped>
.alert{
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 100;
  .mask{
    height: 100%;
    width: 100%;
    background-color: rgba(73,73,73,0.90);
  }
  .dialog{
    font-size:0.28rem;
    line-height: 0.28rem;
    color:#fff;
    text-align: center;
  }
}
.toast.imgToast {
  padding: 0.5rem;
}
.toast.longText {
  width: 5.0rem;
}
</style>
