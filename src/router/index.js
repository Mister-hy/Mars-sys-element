import { createRouter, createWebHashHistory } from 'vue-router'
import user from './modules/user'
import menu from './modules/menu'
import role from './modules/role'
import dept from './modules/dept'
import leave from './modules/leave'
export const Publicroutes = [
  // {
  //   path: '/login',
  //   name: 'login',
  //   component: () => import('../views/login')
  // },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/logins/login.vue')
  },
  {
    path: '/',
    name: 'layout',
    component: () => import('../layout/index.vue'),
    children: [
      {
        path: '/404',
        name: '404',
        component: () => import('../views/404/index.vue')
      }
    ]
  }
]
const privateRouters = [dept, leave, menu, role, user]
export const privateRoutes = []

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...Publicroutes, ...privateRouters]
})

export default router
