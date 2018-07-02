<template>
  <view-box class="showPage">
    <XButton action-type='button' @click.native="$Toast({html: '您当前不是用户，无法使用此功能'})">长文字弹框</XButton>
    <XButton action-type='button' @click.native="$Toast({html: '成功的弹窗', type: 'success'})">成功提示</XButton>
    <XButton action-type='button' @click.native="$Toast({html: '失败的弹窗'})">失败提示</XButton>
    <XButton action-type='button' @click.native="sendAjx">发送请求</XButton>
  </view-box>
</template>

<script>
import { XButton } from 'vux'

export default {
  components: {
    XButton
  },
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
        this.$Toast({html: res.resMsg})
      })
    }
  }
}
</script>

<style lang="less" scoped>
.showPage{
  padding: 0.3rem;
}
</style>
