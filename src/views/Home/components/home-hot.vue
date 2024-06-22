<template>
  <HomePanel
    title="人气推荐"
    subtitle="人气爆款 不容错过"
  >
    <div
      style="position: relative;height: 426px;"
      ref="target"
    >
      <Transition name="fade">
        <ul
          class="goods-list"
          v-if="hotresult.length"
        >
          <li
            v-for="item in hotresult"
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
        <HomeSkeleton v-else />
      </Transition>
    </div>
  </HomePanel>
</template>

<script>
import { useLazyData } from '@/hooks/index'
import HomePanel from './home-panel'
import HomeSkeleton from './home-skeleton.vue'
import { getHot } from '@/api/home'
export default {
  name: 'HomeHot',
  components: { HomePanel, HomeSkeleton },
  setup () {
    const { target, result } = useLazyData(getHot)
    return {
      hotresult: result,
      target
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
