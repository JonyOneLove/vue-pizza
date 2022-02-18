import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'
import E404 from '../views/E404.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
  },
  {
    path: '/:pathMatch(.*)',
    name: 'E404',
    component: E404,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
