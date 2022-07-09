import Layout from '../../layout'

export default {
  path: '/system',
  component: Layout,
  redirect: '/system/menu',
  name: 'menu-query',
  meta: {
    title: '系统管理',
    icon: 'AddLocation'
  },
  children: [
    {
      path: '/system/menu',
      meta: {
        title: '菜单管理',
        icon: 'AddLocation'
      },
      component: () => import('../../views/menu/index.vue')
    }
  ]
}
