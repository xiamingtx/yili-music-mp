const tokenKey = "yuanli"

export const setToken = (token: string) => {
  wx.setStorageSync(tokenKey, token)
}

export const getToken = () => wx.getStorageSync(tokenKey) || null

export const removeToken = () => {
  wx.setStorageSync(tokenKey, '');
}