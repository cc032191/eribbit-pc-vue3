<template>
  <!-- 顶部通栏 -->
  <TopNav />
  <!-- 头部组件 -->
  <header>header</header>
  <!-- 内容区域 -->
  <div class="main">
    <router-view></router-view>
  </div>
<!-- 底部组件 -->
  <footer>footer</footer>
</template>

<script>
import TopNav from '@/components/app-navbar.vue'
export default {
  name: 'AppLayout',
  components: {
    TopNav
  }

}
</script>

<style>

</style>
