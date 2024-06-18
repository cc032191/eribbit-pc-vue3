// 扩展vue原有的功能，全局组件、自定义指令、挂载原型方法，注意：没有全局过滤器
// Vue2插件写法：
// 1. 使用对象字面量
// 2. 提供一个install方法
// 3. 将Vue作为参数传入
// const myPlugin = {
//     install(Vue) {
//         // 注册全局组件
//         Vue.component('my-component', {
//             // ...
//         });

//         // 注册或扩展自定义指令
//         Vue.directive('my-directive', {
//             bind(el, binding) {
//                 // ...
//             }
//         });

//         // 向Vue原型添加方法
//         Vue.prototype.$myMethod = function() {
//             // ...
//         };
//     }
// };
// Vue3插件的写法:
import XtxSkeleton from './xtx-skeleton.vue'
import XtxCarousel from './xtx-carousel.vue'
export default {
  install (app) {
    // 注册全局组件
    app.component(XtxSkeleton.name, XtxSkeleton)
    app.component(XtxCarousel.name, XtxCarousel)

    // 注册或扩展自定义指令
    app.directive('my-directive', {
      beforeMount (el, binding) {
        // ...
      }
    })

    // 向Vue原型添加方法
    app.config.globalProperties.$myMethod = function () {
      // ...
    }
  }
}
