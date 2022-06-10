import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SingleMovie from '../views/SingleMovie.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/:searchTerm',
    name: 'home',
    component: HomeView
  },
  {
    path: '/id/:id',
    name: 'SingleMovie',
    component: SingleMovie
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
