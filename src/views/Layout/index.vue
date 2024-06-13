<template>
  <!-- 顶部通栏 -->
  <TopNav />
  <!-- 头部组件 -->
  <Header />
  <StickyNav />
  <!-- 内容区域 -->
  <div class="app-body">
    <router-view></router-view>
  </div>
  <!-- 底部组件 -->
  <Footer />
</template>

<script>
import TopNav from '@/components/app-navbar.vue'
import Header from '@/components/app-header.vue'
import Footer from '@/components/app-footer.vue'
import StickyNav from '@/components/app.header.sticky.vue'
import { useStore } from 'vuex'
export default {
  name: 'AppLayout',
  components: {
    TopNav,
    Header,
    Footer,
    StickyNav
  },
  setup () {
    // 获取数据
    const store = useStore()
    store.dispatch('category/getCategoryList')
  }
}
</script>

<style scoped lang="less">
.app-body {
  height: 800px;
}
</style>
