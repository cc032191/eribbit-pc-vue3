// 创建一个axios实例
import axios from 'axios'
import store from '@/store/index'
import router from '../router'

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 5000
})
// 请求拦截器
instance.interceptors.request.use(
  config => {
    // 获取用户信息
    const { profile } = store.state.user
    // 判断token是否存在，如果存在则设置请求头
    if (profile.token) {
      config.headers.Authorization = `Bearer ${profile.token}`
    }
    return config
  }, err => {
    return Promise.reject(err)
  }
)
// 响应拦截器
instance.interceptors.response.use(res => res.data, err => {
  // 401状态码进入登录页面
  if (err.response && err.response.status === 401) {
    // 清空用户信息
    store.commit('user/setProfile', {})
    // 跳转到登录页，并且需要传参，告知登录页跳转到哪
    // 当前路由的地址
    // 组件里面： '/user?a=10'   $roter.path === '/user'   $roter.fullPath === '/user?a=10'
    // js模块中： roter.currentRoute.value.fullPath // vue3获取当前路由的地址
    //           roter.currentRoute.fullPath // vue2获取当前路由的地址
    // 需要转码，否则无法正确传递参数   encodeURIComponent()防止解析特殊字符
    const fullPath = encodeURIComponent(router.currentRoute.value.fullPath)
    router.push(`/login?redirectUrl=${fullPath}`)
  }
  return Promise.reject(err)
})

export default (url, method, submitData) => instance({ url, method, [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData })
