import { getToken } from "./utils/auth"

// app.ts
App<IAppOption>({
  globalData: {
  },
  onLaunch() {
    // if (!getToken()) {
    //   wx.navigateTo({
    //     url: '/pages/login/index'
    //   })
    // }
  },
})