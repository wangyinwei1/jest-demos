// src/apis/user.ts

import axios from "axios"

// 获取用户列表
export interface FetchUserRes {
  id: string
  name: string
}

export const fetchUser = async () => {
  return axios.get<FetchUserRes>("https://mysite.com/api/users")
}
