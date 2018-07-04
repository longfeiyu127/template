<template>
  <Tabbar>
    <TabbarItem :link='item.path' v-for="(item,index) in tabs" :key="index">
      <img :src="item.icon" slot="icon" />
      <img :src="item.actionIcon" slot="icon-active" />
      <span slot="label">{{item.title}}</span>
    </TabbarItem>
  </Tabbar>
</template>
<script>
import { Tabbar, TabbarItem } from 'vux'
import home from '@/assets/svg/home.svg'
import homeA from '@/assets/svg/homeA.svg'
import market from '@/assets/svg/market.svg'
import marketA from '@/assets/svg/marketA.svg'
import mine from '@/assets/svg/mine.svg'
import mineA from '@/assets/svg/mineA.svg'
export default {
  name: 'Tabs',
  components: {
    Tabbar,
    TabbarItem
  },
  data () {
    return {
      tabs: [
        {
          title: '首页',
          path: '/index/home',
          icon: home,
          actionIcon: homeA
        },
        {
          title: '商城',
          path: '/index/market',
          icon: market,
          actionIcon: marketA
        },
        {
          title: '我的',
          path: '/index/mine',
          icon: mine,
          actionIcon: mineA
        }
      ]
    }
  }
}
</script>
