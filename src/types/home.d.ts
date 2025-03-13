/* 首页广告区域类型 */
export type BannerItem = {
  hrefUrl: string
  id: string
  imgUrl: string
  type: number
}

/* 首页前台分类数据类型 */
export type CategoryItem = {
  icon: string
  id: string
  name: string
}
/* 首页前台热门推荐数据类型 */
export type HotItem = {
  type: any
  alt: string
  id: string
  pictures: string[]
  target: string
  title: string
}
//猜你喜欢数据类型
export type GuessItem = GoodsItem
