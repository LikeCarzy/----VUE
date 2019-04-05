import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//路由组件
import Fenlei from "../components/Fenlei.vue"
import Index from "../components/Index.vue"
import Xqing from "../components/Xqing.vue"
import Gwc from "../components/Gwc.vue"
import Dl from "../components/Dl.vue"
import CW from "../components/CW.vue"

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/index',
      component: Index
    },
    {
      path: '/fenlei',
      component: Fenlei
    },
    {
      path: '/xqing',
      component: Xqing
    },
    {
      path: '/gwc',
      component: Gwc
    },
    {
      path: '/dl',
      component: Dl
    },
    {
      path: '*',
      component: CW
    }
  ]
})
