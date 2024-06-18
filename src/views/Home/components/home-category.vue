<template>
  <div class="home-category" @mouseleave="layershowId = null">
    <ul class="menu">
      <!-- 一级 -->
      <li
        v-for="item in menuList"
        :key="item.id"
        @mouseenter="layershowId = item.id"
        :class="layershowId === item.id ? 'active' : ''"
      >
        <RouterLink :to="`/category/${item.id}`">{{ item.name }}</RouterLink>
        <!-- 二级 -->
        <template v-if="item.children">
          <RouterLink
            v-for="subItem in item.children"
            :key="subItem.id"
            :to="`/category/sub/${subItem.id}`"
          >
            {{ subItem.name }}
          </RouterLink>
        </template>
        <template v-else>
          <XtxSkeleton
            :width="50"
            :height="20"
            bg="rgba(255,255,255,0.2)"
            style="margin-right: 5px"
          />
          <XtxSkeleton :width="50" :height="20" bg="rgba(255,255,255,0.2)" />
        </template>
      </li>
    </ul>
    <!-- 弹层 -->
    <div class="layer">
      <h4>
        {{ layervalue && layervalue.id === "brand" ? "品牌推荐" : "商品推荐" }}
        <small>根据您的购买或浏览记录推荐</small>
      </h4>
      <!-- 商品 -->
      <ul v-if="layervalue && layervalue.goods">
        <li v-for="layeritem in layervalue.goods" :key="layeritem.id">
          <RouterLink to="/">
            <img :src="layeritem.picture" alt="" />
            <div class="info">
              <p class="name ellipsis-2">{{ layeritem.name }}</p>
              <p class="desc ellipsis">{{ layeritem.desc }}</p>
              <p class="price"><i>¥</i>{{ layeritem.price }}</p>
            </div>
          </RouterLink>
        </li>
      </ul>
      <!-- 品牌 -->
      <ul v-if="layervalue && layervalue.brands">
        <li
          class="brand"
          v-for="branditem in layervalue.brands"
          :key="branditem.id"
        >
          <RouterLink to="/">
            <img :src="branditem.picture" alt="" />
            <div class="info">
              <p class="place">
                <i class="iconfont icon-dingwei"></i>{{ branditem.place }}
              </p>
              <p class="name ellipsis">{{ branditem.name }}</p>
              <p class="desc ellipsis-2">{{ branditem.desc }}</p>
            </div>
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed, ref, reactive, watch } from 'vue'
import { getBrand } from '@/api/home'
export default {
  name: 'HomeCategory',
  setup () {
    const store = useStore()
    const brand = reactive({
      id: 'brand',
      name: '品牌',
      children: [{ id: 'brand-children', name: '品牌推荐' }],
      brands: []
    })
    const menuList = computed(() => {
      const list = store.state.category.list.map((item) => {
        return {
          id: item.id,
          name: item.name,
          children: item.children && item.children.slice(0, 2),
          goods: item.goods
        }
      })
      list.push(brand)
      return list
    })

    getBrand().then((data) => {
      brand.brands = data.result
    })

    // 显示推荐
    const layershowId = ref(null)
    // 监听 layershowId 的变化
    const layervalue = computed(() =>
      menuList.value.find((item) => item.id === layershowId.value)
    )
    watch(brand, (newValue) => {
      console.log(newValue)
    })

    return { menuList, layershowId, layervalue }
  }
}
</script>

<style scoped lang="less">
.home-category {
  width: 250px;
  height: 500px;
  background: rgba(0, 0, 0, 0.8);
  position: relative;
  z-index: 99;
  // 左侧菜单
  .menu {
    li {
      padding-left: 40px;
      height: 50px;
      line-height: 50px;
      &:hover,
      &.active {
        background: @xtxColor;
      }
      a {
        margin-right: 4px;
        color: #fff;
        &:first-child {
          font-size: 16px;
        }
      }
    }
  }
  // 弹层默认不显示
  .layer {
    width: 990px;
    height: 500px;
    background: rgba(255, 255, 255, 0.8);
    position: absolute;
    left: 250px;
    top: 0;
    display: none;
    padding: 0 15px;
    h4 {
      font-size: 20px;
      font-weight: normal;
      line-height: 80px;
      small {
        font-size: 16px;
        color: #666;
      }
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        width: 310px;
        height: 120px;
        margin-right: 15px;
        margin-bottom: 15px;
        border: 1px solid #eee;
        border-radius: 4px;
        background: #fff;
        &:nth-child(3n) {
          margin-right: 0;
        }
        a {
          display: flex;
          width: 100%;
          height: 100%;
          align-items: center;
          padding: 10px;
          &:hover {
            background: #e3f9f4;
          }
          img {
            width: 95px;
            height: 95px;
          }
          .info {
            padding-left: 10px;
            line-height: 24px;
            overflow: hidden;
            .name {
              font-size: 16px;
              color: #666;
            }
            .desc {
              color: #999;
            }
            .price {
              font-size: 22px;
              color: @priceColor;
              i {
                font-size: 16px;
              }
            }
          }
        }
      }
      // 品牌样式
      li.brand {
        height: 180px;
        a {
          align-items: flex-start;
          img {
            width: 120px;
            height: 160px;
          }
          .info {
            p {
              margin-top: 8px;
            }
            .place {
              color: #999;
            }
          }
        }
      }
    }
  }
  // 显示弹层
  &:hover {
    .layer {
      display: block;
    }
  }
}
.xtx-skeleton {
  animation: fade 1s linear infinite alternate;
}
@keyframes fade {
  from {
    opacity: 0.2;
  }
  to {
    opacity: 1;
  }
}
</style>
