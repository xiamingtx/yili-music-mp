const baseUrl = 'https://yili-music-2066870-1312790450.ap-shanghai.run.tcloudbase.com'

export const get = (uri: string) => {
    wx.showLoading({
      title: '加载中'
    }) 
    return new Promise((resolve, reject) => {
      wx.request({
        url: baseUrl + uri,
        method: 'GET',
        success: (res) => { // 成功时执行
          resolve(res)
        },
        fail: reject, // 失败时执行
        complete: () => { // 必然会执行
          wx.hideLoading()
        }
      })
    })
}