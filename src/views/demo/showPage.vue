<template>
  <view-box>
    <button @click="sendAjx">发送</button><br/>
    <button @click="showSuccess">showSuccess</button><br/>
    <button @click="$Toast({html: '1223'})">showToast</button>
    <Toast :html.sync='html'></Toast>
  </view-box>
</template>

<script>
import Toast from '@/components/common/Toast'
export default {
  components: {
    Toast
  },
  data () {
    return {
      html: '第一次显示'
    }
  },
  methods: {
    shangeToast () {
      this.html = '第二次显示图片撒旦客户可拉斯基大师的空间了哎说多了'
    },
    sendAjx () {
      let data = {
        accountName: '18911111111',
        password: 'fLy19940517'
      }
      this.$http.user.login(data).then(res => {
        console.log(res)
        alert(res.resCode)
      })
      // (async function (data) {
      //   let res = await this.$http.user.login(data)
      //   alert(res.resCode)
      // })(sendData)
    },
    showSuccess () {
      // this.$vux.toast.show({
      //   text: '字数长度小于',
      //   type: 'success'
      // })
    }
  }
}
</script>

<style lang="less" scoped>
</style>
