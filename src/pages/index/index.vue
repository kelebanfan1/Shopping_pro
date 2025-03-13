<script setup lang="ts">
// import XtxSwiper from '@/components/XtxSwiper.vue'
import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import PageSkeleton from './components/PageSkeleton.vue'
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import type { XtxGuessInstance } from '@/types/component'
import { useGuessList } from '@/composables'
//获取轮播图数据
const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  // console.log(res)
  bannerList.value = res.result
}
//获取前台分类数据
const categoryList = ref<CategoryItem[]>([])
const getHomeCategoryData = async () => {
  const res = await getHomeCategoryAPI()
  // console.log(res)
  categoryList.value = res.result
}
//获取热门推荐数据
const hotList = ref<HotItem[]>([])
const getHomeHotData = async () => {
  const res = await getHomeHotAPI()
  hotList.value = res.result
}
//是否加载中标记
const isLoding = ref(false)
onLoad(async () => {
  isLoding.value = true
  // getHomeBannerData()
  // getHomeCategoryData()
  // getHomeHotData()
  await Promise.all([getHomeBannerData(), getHomeCategoryData(), getHomeHotData()])
  isLoding.value = false
})

// //获取猜你喜欢组件实例
// const guessRef = ref<XtxGuessInstance>()
// //滚动触底
// const onScrolltolower = () => {
//   guessRef.value?.getMore()
// }
//使用猜你喜欢实例
const { guessRef, onSrolltolower } = useGuessList()
//当前下拉刷新状态
const triggered = ref(false)
//自定义下拉刷新被触发
const onRefresherrefresh = async () => {
  //开始动画
  triggered.value = true
  // await getHomeBannerData()
  // await getHomeCategoryData()
  // await getHomeHotData()
  //优化，同时请求
  //重置猜你喜欢数据
  guessRef.value?.resetData()
  await Promise.all([
    getHomeBannerData(),
    getHomeCategoryData(),
    getHomeHotData(),
    guessRef.value?.getMore(),
  ])
  //结束动画
  triggered.value = false
}
</script>

<template>
  <CustomNavbar></CustomNavbar>
  <!-- 滚动容器 触底刷新 -->
  <scroll-view
    refresher-enabled
    @refresherrefresh="onRefresherrefresh"
    :refresher-triggered="triggered"
    @scrolltolower="onSrolltolower"
    scroll-y
    class="scroll-view"
  >
    <PageSkeleton v-if="isLoding"></PageSkeleton>
    <template v-else>
      <!-- 轮播图 -->
      <XtxSwiper :list="bannerList"></XtxSwiper>
      <!-- 分类 -->
      <CategoryPanel :list="categoryList" />
      <!-- 热门推荐 -->
      <HotPanel :list="hotList" />
      <!-- 猜你喜欢 -->
      <XtxGuess ref="guessRef"></XtxGuess>
    </template>
  </scroll-view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.scroll-view {
  flex: 1;
}
</style>
