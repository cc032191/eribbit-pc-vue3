<template>
  <div class="home-new">
    <HomePanel
      title="新鲜好物"
      subtitle="新鲜出炉 品质靠谱"
    >
      <template #right>
        <XtxMore path="/text"></XtxMore>
      </template>
      <!-- 面板内容 -->
      <ul
        ref="pannel"
        class="goods-list"
      >
        <li
          v-for="item in newgoods"
          :key="item.id"
        >
          <RouterLink to="`/product/${item.id}`">
            <img
              :src="item.picture"
              alt=""
            />
            <p class="name">{{ item.name }}</p>
            <p class="price">&yen;{{ item.price }}</p>
          </RouterLink>
        </li>
      </ul>

    </HomePanel>
  </div>
</template>
<script>
import HomePanel from './home-panel.vue'
import { ref } from 'vue'
import { getNewGoods } from '@/api/home'
export default {
  name: 'HomeNew',
  components: {
    HomePanel
  },

  setup () {
    const newgoods = ref([])
    getNewGoods().then((data) => {
      newgoods.value = data.result
    })
    return { newgoods }
  }
}
</script>
<style lang='less' scoped>
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;
  li {
    width: 306px;
    height: 406px;
    background: #f0f9f4;
    // 激活效果
    .hoverShadow();
    // end
    img {
      width: 306px;
      height: 306px;
    }
    p {
      font-size: 22px;
      padding: 12px 30px 0 30px;
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    .price {
      color: @priceColor;
    }
  }
}
</style>
