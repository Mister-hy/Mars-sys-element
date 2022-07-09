import Layout from '../../layout'

export default {
  path: '/audit',
  component: Layout,
  redirect: '/audit/approve',
  name: 'audit-query',
  meta: {
    title: '待审批',
    icon: 'Grid'
  },
  children: [
    {
      path: '/audit/approve',
      meta: {
        title: '待审批',
        icon: 'Grid'
      },
      component: () => import('../../views/approve/index.vue')
    }
  ]
}
