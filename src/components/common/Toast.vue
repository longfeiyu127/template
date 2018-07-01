<template>
  <div class="toast" v-if="showFlag">
    <div class="wrap_img">
      <img v-if="type == 'error'" src="../../assets/images/toast/warn_empty.png">        
      <img v-if="type == 'success'" src="../../assets/images/toast/ok_empty.png">
    </div>
    <div class="msg" v-html="html"></div>
  </div>
</template>
<script>
export default {
  name: 'alertTemplate',
  data () {
    return {
    }
  },
  props: {
    showFlag: {
      default: false
    },
    html: {
      default: ''
    },
    type: {
      default: 'text' // text success error warn
    },
    timeout:{
      default: '1500'
    }
  },
  watch: {
    updownSuc: {
      handler: function (val) {
        if (val === true) {
          setTimeout(() => {
            this.$emit('hideUpdownSuc', false)
          }, 1500)
        }
      },
      deep: true
    },
    updownFail: {
      handler: function (val) {
        if (val === true) {
          setTimeout(() => {
            this.$emit('hideUpdownFail', false)
          }, 1500)
        }
      },
      deep: true
    }
  }
}
</script>
<style lang="less" scoped>
.toast{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: 100;
  .wrap{
    width:1rem;
    min-height:1rem;
    padding-top:0.15rem;
    margin:0 auto;
    border-radius: 0.05rem;
    background-color: rgba(73,73,73,0.90);
    .wrap_img{
      text-align: center;
      img{
        width:0.34rem;
        display: inline-block;
      }
    }
    .msg{
      font-size:0.12rem;
      // color:#d3d3d3;
      color:#fff;
      text-align: center;
      padding:0.06rem;
    }
  }
}
</style>
