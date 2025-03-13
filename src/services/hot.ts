import type { PageParams } from '@/types/global'
import type { HotResult } from '@/types/hot'
import { http } from '@/utils/http'
type hotParams = PageParams & { subType?: string }
//通用热门推荐类型
export const getHotRecommendAPI = (url: string, data?: hotParams) => {
  return http<HotResult>({
    method: 'GET',
    url,
    data,
  })
}
