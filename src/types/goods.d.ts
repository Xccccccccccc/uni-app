/** 商品信息 */
type GoodsResult = {
  /** 主键id */
  id: string
  /** 商品名称 */
  name: string
  /** 商品描述 */
  description: string
  /** 当前价格 */
  price: number
  /** 原价 */
  oldPrice: number
  /** 商品属性集合[ 属性信息 ] */
  properties: DetailsPropertyItem[]
  /** 商品详情图片集合[ 图片链接 ] */
  productPictures: string[]
  /** 主图图片集合[ 主图图片链接 ] */
  mainPictures: string[]
  /** 同类商品[ 商品信息 ] */
  similarProducts: GoodsItem[]
  /** sku集合[ sku信息 ] */
  skus: SkuItem[]
  /** 可选规格集合备注[ 可选规格信息 ] */
  specs: SpecItem[]
  /** 用户地址列表[ 地址信息 ] */
  userAddresses: AddressItem[]
}
