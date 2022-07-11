// index.ts

import { login } from "../../api/user"

Page({
  data: {
    username: '',
    password: ''
  },

  onLogin() {
    login({username: this.data.username, password: this.data.password})
  }
})
