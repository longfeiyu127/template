<template>
  <div class="alert">
    <div class="mask"></div>
    <div class="dialog">
      <div class="dialog-hd"></div>
      <div class="dialog-bd"></div>
      <div class="dialog-ft">
        <button type="button">确定</button>
      </div>
    </div>
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
    position: absolute;
    top: 50%;
    left: 50%;
  }
}
</style>
