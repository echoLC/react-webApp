import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import App from '../containers/App'
import Home from '../containers/home/home'
import City from '../containers/city/city'
import NotFound from '../containers/404'
import Search from '../containers/search/search';
import Detail from '../containers/detail/detail';
import Login from '../containers/Login/Login';
import User from '../containers/user/User';
import Order from '../containers/Order/Order';
import ManageAddress from '../containers/manageAddress/manageAddress';
import AddAddress from '../containers/addAddress/addAddress';

class RouteMap extends React.Component {
    render() {
        return (
            <Router history={this.props.history}>
                <Route path="/" component={App}>
                    <IndexRoute component={Home}/>
                    <Route path="/city" component={City}/>
                    <Route path="/search/:category(/:keyword)" component={Search}/>
                    <Route path="/detail/:id" component={Detail}/>
                    <Route path="/login(/:router)" component={Login}/>
                    <Route path="/user" component={User}/>
                    <Route path="/order" component={Order}/>
                    <Route path="/manageAddress" component={ManageAddress}/>
                    <Route path="/addAddress" component={AddAddress}/>
                    <Route path="*" component={NotFound}/>
                </Route>
            </Router>
        )
    }
}

export default RouteMap
