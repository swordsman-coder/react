import { getData, removeData } from './ezr'

export const isAuthenticated = () => {
  return (getData('user') && getData('user').username) || ''
}

export const login = source => {
  window.location.href = `http://xxx.cn/#/login?returnUrl=${source}`
}

export const logout = source => {
  removeData('user')
  window.location.href = `http://xxx.cn/#/login?returnUrl=${source}`
}


