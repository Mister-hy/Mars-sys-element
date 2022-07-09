import Layout from '../../layout'

export default {
  path: '/system',
  component: Layout,
  redirect: '/system/user',
  name: 'user-quer',
  meta: {
    title: '系统管理',
    icon: 'Apple'
  },
  children: [
    {
      path: '/system/user',
      meta: {
        title: '用户管理',
        icon: 'Apple'
      },
      component: () => import('../../views/user/index.vue')
    }
  ]
}
