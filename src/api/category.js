// 定义分类相关的API接口函数
import request from '@/utils/request'

/**
 * 获取或有分类（顶级、二级、对应的商品推荐数据）
 * @returns Promise
 */

export function findCategoryList () {
  return request('/home/category/head', 'get')
}
