declare type LoginResult = {
  /** 用户ID */
  id: number
  /** 头像  */
  avatar: string
  /** 账户名  */
  account: string
  /** 昵称 */
  nickname?: string
  /** 手机号 */
  mobile: string
  /** 登录凭证 */
  token: string
}
declare type LoginParams = {
  code: string
  // encryptedData?: string
  // iv?: string
}

/** 个人信息用户详情信息 */
declare type ProfileDetail = {
  /** 用户ID */
  id: number
  /** 头像  */
  avatar: string
  /** 账户名  */
  account: string
  /** 昵称 */
  nickname?: string
  /** 性别 */
  gender?: Gender
  /** 生日 */
  birthday?: string
  /** 省市区 */
  fullLocation?: string
  /** 职业 */
  profession?: string
}
/** 性别 */
declare type Gender = '女' | '男'
declare type ProfileParams = Pick<ProfileDetail, 'nickname' | 'gender' | 'birthday' | 'profession'> & {
  /** 省份编码 */
  provinceCode?: string
  /** 城市编码 */
  cityCode?: string
  /** 区/县编码 */
  countyCode?: string
}
/** 首⻚-广告区域数据类型 */
declare type BannerItem = {
  /** 跳转链接 */
  hrefUrl: string
  /** id */
  id: string
  /** 图片链接 */
  imgUrl: string
  /** 跳转类型 */
  type: number
}
/** 首⻚-前台类目数据类型 */
declare type CategoryItem = {
  /** 图标路径 */
  icon: string
  /** id */
  id: string
  /** 分类名称 */
  name: string
}
declare type HotItem = {
  /** 说明 */
  alt: string
  /** id */
  id: string
  /** 图片集合[ 图片路径 ] */
  pictures: string[]
  /** 跳转地址 */
  target: string
  /** 标题 */
  title: string
  /** 推荐类型 */
  type: string
}
/** 猜你喜欢-商品类型 */
declare type GuessItem = {
  /** 商品描述 */
  desc: string
  /** 商品折扣 */
  discount: number
  /** id */
  id: string
  /** 商品名称 */
  name: string
  /** 商品已下单数量 */
  orderNum: number
  /** 商品图片 */
  picture: string
  /** 商品价格 */
  price: number
}
import { Component } from '@uni-helper/uni-app-types'

/** 步进器 */
export type InputNumberBox = Component<InputNumberBoxProps>

/** 步进器实例 */
export type InputNumberBoxInstance = InstanceType<InputNumberBox>

/** 步进器属性 */
export type InputNumberBoxProps = {
  /** 输入框初始值（默认1） */
  modelValue: number
  /** 用户可输入的最小值（默认0） */
  min: number
  /** 用户可输入的最大值（默认99999） */
  max: number
  /**  步长，每次加或减的值（默认1） */
  step: number
  /** 是否禁用操作，包括输入框，加减按钮 */
  disabled: boolean
  /** 输入框宽度，单位rpx（默认80） */
  inputWidth: string | number
  /**  输入框和按钮的高度，单位rpx（默认50） */
  inputHeight: string | number
  /** 输入框和按钮的背景颜色（默认#F2F3F5） */
  bgColor: string
  /** 步进器标识符 */
  index: string
  /** 输入框内容发生变化时触发 */
  onChange: (event: InputNumberBoxEvent) => void
  /** 输入框失去焦点时触发 */
  onBlur: (event: InputNumberBoxEvent) => void
  /** 点击增加按钮时触发 */
  onPlus: (event: InputNumberBoxEvent) => void
  /** 点击减少按钮时触发 */
  onMinus: (event: InputNumberBoxEvent) => void
}

/** 步进器事件对象 */
export type InputNumberBoxEvent = {
  /** 输入框当前值 */
  value: number
  /** 步进器标识符 */
  index: string
}

/** 全局组件类型声明 */
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    'vk-data-input-number-box': InputNumberBox
  }
}
