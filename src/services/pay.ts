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
