import { login, getAuthority } from '@/api/user'
import { setItem, getItem } from '@/utils/storage'

export default {
  namespaced: true,
  state: {
    userInfo: getItem('userInfo') || [],
    premissionList: {}
  },
  mutations: {
    SET_USER_INFO(state, res) {
      state.userInfo = res
      setItem('userInfo', res)
    }
  },
  actions: {
    async handleLogin({ commit }, params) {
      const res = await login(params)
      // console.log(res)
      commit('SET_USER_INFO', res)
    },
    async handleAuthority({ commit }) {
      const res = await getAuthority()
      console.log(res)
    }
  }
}
