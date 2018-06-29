<template>
  <Tabbar>
    <TabbarItem link='/home'>
    </TabbarItem>
    <TabbarItem link='/market'>
    </TabbarItem>
    <TabbarItem link='/mine'>
    </TabbarItem>
  </Tabbar>
</template>
<script>
import { Tabbar, TabbarItem } from 'vux'

export default {
  name: 'Tabs',
  components: {
    Tabbar,
    TabbarItem
  },
  data () {
    return {
      tabs: [
      ]
    }
  }
}
</script>
