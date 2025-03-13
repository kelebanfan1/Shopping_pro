import type { CategoryTopItem } from '@/types/category'
import { http } from '@/utils/http'

//分类页数据获取

//分类列表
export const getCategoryAPI = () => {
  return http<CategoryTopItem[]>({
    method: 'GET',
    url: '/category/top',
  })
}
