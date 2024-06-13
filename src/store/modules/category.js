import { topCategory } from '@/api/constants'
import { findCategoryList } from '@/api/category'
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
    },
    // 定义当前分类下的二级类目的显示与隐藏
    showCategory (state, id) {
      const currCategory = state.list.find(item => item.id === id)
      currCategory.categoryshow = true
    },
    hideCategory (state, id) {
      const currCategory = state.list.find(item => item.id === id)
      currCategory.categoryshow = false
    }
  },
  actions: {
    async getCategoryList ({ commit }) {
      const data = await findCategoryList()
      data.result.forEach(item => {
        item.categoryshow = false
      })
      console.log(data.result)
      commit('setCategoryList', data.result)
    }
  }
}
