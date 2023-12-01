/** 通用分⻚结果类型 */
declare interface PageResult<T> {
  /** 列表数据 */ list: T[]
  /** 总条数 */
  counts: number
  /** 当前⻚数 */
  page: number
  /** 总⻚数 */
  pages: number
  /** 每⻚条数 */
  pageSize: number
}
/** 通用分⻚参数类型 */
declare interface PageParams {
  /** ⻚码：默认值为 1 */
  page?: number
  /** ⻚大小：默认值为 10 */
  pageSize?: number
}
/** 通用商品类型 */
type GoodsItem = {
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
type GuessItem = GoodsItem
/** 热⻔推荐 */
type HotResult = {
  /** id信息 */
  id: string
  /** 活动图片 */
  bannerPicture: string
  /** 活动标题 */
  title: string
  /** 子类选项 */
  subTypes: SubTypeItem[]
}

/** 属性信息 */
type DetailsPropertyItem = {
  /** 属性名称 */
  name: string
  /** 属性值 */
  value: string
}
/** sku信息 */
type SkuItem = {
  /** id */
  id: string
  /** goodsId */
  oodsId: string
  /** 库存 */
  inventory: number
  /** 原价 */
  oldPrice: number
  /** sku图片 */
  cover: string
  /** 当前价格 */
  price: number
  /** sku编码 */
  //
  skuCode: string
  /** 规格集合[ 规格信息 ] */
  specs: SkuSpecItem[]
}
/** 规格信息 */
type SkuSpecItem = {
  /** 规格名称 */
  name: string
  /** 可选值名称 */
  valueName: string
}
/** 可选规格信息 */
type SpecItem = {
  /** 规格名称 */
  name: string
  /** 可选值集合[ 可选值信息 ] */
  value: SpecValueItem[]
}
/** 可选值信息 */
type SpecValueItem = {
  /** 是否可售 */
  available: boolean
  /** 可选值备注 */
  desc: string
  /** 可选值名称 */
  name: string
  /** 可选值图片链接 */
  picture: string
}
// 基于小程序的 Page 实例类型扩展 uni-app 的 Page
type PageInstance = Page.PageInstance & WechatMiniprogram.Page.InstanceMethods<any>
const pageInstance = pages.at(-1) as PageInstance
