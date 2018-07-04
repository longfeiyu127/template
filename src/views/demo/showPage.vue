<template>
  <HeaderView>
    <div class="showPage">
      <XButton action-type='button' @click.native="$Toast({html: '您当前不是用户，无法使用此功能'})">长文字弹框</XButton>
      <XButton action-type='button' @click.native="$Toast({html: '成功的弹窗', type: 'success'})">成功提示</XButton>
      <XButton action-type='button' @click.native="$Toast({html: '失败的弹窗'})">失败提示</XButton>
      <XButton action-type='button' @click.native="sendAjx">发送请求</XButton>
      <XButton action-type='button' @click.native="showAlert">alert</XButton>
      <XButton action-type='button' @click.native="showConfirm">confirm</XButton>
      <XButton action-type='button' @click.native="showLoading">loading</XButton>
    </div>
  </HeaderView>
  <!-- <view-box class="showPage">

  </view-box> -->
</template>

<script>
import { XButton } from 'vux'
import Alert from '@/components/common/Alert'
import HeaderView from '@/components/common/HeaderView'

export default {
  components: {
    XButton,
    Alert,
    HeaderView
  },
  data () {
    return {
    }
  },
  methods: {
    sendAjx () {
      // document.querySelectorAll('.vux-alert .weui-dialog__hd')
      let data = {
        accountName: '18911111111',
        password: 'fLy19940517'
      }
      this.$http.user.login(data).then(res => {
        this.$Toast({html: res.resMsg})
      })
    },
    showAlert () {
      this.$alert({
        // title: '加挂成功！',
        content: '确认要删除此收货地址吗？',
        // content: '您现在可以查询本报单的详细信息，以及做保全变更。如您还需要查询或变更其他保单信息，请继续操作加挂保单。',
        onShow () {
          console.log('Plugin: I\'m showing')
        },
        onHide () {
          console.log('Plugin: I\'m hiding')
        }
      })
    },
    showLoading () {
      this.$vux.loading.show()
      setTimeout(() => {
        this.$vux.loading.hide()
      }, 1500)
    },
    showConfirm () {
      let _this = this
      this.$alert({
        // 组件除show外的属性
        btn: 2,
        // title: '你确定吗？',
        content: '确认要删除此收货地址吗请问请问撒旦？',
        onCancel () {
          console.log('取消') // 非当前 vm
        },
        onConfirm () {
          console.log(this) // 非当前 vm
          console.log(_this) // 当前 vm
        }
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
