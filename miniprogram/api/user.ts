import { post } from "./request"

type LoginRequest = {
  username: string,
  password: string
}

export const login = (loginRequest: LoginRequest) => post('/login', loginRequest)