import Vue from 'vue'
import Router from 'vue-router'
import routes from '@/routes'
import { ROUTER_DEFAULT_CONFIG } from '@/config/index'
import { routerBeforeEachFunc, routerAfterEachFunc } from '@/config/interceptors/router'

Vue.use(Router)

// 注入默认配置和路由表
let routerInstance = new Router({
  ...ROUTER_DEFAULT_CONFIG,
  routes: routes
})
// 注入拦截器
routerInstance.beforeEach(routerBeforeEachFunc)
routerInstance.afterEach(routerAfterEachFunc)

export default routerInstance
