<template>
  <view-box>
    <button @click="sendAjx">发送</button><br/>
    <button @click="showSuccess">showSuccess</button><br/>
    <button @click="$vux.toast.show({text: 'showToast', type: 'text'})">showToast</button>
  </view-box>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
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
      this.$vux.toast.show({
        text: '字数长度小于',
        type: 'success'
      })
    }
  }
}
</script>

<style lang="less" scoped>
</style>
