import Layout from '../../layout'

export default {
  path: '/system',
  component: Layout,
  redirect: '/system/menu',
  name: 'menu-query',
  meta: {
    title: '菜单管理',
    icon: ''
  },
  children: [
    {
      path: '/system/menu',
      meta: {
        title: '角色管理',
        icon: ''
      },
      component: () => import('../../views/menu/index.vue')
    }
  ]
}
