<template>
  <div class="home-banner">
    <XtxCarousel autoplay :bannerlist="bannerlist" />
  </div>
</template>

<script>
import { ref } from 'vue'
import { getBanner } from '@/api/home'
export default {
  name: 'HomeBanner',
  setup () {
    const bannerlist = ref([])
    getBanner().then((data) => {
      bannerlist.value = data.result
    })
    return { bannerlist }
  }
}
</script>

<style scoped lang="less">
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;
}

.xtx-carousel {
  ::v-deep .carousel-btn.prev {
    left: 270px;
  }

  ::v-deep .carousel-indicator {
    padding-left: 250px;
  }
}
</style>
