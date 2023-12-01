/** * 商品详情 *
 *  @param id
 * 商品id */
export const getGoodsByIdAPI = (id: string) => {
  return http<GoodsResult>({
    method: 'GET',
    url: '/goods/detail',
    data: { id }
  })
}

/** * 商品详情 *
 *  @param id
 * 商品id */
export const getSameCategoryRecommendGoodsByIdAPI = (id: string, data?: PageParams) => {
  return http<GoodsResult[]>({
    method: 'GET',
    url: `/goods/same?id=${id}`,
    data
  })
}
