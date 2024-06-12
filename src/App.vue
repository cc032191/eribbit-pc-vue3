<template>
  <div>
    <!-- <p>{{ welcomeMessage }}</p>
    <p>年龄：{{ age }}</p>
    <button @click="updateUsername">更改用户名为 '李四'</button>
    <button @click="getUser">异步获取新用户名</button> -->
    <div>
      <h1>我是moduleA模块</h1>
      <p>{{ welcomeMessageA }}</p>
      <!-- <p>{{ $store.getters.welcomeMessage }}</p> -->
      <P>年龄：{{ ageA }}</P>
    </div>
    <div>
      <h1>我是moduleB模块</h1>
      <p>{{ welcomeMessageB }}</p>
      <p>年龄：{{ ageB }}</p>
      <button @click="updateUsername">更改用户名为 'moduleB-susu'</button>
      <button @click="getUser">异步获取新用户名</button>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  name: 'App',
  setup () {
    // 根组件vuex的使用方法
    const store = useStore()

    // // 计算属性来获取 Vuex state
    // const welcomeMessage = computed(() => store.getters.welcomeMessage)
    // const age = computed(() => store.state.age)

    // // 方法来提交 mutation
    // const updateUsername = () => {
    //   store.commit('setUsername', '李四')
    // }

    // // 方法来派发 action
    // const getUser = () => {
    //   store.dispatch('fetchUser')
    // }

    // return { welcomeMessage, age, updateUsername, getUser }
    const welcomeMessageA = computed(() => store.getters.welcomeMessage)
    const ageA = computed(() => store.state.moduleA.age)

    const welcomeMessageB = computed(() => store.getters['moduleB/welcomeMessage'])
    const ageB = computed(() => store.state.moduleB.age)

    const updateUsername = () => {
      store.commit('moduleB/setUsername', 'moduleB-susu')
    }

    const getUser = () => {
      store.dispatch('moduleB/fetchUser')
    }

    return { welcomeMessageA, ageA, welcomeMessageB, ageB, updateUsername, getUser }
  }
}
</script>
