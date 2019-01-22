import React from 'react'
import { Layout } from 'antd';
import HeaderBar from '../components/Header'
import SlideBar from '../components/SlideBar'
const {Sider, Header, Content} = Layout
class Admin extends React.Component{
    state = {
        collapsed: false
    }

    toggle = () => {
        // console.log(this)  状态提升后，到底是谁调用的它
        this.setState({
        collapsed: !this.state.collapsed
        })
    }

    render(){
        const headerStyle = {
            background: '#fff',
            padding: '0 16px'
        }
        return (
            <Layout>
                <Sider
                    collapsible
                    trigger={null}
                    collapsed={this.state.collapsed}>
                <SlideBar/>                                    
                </Sider>
                <Layout>
                    <Header style={headerStyle}>
                        <HeaderBar collapsed={this.state.collapsed} onToggle={this.toggle}/>
                    </Header>
                    <Content>
                        <div className="content">
                            {this.props.children}
                        </div>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}
export default Admin