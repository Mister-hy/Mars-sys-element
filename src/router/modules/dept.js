import Layout from '../../layout'

export default {
  path: '/dept',
  component: Layout,
  redirect: '/system/dept',
  name: 'dept-query',
  meta: {
    title: '部门管理',
    icon: ''
  },
  children: [
    {
      path: '/system/dept',
      meta: {
        title: '部门管理',
        icon: ''
      },
      component: () => import('../../views/dept/index.vue')
    }
  ]
}
