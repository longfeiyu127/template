<template>
  <div class="page2" @click="$router.push('/index/home')"></div>
</template>

<script>
export default {
  name: 'page2',
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
.page2{
  height: 100%;
  width: 100%;
  background: green;
}
</style>
