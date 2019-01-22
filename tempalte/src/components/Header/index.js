import React from 'react'
import {
  Icon,
  Dropdown,
  Menu,
  Button,
} from 'antd'
import screenfull from 'screenfull'
import { inject } from 'mobx-react'
// import { toJS } from 'mobx'
import { withRouter } from 'react-router-dom'
import { isAuthenticated } from '../../utils/Session'

//withRouter一定要写在前面，不然路由变化不会反映到props中去
@withRouter 
@inject('account')
@inject('header') 
class HeaderBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      icon: 'fullscreen'
    }
  }
  componentDidMount () {
    screenfull.onchange(() => {
      this.setState({
        icon: screenfull.isFullscreen ? 'shrink' : 'fullscreen'
      })
    })
  }
  componentWillUnmount () {
    screenfull.off('change')
  }

  toggle = () => {
    this.props.onToggle()
  }
  screenfullToggle = () => {
    if (screenfull.enabled) {
      screenfull.toggle()
    }
  }
  logout = () => {
    this.props.account.toggleLogin(false)
  }
  login = (location) => {
    this.props.account.toggleLogin(true)    
  }

  render () {
    const { icon } = this.state
    const {account, location} = this.props
    const notLogin = (
      <Button onClick={this.login.bind(this,location)}>
            登录
      </Button>
    )
    const menu = (
      <Menu className='menu'>
        <Menu.ItemGroup title='用户中心' className='menu-group'>
          <Menu.Item>你好 - {isAuthenticated()}</Menu.Item>
          <Menu.Item><span onClick={this.logout}>退出登录</span></Menu.Item>
        </Menu.ItemGroup>
      </Menu>
    )
    const login = (
      <Dropdown overlay={menu}>
        <span>{isAuthenticated()}</span>
      </Dropdown>
    )
    const style = {
      lineHeight: '64px', 
      float: 'right'
    }
    const fontSize = {
      fontSize: '20px'
    }
    return (
      <div id='headerbar'>
        <div style={style}>
          <ul className='header-ul'>
            <li>
                <Icon 
                  onClick = {
                    this.screenfullToggle
                  }
                  className='trigger' 
                  style={fontSize} 
                  type={icon} />
            </li>
            
            <li>
              {account.isLogin}
              {account.isLogin ? login : notLogin}
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default HeaderBar
