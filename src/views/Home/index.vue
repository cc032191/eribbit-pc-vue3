<template>
  <div class="home-entry">
    <div class="container">
      <!-- 左侧导航分类 -->
      <Homecategory />
      <!-- 右侧轮播组件 -->
      <Homebanner />
    </div>
  </div>
  <Homenew></Homenew>
  <HomeHot></HomeHot>
  <h3>我是<small>苏苏</small></h3>
</template>

<script>
import Homecategory from '@/views/Home/components/home-category'
import Homebanner from '@/views/Home/components/home-banner'
import Homenew from '@/views/Home/components/home-new'
import HomeHot from '@/views/Home/components/home-hot'

export default {
  name: 'AppHome',
  components: {
    Homecategory,
    Homebanner,
    Homenew,
    HomeHot
  }
}
</script>

<style scoped lang="less"></style>
