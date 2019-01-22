import { observable, action } from 'mobx'
import { isAuthenticated, login, logout } from '../utils/Session'
import { query2Dictionary, setData } from '../utils/ezr'
import Cookies from 'js-cookie'

class account {
  @observable isLogin = !!isAuthenticated()
  @observable userName = ''
  @action toggleLogin(flag, source='') {
    source = window.location.href;
    if (flag) {
      login(source)
      this.isLogin = true
    } else {
      logout(source)
      this.isLogin = false
    }
  }
  @action setUser(params) {
    let obj = query2Dictionary(params)
    this.userName = obj.username
    if (!obj.token) return
    setData('user', obj)
    this.isLogin = true
    Cookies.set('opt.authorize', obj.token);
  }
}

export default new account()