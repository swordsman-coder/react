import React, { Component } from 'react';
import { inject, observer } from 'mobx-react'
// import { toJS } from 'mobx'
import { withRouter } from 'react-router-dom'
@withRouter @inject('account') @observer
class home extends Component {
    componentDidMount() {
        // 设置用户
        if (!this.props.location.search) return
        this.props.account.setUser(this.props.location.search)
        window.location.href = '/#/home' //去除url参数
    }
    render() {
        return (
            <div>
                首页
            </div>
        );
    }
}

export default home;