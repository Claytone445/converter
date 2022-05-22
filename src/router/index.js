import Vue from 'vue'
import VueRouter from 'vue-router'
import ConverterView from '../views/ConverterView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ConverterView',
    component: ConverterView
  },
  {
    path: '/CurrentCourses',
    name: 'currentCourses',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "current" */ '../views/CurrentCourses.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
