<!--
此文件为开发者工具生成，生成时间: 2023/11/18上午10:37:42
使用方法：
在 D:\Study\yzwuni-app\uni-mp-template-main\dist\dev\mp-weixin\pages\index\index.wxml 引入模板

```
<import src="index.skeleton.wxml"/>
<template is="skeleton" wx:if="{{loading}}" />
```

在 D:\Study\yzwuni-app\uni-mp-template-main\dist\dev\mp-weixin\pages\index\index.wxss 中引入样式
```
@import "./index.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
-->
<template name="skeleton">
  <view class="sk-container">
    <view class="viewport">
      <view is="pages/index/components/CustomNavbar">
        <view
          class="navbar CustomNavbar--navbar data-v-ff0d84a2 CustomNavbar--data-v-ff0d84a2"
          style="padding-top: 54px"
        >
          <view
            class="flex CustomNavbar--flex items-center CustomNavbar--items-center h-64 CustomNavbar--h-64 pl-30 CustomNavbar--pl-30 pt-20 CustomNavbar--pt-20 data-v-ff0d84a2 CustomNavbar--data-v-ff0d84a2"
          >
            <image
              class="w-200 CustomNavbar--w-200 h-50 CustomNavbar--h-50 data-v-ff0d84a2 CustomNavbar--data-v-ff0d84a2 sk-image"
            ></image>
            <text
              class="logo-text CustomNavbar--logo-text data-v-ff0d84a2 CustomNavbar--data-v-ff0d84a2 sk-transparent sk-text-6-2500-882 sk-text"
              >新鲜 · 亲民 · 快捷</text
            >
          </view>
          <view class="search CustomNavbar--search data-v-ff0d84a2 CustomNavbar--data-v-ff0d84a2">
            <text
              class="icon-search CustomNavbar--icon-search data-v-ff0d84a2 CustomNavbar--data-v-ff0d84a2 sk-transparent sk-text-14-2857-745 sk-text sk-pseudo sk-pseudo-circle"
              >搜索商品</text
            >
            <text
              class="icon-scan CustomNavbar--icon-scan data-v-ff0d84a2 CustomNavbar--data-v-ff0d84a2 sk-pseudo sk-pseudo-circle"
            ></text>
          </view>
        </view>
      </view>
      <scroll-view refresher-enabled="true" scroll-y="true" class="scroll-view">
        <view is="components/wSwiper/wSwiper">
          <view class="carousel wSwiper--carousel">
            <swiper circular="true" interval="3000" current="0" autoplay="false"></swiper>
            <view class="indicator wSwiper--indicator">
              <text class="dot wSwiper--dot"></text>
              <text class="dot wSwiper--dot"></text>
              <text class="dot wSwiper--dot active wSwiper--active"></text>
              <text class="dot wSwiper--dot"></text>
              <text class="dot wSwiper--dot"></text>
            </view>
          </view>
        </view>
        <view is="pages/index/components/CategoryPanel">
          <view class="category CategoryPanel--category">
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
              <image class="icon CategoryPanel--icon sk-image"></image>
              <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-188 sk-text">居家</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
              <image class="icon CategoryPanel--icon sk-image"></image>
              <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-615 sk-text">锦鲤</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
              <image class="icon CategoryPanel--icon sk-image"></image>
              <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-344 sk-text">服饰</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
              <image class="icon CategoryPanel--icon sk-image"></image>
              <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-802 sk-text">母婴</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
              <image class="icon CategoryPanel--icon sk-image"></image>
              <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-726 sk-text">个护</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
              <image class="icon CategoryPanel--icon sk-image"></image>
              <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-273 sk-text">严选</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
              <image class="icon CategoryPanel--icon sk-image"></image>
              <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-136 sk-text">数码</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
              <image class="icon CategoryPanel--icon sk-image"></image>
              <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-572 sk-text">运动</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
              <image class="icon CategoryPanel--icon sk-image"></image>
              <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-264 sk-text">杂项</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
              <image class="icon CategoryPanel--icon sk-image"></image>
              <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-773 sk-text">品牌</text>
            </navigator>
          </view>
        </view>
        <view is="pages/index/components/HotPannel">
          <view class="panel HotPannel--panel hot HotPannel--hot">
            <view class="item HotPannel--item">
              <view class="title HotPannel--title">
                <text class="title-text HotPannel--title-text sk-transparent sk-text-14-2857-570 sk-text"
                  >特惠推荐</text
                >
                <text class="title-desc HotPannel--title-desc sk-transparent sk-text-14-2857-673 sk-text"
                  >精选全攻略</text
                >
              </view>
              <navigator class="cards HotPannel--cards" hover-class="none">
                <image class="image HotPannel--image sk-image" mode="aspectFit"></image>
                <image class="image HotPannel--image sk-image" mode="aspectFit"></image>
              </navigator>
            </view>
            <view class="item HotPannel--item">
              <view class="title HotPannel--title">
                <text class="title-text HotPannel--title-text sk-transparent sk-text-14-2857-376 sk-text"
                  >爆款推荐</text
                >
                <text class="title-desc HotPannel--title-desc sk-transparent sk-text-14-2857-356 sk-text"
                  >最受欢迎</text
                >
              </view>
              <navigator class="cards HotPannel--cards" hover-class="none">
                <image class="image HotPannel--image sk-image" mode="aspectFit"></image>
                <image class="image HotPannel--image sk-image" mode="aspectFit"></image>
              </navigator>
            </view>
            <view class="item HotPannel--item">
              <view class="title HotPannel--title">
                <text class="title-text HotPannel--title-text sk-transparent sk-text-14-2857-234 sk-text"
                  >一站买全</text
                >
                <text class="title-desc HotPannel--title-desc sk-transparent sk-text-14-2857-709 sk-text"
                  >精心优选</text
                >
              </view>
              <navigator class="cards HotPannel--cards" hover-class="none">
                <image class="image HotPannel--image sk-image" mode="aspectFit"></image>
                <image class="image HotPannel--image sk-image" mode="aspectFit"></image>
              </navigator>
            </view>
            <view class="item HotPannel--item">
              <view class="title HotPannel--title">
                <text class="title-text HotPannel--title-text sk-transparent sk-text-14-2857-540 sk-text"
                  >新鲜好物</text
                >
                <text class="title-desc HotPannel--title-desc sk-transparent sk-text-14-2857-931 sk-text"
                  >生活加分项</text
                >
              </view>
              <navigator class="cards HotPannel--cards" hover-class="none">
                <image class="image HotPannel--image sk-image" mode="aspectFit"></image>
                <image class="image HotPannel--image sk-image" mode="aspectFit"></image>
              </navigator>
            </view>
          </view>
        </view>
        <view is="components/Guess/Guess" class="r">
          <view class="caption Guess--caption">
            <text
              class="text Guess--text sk-transparent sk-text-0-0000-900 sk-text sk-pseudo sk-pseudo-circle"
              >猜你喜欢</text
            >
          </view>
        </view>
      </scroll-view>
    </view>
  </view>
</template>
<style scoped lang="scss">
.sk-transparent {
  color: transparent !important;
}
.sk-text-6-2500-882 {
  background-image: linear-gradient(transparent 6.25%, #eeeeee 0%, #eeeeee 93.75%, transparent 0%) !important;
  background-size: 100% 27.907rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-14-2857-745 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 39.0698rpx;
  position: relative !important;
}
.sk-text-14-2857-188 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}
.sk-text-14-2857-615 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}
.sk-text-14-2857-344 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}
.sk-text-14-2857-802 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}
.sk-text-14-2857-726 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}
.sk-text-14-2857-273 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}
.sk-text-14-2857-136 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}
.sk-text-14-2857-572 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}
.sk-text-14-2857-264 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}
.sk-text-14-2857-773 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}
.sk-text-14-2857-570 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.9535rpx;
  position: relative !important;
}
.sk-text-14-2857-673 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 31.7442rpx;
  position: relative !important;
}
.sk-text-14-2857-376 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.9535rpx;
  position: relative !important;
}
.sk-text-14-2857-356 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 31.7442rpx;
  position: relative !important;
}
.sk-text-14-2857-234 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.9535rpx;
  position: relative !important;
}
.sk-text-14-2857-709 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 31.7442rpx;
  position: relative !important;
}
.sk-text-14-2857-540 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.9535rpx;
  position: relative !important;
}
.sk-text-14-2857-931 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 31.7442rpx;
  position: relative !important;
}
.sk-text-0-0000-900 {
  background-image: linear-gradient(transparent 0%, #eeeeee 0%, #eeeeee 100%, transparent 0%) !important;
  background-size: 100% 31.3953rpx;
  position: relative !important;
}
.sk-image {
  background: #efefef !important;
}
.sk-pseudo::before,
.sk-pseudo::after {
  background: #efefef !important;
  background-image: none !important;
  color: transparent !important;
  border-color: transparent !important;
}
.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
  border-radius: 0 !important;
}
.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
  border-radius: 50% !important;
}
.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>
