<template>
  <view-box>
    <XHeader></XHeader>
    <slot></slot>
  </view-box>
</template>

<script>
import { XHeader } from 'vux'

export default {
  components: {
    XHeader
  }
}
</script>
