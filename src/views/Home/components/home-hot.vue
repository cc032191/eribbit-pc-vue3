<template>
  <HomePanel
    title="人气推荐"
    subtitle="人气爆款 不容错过"
  >
    <ul class="goods-list">
      <li
        v-for="item in homehot"
        :key="item.id"
      >
        <RouterLink to="/">
          <img
            :src="item.picture"
            alt=""
          >
          <p class="name">{{item.title}}</p>
          <p class="desc">{{item.alt}}</p>
        </RouterLink>
      </li>
    </ul>
  </HomePanel>
</template>

<script>
import HomePanel from './home-panel'
import { getHot } from '@/api/home'
import { ref } from 'vue'
export default {
  name: 'HomeHot',
  components: { HomePanel },
  setup () {
    const homehot = ref([])
    getHot().then(res => {
      homehot.value = res.result
    })
    return {
      homehot
    }
  }
}
</script>

<style scoped lang='less'>
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 426px;
  li {
    width: 306px;
    height: 406px;
    // 激活效果
    .hoverShadow();
    img {
      width: 306px;
      height: 306px;
    }
    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
    }
    .desc {
      color: #999;
      font-size: 18px;
    }
  }
}
</style>
