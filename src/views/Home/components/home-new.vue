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
      <div style="position: relative;height: 426px;" ref="target">
        <Transition name="fade">
          <ul
            ref="pannel"
            class="goods-list"
            v-if="newresult.length"
          >
            <li
              v-for="item in newresult"
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
          <HomeSkeleton
            bg="#f0f9f4"
            v-else
          />
        </Transition>
      </div>
    </HomePanel>
  </div>
</template>
<script>
import HomePanel from './home-panel.vue'
import HomeSkeleton from './home-skeleton.vue'
import { getNewGoods } from '@/api/home'
import { useLazyData } from '@/hooks/index'
export default {
  name: 'HomeNew',
  components: {
    HomePanel,
    HomeSkeleton
  },
  setup () {
    const { target, result } = useLazyData(getNewGoods)
    return { newresult: result, target }
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
