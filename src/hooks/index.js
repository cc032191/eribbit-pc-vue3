// 自定义钩子函数
import { useIntersectionObserver } from '@vueuse/core'
import { ref } from 'vue'
/**
 * 数据懒加载函数
 * 使用IntersectionObserver API实现数据懒加载
 * 监听目标元素是否在视口中，如果在视口中，则调用API函数获取数据
 * @param {Element} target 监听的目标元素
 * @param {Function} fn API函数，用于获取数据
 * @returns {result} 返回API函数的Promise对象
 */
// 数据懒加载
export const useLazyData = (fn) => {
  const target = ref(null)
  // 定义data变量
  const result = ref([])
  // 使用 useIntersectionObserver 监听目标元素是否在视口中
  // 当目标元素进入视口时，触发回调函数 fn
  const { stop } = useIntersectionObserver(
    // 监听目标元素
    target,
    ([{ isIntersecting }], observerElement) => {
      // isIntersecting 布尔值 代表当前监听的元素是否进入视口区域
      // 当目标元素进入视口时,isIntersecting为true，触发回调函数 fn
      if (isIntersecting) {
        fn().then(data => {
          result.value = data.result
        })
        // 停止观察当前元素
        stop()
      }
    }
  )
  return { result, target }
}
