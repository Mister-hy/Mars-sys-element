import { createRouter, createWebHashHistory } from 'vue-router'

export const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/login')
  }
]

export const privateRoutes = []

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
