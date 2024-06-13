import { topCategory } from '@/api/constants'
export default {
  namespaced: true,
  state () {
    return {
      // 初始化的时候就要有数据
      list: topCategory.map(item => ({ name: item }))
    }
  },
  mutations: {
    setCategoryList (state, payload) {
      state.list = payload
    }
  },
  actions: {
    getCategoryList () {

    }
  }
}
