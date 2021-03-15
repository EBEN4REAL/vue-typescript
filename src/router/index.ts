import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const  Calculator = () => import('../components/Calculator.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Calculator',
    component: Calculator
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
