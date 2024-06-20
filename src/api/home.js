// 定义主页相关的API接口函数
import request from '@/utils/request'

/**
 * 获取品牌
 * @param { Number } [limit=6] - 品牌个数
 * @returns Promise
 */

export function getBrand (limit = 6) {
  return request('/home/brand', 'get', { limit })
}

/**
 * 获取广告
 * @returns Promise
 */

export function getBanner () {
  return request('/home/banner', 'get')
}

/**
 * 获取新鲜好物
 * @returns Promise
 */

export function getNewGoods () {
  return request('/home/new', 'get')
}

/**
 * 获取人气推荐
 * @returns Promise
 */

export function getHot () {
  return request('/home/hot', 'get')
}
