import Layout from '../../layout'

export default {
  path: '/dept',
  component: Layout,
  redirect: '/system/dept',
  name: 'dept-query',
  meta: {
    title: '部门管理',
    icon: 'Back'
  },
  children: [
    {
      path: '/system/dept',
      meta: {
        title: '部门管理',
        icon: 'Back'
      },
      component: () => import('../../views/dept/index.vue')
    }
  ]
}
