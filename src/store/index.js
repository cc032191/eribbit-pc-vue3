import { createStore } from 'vuex'
import createPersistedstate from 'vuex-persistedstate'
import user from './modules/user'
import cart from './modules/cart'
import category from './modules/category'

export default createStore({
  modules: {
    user,
    cart,
    category
  },
  plugins: [
    createPersistedstate({
      // 本地存储名字
      key: 'erabbit-client-pc-store',
      // 需要存储的模块
      paths: ['user', 'cart']
    })
  ]
})

// 根模块vuex使用
// export default createStore({
//   state: {
//     username: '张三',
//     age: 20
//   },
//   getters: {
//     // 加上欢迎词
//     welcomeMessage: (state) => {
//       return `欢迎，${state.username}！`
//     }
//   },
//   mutations: {
//     // 修改用户名
//     setUsername (state, newUsername) {
//       state.username = newUsername
//     },
//     // 增加年龄
//     incrementAge (state) {
//       state.age += 1
//     }
//   },
//   actions: {
//     // 异步获取用户信息
//     fetchUser (ctx) {
//       setTimeout(() => {
//         ctx.commit('setUsername', '李四')
//       }, 1000)
//     }
//   }
// })
