import Layout from '../../layout'

export default {
  path: '/audit',
  component: Layout,
  redirect: '/audit/leave',
  name: 'leave-query',
  meta: {
    title: '审批管理',
    icon: 'Aim'
  },
  children: [
    {
      path: '/audit/leave',
      meta: {
        title: '休假管理',
        icon: 'Aim'
      },
      component: () => import('../../views/leave/index.vue')
    }
  ]
}
