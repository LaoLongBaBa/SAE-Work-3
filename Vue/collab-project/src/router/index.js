import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/HomeView.vue"
import PetView from "@/views/PetView.vue"
import SinglePet from "@/views/SinglePet.vue"
import CartView from "@/views/CartView.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/pets',
    name: 'petview',
    component: PetView
  },
  {
    path:'/pet/:petid',
    name: 'petSingle',
    component: SinglePet
  },
  {
    path:'/cart',
    name: 'cart',
    component: CartView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
