import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/main.vue'
import Categoryedit from '../views/Categoryedit'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'mian',
    component: Main,
    redirect: "/category/edit",
    children:[{
      path:"/category/edit",
      component:Categoryedit
    }]
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
