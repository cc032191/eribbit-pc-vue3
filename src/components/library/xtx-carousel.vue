<template>
  <div
    class="xtx-carousel"
    @mouseenter="stop()"
    @mouseleave="start()"
  >
    <!-- 图片容器 -->
    <ul class="carousel-body">
      <!-- fade 显示的图片加上 -->
      <li
        class="carousel-item"
        v-for="(item, i) in bannerlist"
        :key="i"
        :class="{ fade: index === i }"
      >
        <!-- 图片 -->
        <RouterLink to="/">
          <img
            :src="item.imgUrl"
            alt=""
          />
        </RouterLink>
      </li>
    </ul>
    <!-- 上一张 -->
    <a
      href="javascript:;"
      class="carousel-btn prev"
      @click="taggle(-1)"
    ><i class="iconfont icon-angle-left"></i></a>
    <!-- 下一张 -->
    <a
      href="javascript:;"
      class="carousel-btn next"
      @click="taggle(1)"
    ><i class="iconfont icon-angle-right"></i></a>
    <!-- 指示器 -->
    <div class="carousel-indicator">
      <!-- active 激活点 -->
      <span
        v-for="(item, i) in bannerlist"
        :key="i"
        :class="{ active: index === i }"
        @click="index = i"
      ></span>
    </div>
  </div>
</template>

<script>
import { onUnmounted, ref, watch } from 'vue'
export default {
  name: 'XtxCarousel',
  props: {
    bannerlist: {
      type: Array,
      default: () => []
    },
    duration: {
      type: Number,
      default: 3000
    },
    autoplay: {
      type: Boolean,
      default: false
    }
  },
  setup (props) {
    const index = ref(0)
    let timer = null
    const autoplayFn = () => {
      clearInterval(timer)
      timer = setInterval(() => {
        index.value++
        if (index.value >= props.bannerlist.length) {
          index.value = 0
        }
      }, props.duration)
    }
    watch(
      () => props.bannerlist,
      (newValue) => {
        if (newValue.length) {
          autoplayFn()
        }
      },
      { immediate: true }
    )
    // 鼠标移入就停止
    const stop = () => {
      if (timer) clearInterval(timer)
    }
    // 鼠标移出就开启
    const start = () => {
      if (props.bannerlist.length && props.autoplay) {
        autoplayFn()
      }
    }

    // 点击切换按钮切换上下一张
    const taggle = (i) => {
      const newIndex = index.value + i
      // 如果超出就等于0
      if (newIndex > props.bannerlist.length - 1) {
        index.value = 0
        return
      }
      if (newIndex < 0) {
        index.value = props.bannerlist.length - 1
        return
      }
      index.value = newIndex
    }

    onUnmounted(() => {
      clearInterval(timer)
    })

    return {
      index,
      stop,
      start,
      taggle
    }
  }
}
</script>
<style scoped lang="less">
.xtx-carousel {
  width: 100%;
  height: 100%;
  min-width: 300px;
  min-height: 150px;
  position: relative;
  .carousel {
    &-body {
      width: 100%;
      height: 100%;
    }
    &-item {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
      transition: opacity 0.5s linear;
      &.fade {
        opacity: 1;
        z-index: 1;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    &-indicator {
      position: absolute;
      left: 0;
      bottom: 20px;
      z-index: 2;
      width: 100%;
      text-align: center;
      span {
        display: inline-block;
        width: 12px;
        height: 12px;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 50%;
        cursor: pointer;
        ~ span {
          margin-left: 12px;
        }
        &.active {
          background: #fff;
        }
      }
    }
    &-btn {
      width: 44px;
      height: 44px;
      background: rgba(0, 0, 0, 0.2);
      color: #fff;
      border-radius: 50%;
      position: absolute;
      top: 228px;
      z-index: 2;
      text-align: center;
      line-height: 44px;
      opacity: 0;
      transition: all 0.5s;
      &.prev {
        left: 20px;
      }
      &.next {
        right: 20px;
      }
    }
  }
  &:hover {
    .carousel-btn {
      opacity: 1;
    }
  }
}
</style>
