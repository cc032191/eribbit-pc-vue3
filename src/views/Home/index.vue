<template>
  <div class="home-entry">
    <div class="container">
      <!-- 左侧导航分类 -->
      <Homecategory />
      <!-- 右侧轮播组件 -->
      <Homebanner />
    </div>
  </div>
</template>

<script>
import Homecategory from '@/views/Home/components/home-category'
import Homebanner from '@/views/Home/components/home-banner.vue'

export default {
  name: 'AppHome',
  components: {
    Homecategory,
    Homebanner
  },
  setup () {}
}
</script>

<style scoped lang="less"></style>
