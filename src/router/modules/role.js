import Layout from '../../layout'

export default {
  path: '/system',
  component: Layout,
  redirect: '/system/role',
  name: 'role-query',
  meta: {
    title: '角色管理',
    icon: 'AlarmClock'
  },
  children: [
    {
      path: '/system/role',
      meta: {
        title: '角色管理',
        icon: 'AlarmClock'
      },
      component: () => import('../../views/role/index.vue')
    }
  ]
}
