import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Drop from '../views/Drop.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:drop',
    name: 'Drop',
    component: Drop
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
