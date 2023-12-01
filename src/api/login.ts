/**
 * 小程序登录
 * @param data 请求参数
 */
export const postLoginWxMinAPI = (data: LoginParams) => {
  return http<LoginResult>({
    method: 'POST',
    url: '/user/login/wxMin',
    data
  })
}

/**
 * 小程序登录_内测版
 * @param phoneNumber 模拟手机号码
 */
export const postLoginWxMinSimpleAPI = (phoneNumber: string) => {
  return http<LoginResult>({
    method: 'POST',
    url: '/user/login/wxMin/simple',
    data: {
      phoneNumber
    }
  })
}
export const getMemberProfileAPI = () => {
  return http<ProfileDetail>({
    method: 'GET',
    url: '/user/profile'
  })
}
export const putMemberProfileAPI = (data: ProfileParams) => {
  return http<ProfileDetail>({
    method: 'PUT',
    url: '/user/profile',
    data
  })
}
