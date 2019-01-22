import React from 'react'
import { HashRouter, Route, Switch, Redirect} from 'react-router-dom'
import App from './app'
import Admin from './admin'
import Home from '../pages/home';
import Login from '../pages/login';
import About from '../pages/about/about';
export default class ERouter extends React.Component {
    render(){
        return (
            <HashRouter>
                <App>
                    <Switch>
                        <Route path="/login" component={Login}/>
                        <Route path="/" render={()=>
                            <Admin>
                                <Switch>
                                    <Route path='/home' component={Home} />
                                    <Route path='/about' component={About} />
                                    <Redirect to="/home" />
                                </Switch>
                            </Admin>         
                        } />
                    </Switch>
                </App>
            </HashRouter>
        )
    }
}