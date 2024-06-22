<template>
  <div class="home-skeleton">
    <div
      v-for="i in 4"
      :key="i"
      :style="{backgroundColor:bg}"
      class="itme"
    >
      <XtxSkeleton
        bg="#e4e4e4"
        :width=306
        :height=306
        animated
      ></XtxSkeleton>
      <XtxSkeleton
        bg="#e4e4e4"
        :width=160
        :height=24
        animated
      ></XtxSkeleton>
      <XtxSkeleton
        bg="#e4e4e4"
        :width=120
        :height=24
        animated
      ></XtxSkeleton>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeSkeleton',
  props: {
    bg: {
      type: String,
      default: '#fff'
    }
  }
}
</script>
<style lang='less' scoped>
.home-skeleton {
  width: 1240px;
  height: 406px;
  display: flex;
  justify-content: space-between;
  .itme {
    width: 306px;
    .xtx-skeleton ~ .xtx-skeleton {
      display: block;
      margin: 16px auto 0;
    }
  }

}
</style>
