<template>
  <div class="alert">
    <div class="mask"></div>
    <div class="dialog">
      <div class="dialog-hd" v-show="params.title">{{ params.title }}</div>
      <div class="dialog-bd" v-show="params.msg">{{ params.msg }}</div>
      <div class="dialog-ft" v-if="params.botton.length <= 1">
        <button type="button" class="botton" v-for="(item, index) in params.botton" :key="index">{{ item }}</button>
      </div>
      <div class="dialog-ft multi-btn" v-if="params.botton.length > 1">
        <button type="button" class="botton" :class="{'lastBtn': index > 0}" v-for="(item, index) in params.botton" :key="index">{{ item }}</button>
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
      time: '',
      params: {
        title: '加挂成功!',
        msg: '您现在可以查询本报单的详细信息，以及做保全变更。如您还需要查询或变更其他保单信息，请继续操作加挂保单。',
        botton: ['取消', '身份认证'],
        bottonFn: []
      }
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
    transform: translate(-50%, -50%);
    background: #fff;
    width: 6.2rem;
    box-sizing: border-box;
    padding: 0.4rem 0.05rem 0.3rem;
    border-radius: 0.1rem;
    .dialog-hd{
      font-family: PingFangSC-Medium;
      font-size: 0.42rem;
      color: #C8132D;
      line-height: 0.42rem;
      text-align: center;
      margin-top: 0.3rem;
    }
    .dialog-bd{
      padding: 0.4rem 0.25rem 0.6rem;
      text-align: center;
      font-size: 0.28rem;
      color: #333333;
    }
    .dialog-ft{
      .botton{
        border-radius: 0.06rem;
        border: none;
        font-family: PingFangSC-Regular;
        font-size: 0.32rem;
        width: 3.8rem;
        height: 0.76rem;
        line-height: 0.74rem;
        display: block;
        margin: 0 auto;
        box-sizing: border-box;
        background: #fff;
        border: 1px solid #DDDDDD;
        color: #666666;
      }
    }
    .dialog-ft.multi-btn {
      display: flex;
      padding: 0 0.3rem;
      .lastBtn {
        margin-left: 0.3rem;
        background: #C8132D;
        color: #FFFFFF;
        border: 1px solid #C8132D;
      }
    }
  }
}
</style>
