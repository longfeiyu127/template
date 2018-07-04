import car from './car'

export default [
  ...car,
  {
    name: 'index',
    path: '/index',
    component: resolve => require(['@/views/index'], resolve),
    meta: {
      keepAlive: true
    },
    children: [
      {
        name: 'home',
        path: 'home',
        component: resolve => require(['@/views/dashboard/home'], resolve),
        meta: {
          title: '招商仁和人寿',
          keepAlive: true
        }
      },
      {
        name: 'market',
        path: 'market',
        component: resolve => require(['@/views/dashboard/market'], resolve),
        meta: {
          title: '保险商城',
          keepAlive: true
        }
      },
      {
        name: 'mine',
        path: 'mine',
        component: resolve => require(['@/views/dashboard/mine'], resolve),
        meta: {
          title: '个人中心',
          keepAlive: true
        }
      }
    ]
  },
  {
    name: 'showPage',
    path: '/showPage',
    component: resolve => require(['../views/demo/showPage'], resolve),
    meta: {
      title: '展示页面1',
      keepAlive: true
    }
  },
  {
    name: 'showPage2',
    path: '/showPage2',
    component: resolve => require(['../views/demo/showPage2'], resolve),
    meta: {
      title: '展示页面2',
      keepAlive: true
    }
  },
  {
    name: 'showPage3',
    path: '/showPage3',
    component: resolve => require(['../views/demo/showPage3'], resolve),
    meta: {
      title: '展示页面3',
      keepAlive: true
    }
  },
  {
    path: '**',
    redirect: '/index/home',
    meta: {
      keepAlive: false
    }
  }
]
