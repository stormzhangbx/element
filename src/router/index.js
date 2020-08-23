import Vue from 'vue'
import VueRouter from 'vue-router'
import { menu, getRoutes } from '@/assets/js/menu'

Vue.use(VueRouter)

const routes = getRoutes(menu)

console.log(routes)
const router = new VueRouter({
  routes
  // routes: [
  //   {
  //     path: '/basic',
  //     component: () => import('@/views/Empty'),
  //     children: [
  //       {
  //         path: 'layout',
  //         component: () => import('@/views/basic/layout/index')
  //       }
  //     ]
  //   }
  // ]
})

export default router
