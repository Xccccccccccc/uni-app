/** 获取预付订单返回信息 */
type OrderPreResult = {
  /** 商品集合 [ 商品信息 ] */
  goods: OrderPreGoods[]
  /** 结算信息 */
  summary: {
    /** 商品总价 */
    totalPrice: number
    /** 邮费 */
    postFee: number
    /** 应付金额 */
    totalPayPrice: number
  }
  /** 用户地址列表 [ 地址信息 ] */
  userAddresses: AddressItem[]
}
/** 商品信息 */
type OrderPreGoods = {
  /** 属性文字，例如“颜色:瓷白色尺寸：8寸” */
  attrsText: string
  /** 数量 */
  count: number
  /** id */
  id: string
  /** 商品名称 */
  name: string
  /** 实付单价 */
  payPrice: string
  /** 图片 */
  picture: string
  /** 原单价 */
  price: string
  /** SKUID */
  skuId: string
  /** 实付价格小计 */
  totalPayPrice: string
  /** 小计总价 */
  totalPrice: string
}

/** 提交订单请求参数 */
type OrderCreateParams = {
  orderId: string
  /** 所选地址Id */
  addressId: string
  /** 配送时间类型，1为不限，2为工作日，3为双休或假日 */
  deliveryType: number
  /** 订单备注 */
  buyerMessage: string
  /** 商品集合[ 商品信息 ] */
  goods: {
    /** id */
    id: string
    /** 数量 */
    count: number
    /** 选中的商品属性 */
    skus: string
  }
  []
  /** 支付渠道：支付渠道，1支付宝、2微信--支付方式为在线支付时，传值，为货到付款时，不传值 */
  payChannel: 1 | 2
  /** 支付方式，1为在线支付，2为货到付款 */
  payType: 1 | 2
}
/** 提交订单返回信息 */
type OrderCreateResult = {
  /** 订单Id */
  id: string
}
/** 订单详情返回信息 */
type OrderResult = {
  /** 订单编号 */
  id: string
  /** 订单状态，1为待付款、2为待发货、3为待收货、4为待评价、5为已完成、6为已取消 */
  orderState: number
  /** 倒计时--剩余的秒数 -1 表示已经超时，正数表示倒计时未结束 */
  countdown: number
  /** 商品集合 [ 商品信息 ] */
  skus: OrderSkuItem[]
  /** 收货人 */
  receiverContact: string
  /** 收货人手机 */
  receiverMobile: string
  /** 收货人完整地址 */
  receiverAddress: string
  /** 下单时间 */
  createTime: string
  /** 商品总价 */
  totalMoney: number
  /** 运费 */
  postFree: number
  /** 应付金额 */
  payMoney: number
}
/** 商品信息 */
type OrderSkuItem = {
  /** sku id */
  id: string
  /** 商品 id */
  goodsId: string
  /** 商品名称 */
  name: string
  /** 商品属性文字 */
  attrsText: string
  /** 数量 */
  count: number
  /** 购买时单价 */
  price: number
  /** 图片地址 */
  cover: string
}
/** 物流信息返回值类型 */
type OrderLogisticResult = {
  /** 快递公司 */
  company: {
    /** 公司名称 */
    name: string
    /** 快递编号 */
    number: string
    /** 联系电话 */
    tel: string
  }
  /** 商品件数 */
  count: number
  /** 物流日志 */
  list: LogisticItem[]
}
/** 物流日志 */
type LogisticItem = {
  /** 信息ID */
  id: string
  /** 信息文字 */
  text: string
  /** 时间 */
  time: string
}
/** 订单列表参数 */
type OrderListParams = PageParams & { orderType: number }
/** 订单列表 */
type OrderListResult = {
  /** 总记录数 */
  counts: number
  /** 数据集合    [ 订单信息 ] */
  list: OrderItem[]
  /** 当前⻚码 */
  page: number
  /** 总⻚数 */
  pages: number
  /** ⻚尺寸 */
  pageSize: number
}
/** 订单列表项 */
type OrderItem = OrderResult & {
  /** 总件数 */
  totalNum: number
}
