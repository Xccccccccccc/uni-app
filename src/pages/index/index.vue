<template>
  <view class="viewport">
    <CustomNavbar></CustomNavbar>
    <scroll-view
      refresher-enabled
      @refresherrefresh="onRefresherrefresh"
      :refresher-triggered="isTriggered"
      scroll-y
      @scrolltolower="onScrolltolower"
      class="scroll-view"
    >
      <PageSkeleton v-if="isLoading"></PageSkeleton>
      <template v-else>
        <WSwiper :list="bannerList"></WSwiper>
        <CategoryPanel :list="categoryList"></CategoryPanel>
        <HotPanel :list="hotItemList"></HotPanel>
        <wGuess ref="guessRef"></wGuess>
      </template>
    </scroll-view>
  </view>
</template>
<script setup lang="ts">
import WSwiper from '@/components/wSwiper/wSwiper.vue'
import CustomNavbar from '../../components/CustomNavbar.vue'
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/api/home.api'
import CategoryPanel from '@/components/CategoryPanel.vue'
import HotPanel from '@/components/HotPanel.vue'
import wGuess from '@/components/wGuess.vue'
import type { wGuessInstance } from '@/types/component'
import type { CategoryItem, HotItem } from '@/types/params'
//获取猜你喜欢组件实例
const guessRef = ref<wGuessInstance>()

//滚动触底事件
const onScrolltolower = () => {
  guessRef.value?.getMore()
}
//热门推荐
const hotItemList = ref<HotItem[]>([])
const getHotItemData = async () => {
  const res = await getHomeHotAPI()
  hotItemList.value = res.result
}

//种类
const categoryList = ref<CategoryItem[]>([])
const getHomeCategoryData = async () => {
  const res = await getHomeCategoryAPI()
  categoryList.value = res.result
}
//轮播图
const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}

// 是否加载中标记
const isLoading = ref(false)
onLoad(async () => {
  isLoading.value = true
  await Promise.all([getHomeBannerData(), getHomeCategoryData(), getHotItemData()])
  isLoading.value = false
})
// 下拉刷新状态
const isTriggered = ref(false)
// 自定义下拉刷新被触发
const onRefresherrefresh = async () => {
  // 开启动画
  isTriggered.value = true
  // 重置猜你喜欢组件数据
  guessRef.value?.resetData() // 加载数据
  await Promise.all([getHomeBannerData(), getHomeCategoryData(), getHotItemData()]) // 关闭动画
  isTriggered.value = false
}
</script>
<style lang="scss" scoped>
page {
  background-color: #f7f7f7;
  height: 100%;
  overflow: hidden;
}

/* 设置滚动区高度 */
.viewport {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.scroll-view {
  flex: 1;
  overflow: hidden;
}
</style>
