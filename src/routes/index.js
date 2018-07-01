import car from './car'

export default [
  ...car,
  {
    name: 'index',
    path: '/index',
    component: resolve => require(['@/views/index'], resolve),
    meta: {
      isKeepAlive: true
    },
    children: [
      {
        name: 'home',
        path: 'home',
        component: resolve => require(['@/views/dashboard/home'], resolve),
        title: '招商仁和人寿',
        meta: {
          isKeepAlive: true
        }
      },
      {
        name: 'market',
        path: 'market',
        component: resolve => require(['@/views/dashboard/market'], resolve),
        title: '保险商城',
        meta: {
          isKeepAlive: true
        }
      },
      {
        name: 'mine',
        path: 'mine',
        component: resolve => require(['@/views/dashboard/mine'], resolve),
        title: '个人中心',
        meta: {
          isKeepAlive: true
        }
      }
    ]
  },
  {
    name: 'showPage',
    path: '/showPage',
    component: resolve => require(['../views/demo/showPage'], resolve),
    title: 'showTime',
    meta: {
      isKeepAlive: true
    }
  }
]
