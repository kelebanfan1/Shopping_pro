import type { OrderResult } from '@/types/order'
import { http } from '@/utils/http'

/* 获取微信支付参数
GET
/pay/wxPay/miniPay   */
export const getPayWxPayMiniPay = (data: { orderId: string }) => {
  return http<WechatMiniprogram.RequestPaymentOption>({
    method: 'GET',
    url: '/pay/wxPay/miniPay',
    data,
  })
}

/* 模拟支付-内测版
GET
/pay/mock */
export const getPayMockAPI = (data: { orderId: string }) => {
  return http({
    method: 'GET',
    url: '/pay/mock',
    data,
  })
}

/* 模拟发货-内测版
开发中
GET
/member/order/consignment/{id} */
export const getMemberOrderConsignmentByIdAPI = (id: string) => {
  return http({
    method: 'GET',
    url: `/member/order/consignment/${id}`,
  })
}

/* 确认收货
开发中
PUT
/member/order/{id}/receipt */
export const putMemberOrderByIdReceiptAPI = (id: string) => {
  return http<OrderResult>({
    method: 'PUT',
    url: `/member/order/${id}/receipt`,
  })
}
