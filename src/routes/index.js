import car from './car'

export default [
  ...car,
  {
    name: 'home',
    path: '/home',
    component: resolve => require(['@/views/dashboard/home'], resolve)
  },
  {
    name: 'market',
    path: '/market',
    component: resolve => require(['@/views/dashboard/market'], resolve)
  },
  {
    name: 'mine',
    path: '/mine',
    component: resolve => require(['@/views/dashboard/mine'], resolve)
  }
]
