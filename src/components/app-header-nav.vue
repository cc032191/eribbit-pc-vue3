<template>
  <ul class="app-header-nav">
    <li class="home">
      <RouterLink to="/">首页</RouterLink>
    </li>
    <li
      v-for="item in categoryList"
      :key="item.id"
      @mouseenter="show(item.id)"
      @mouseleave="hide(item.id)"
    >
      <RouterLink
        :to="`/category/${item.id}`"
        @click="hide(item.id)"
      >{{
        item.name
      }}</RouterLink>
      <!-- hover 显示 start -->
      <div
        class="layer"
        :class="{ 'layer-isshow': item.categoryshow }"
      >
        <ul>
          <li
            v-for="sub in item.children"
            :key="sub.id"
          >
            <RouterLink
              :to="`/category/sub/${sub.id}`"
              @click="hide(item.id)"
            >
              <img
                :src="sub.picture"
                alt=""
              />
              <p>{{ sub.name }}</p>
            </RouterLink>
          </li>
        </ul>
      </div>
      <!-- hover 显示 end -->
    </li>
  </ul>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'AppHeaderNav',
  setup () {
    const store = useStore()
    const categoryList = computed(() => store.state.category.list)
    const show = (id) => store.commit('category/showCategory', id)
    const hide = (id) => store.commit('category/hideCategory', id)
    return { categoryList, show, hide }
  }
}
</script>

<style scoped lang="less">
.app-header-nav {
  width: 820px;
  display: flex;
  padding-left: 40px;
  position: relative;
  z-index: 998;
  > li {
    margin-right: 40px;
    width: 38px;
    text-align: center;
    > a {
      font-size: 16px;
      line-height: 32px;
      height: 32px;
      display: inline-block;
    }
    // hover之后显示出来
    &:hover {
      > a {
        color: @xtxColor;
        border-bottom: 1px solid @xtxColor;
      }
    }
    // ++ end
  }
}

// ++ 初始样式 不显示
.layer {
  width: 1240px;
  background-color: #fff;
  position: absolute;
  left: -200px;
  top: 56px;
  height: 0;
  overflow: hidden;
  opacity: 0;
  box-shadow: 0 0 5px #ccc;
  transition: all 0.2s 0.1s;
  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0 70px;
    align-items: center;
    height: 124px;
    li {
      width: 110px;
      text-align: center;
      img {
        width: 60px;
        height: 60px;
      }
      p {
        padding-top: 10px;
      }
      &:hover {
        p {
          color: @xtxColor;
        }
      }
    }
  }
}
.layer-isshow {
  height: 120px;
  opacity: 1;
}
</style>
