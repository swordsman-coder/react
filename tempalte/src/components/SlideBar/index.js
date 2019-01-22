import React from 'react'
import CustomMenu from "../Menu";
import './index.less'
const menus = [
  {
    title: '首页',
    icon: 'home',
    key: '/home'
  },
  {
    title: '关于',
    icon: 'setting',
    key: '/about',
    subs: [
      {
        key: '/about',
        title: '关于我们',
        icon: '',
      }
    ]
  }
]

class SiderNav extends React.Component {
  render() {

    return (
      <div className='ezr-nav' style={{height: '100vh',overflowY:'scroll',background: '#001529'}}>
        <div className='logo'>
          LOGO
        </div>
        <CustomMenu menus={menus}/>
      </div>
    )
  }
}

export default SiderNav