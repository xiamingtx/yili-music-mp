import { getToken, removeToken, setToken } from "../utils/auth"

const baseUrl = 'https://yili-music-2066870-1312790450.ap-shanghai.run.tcloudbase.com'
// const baseUrl = 'http://localhost:8080'

export const get = (url: string) => {
    wx.showLoading({
      title: '加载中'
    }) 
    return new Promise((resolve, reject) => {
      wx.request({
        url: baseUrl + url,
        method: 'GET',
        success: (res) => { // 成功时执行
          resolve(res.data)
        },
        fail: reject, // 失败时执行
        complete: () => { // 必然会执行
          wx.hideLoading()
        }
      })
    })
}

export const post = (url: string, data: object) => {
  wx.showLoading({
    title: '加载中'
  }) 
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseUrl + url,
      method: 'POST',
      data,
      success: (res) => { // 成功时执行
        if (res.statusCode === 401) {
          removeToken()
          const currentPages = getCurrentPages()
          const currentRoute = currentPages[currentPages.length - 1].route
          if (currentRoute !== 'pages/login/index') {
            wx.navigateTo({
              url: '/pages/login/index'
            })
          }
          wx.showToast({
            title: '用户未登录',
            icon: 'error'
          })
        }

        _handleToken(res.header)
        resolve(res.data)
      },
      fail: reject, // 失败时执行
      complete: () => { // 必然会执行
        wx.hideLoading()
      }
    })
  })
}

const _handleToken = (header: any) => {
  const token = header['Authorization'] || null
  if (token && getToken() !== token) {
    setToken(token)
    const currentPages = getCurrentPages()
    if (currentPages.length > 1)
      wx.navigateBack()
  }
}