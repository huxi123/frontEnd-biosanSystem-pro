import React, {Component, PropTypes} from 'react';
import { Router, Route, Redirect, IndexRoute, browserHistory,hashHistory} from 'react-router';
import {Tool} from '../config/tools.js';
/**
 * 整体结构
 */
// import Home from '../components/common/home.js';
/**
 * default login
 */
import Login from '../components/common/login';

const Warp = (props)=>{
    return props.children;
}

const history = process.env.NODE_ENV !== 'production' ? hashHistory : browserHistory;






const RouteConfig = (
    <Router history={hashHistory}>
        <Route path="/" component={Warp}>
            <IndexRoute component={Login}/>
            <Redirect from='*' to='/'  />
        </Route>
    </Router>
);

export default RouteConfig;