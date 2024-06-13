import { createRouter, createWebHashHistory } from 'vue-router'
const Layout = () => import('@/views/Layout')
const Home = () => import('@/views/Home')
const Topcategory = () => import('@/views/Category/index.vue')
const Subcategory = () => import('@/views/Category/sub.vue')
const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        component: Home
      },
      {
        path: '/category/:id',
        component: Topcategory
      },
      {
        path: '/category/sub/:id',
        component: Subcategory
      }
    ]
  }
]

// vue2.0 new VueRouter({}) 创建路由实例
// vue3.0 createRouter({}) 创建路由实例

const router = createRouter({
  // 使用history的路由模式
  history: createWebHashHistory(),
  routes
})

export default router
