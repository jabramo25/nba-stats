import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/allPlayers',
    name: 'allPlayers',

    component: () => import('../views/AllPlayers.vue')
  },
  {
    path: '/allGames',
    name: 'allGames',
    component: () => import('../views/AllGames.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
