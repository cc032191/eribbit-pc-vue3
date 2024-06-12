import { createStore } from 'vuex'

// A模块
const moduleA = {
  // namespaced: true,
  state: {
    username: 'moduleA',
    age: 20
  },
  getters: {
    welcomeMessage: (state) => {
      return `欢迎，${state.username}！`
    }
  }
}

// B模块
const moduleB = {
  namespaced: true,
  state: {
    username: 'moduleB',
    age: 25
  },
  getters: {
    welcomeMessage: (state) => {
      return `欢迎，${state.username}！`
    }
  },
  mutations: {
    setUsername (state, newUsername) {
      state.username = newUsername
    },
    incrementAge (state) {
      state.age += 1
    }
  },
  actions: {
    fetchUser: (ctx) => {
      setTimeout(() => {
        ctx.commit('setUsername', 'moduleB-yangsusu')
      }, 1000)
    }
  }
}

export default createStore({
  modules: {
    moduleA,
    moduleB
  }
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
