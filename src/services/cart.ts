import type { CartItem } from '@/types/cart'
import { http } from '@/utils/http'

//加入购物车接口
//data 请求体参数
export const postMemberCartAPI = (data: { skuId: string; count: number }) => {
  return http({
    method: 'POST',
    url: '/member/cart',
    data,
  })
}

//获取购物车列表接口

export const getMemberCartAPI = () => {
  return http<CartItem[]>({
    method: 'GET',
    url: '/member/cart',
  })
}

/* 删除/清空购物车单品  data请求体参数  ids:skuid集合
DELETE
/member/cart */

export const deleteMemberCartAPI = (data: { ids: string[] }) => {
  return http({
    method: 'DELETE',
    url: '/member/cart',
    data,
  })
}
/* 修改商品数量接口
  skuid :skuid
  selected:选中状态
  count:商品数量
*/
export const putMemberCartSkuIdAPI = (
  skuId: string,
  data: { selected?: boolean; count?: number },
) => {
  return http({
    method: 'PUT',
    url: `/member/cart/${skuId}`,
    data,
  })
}

/* 购物车全选 接口 */
export const putMemberCartSelectedAPI = (data: { selected: boolean }) => {
  return http({
    method: 'PUT',
    url: '/member/cart/selected',
    data,
  })
}
