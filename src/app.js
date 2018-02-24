import React, {Component, PropTypes} from 'react';
import ReactDOM, {render} from 'react-dom';
import {Provider} from 'react-redux';

import route from './router/router.js'; //路由配置
import store from './Redux/Store/index.js';//应用状态托管

//通用样式表
import './css/common.less';

/**
 * 数组相关方法库，作为全局api加载
 */
require('yyx-list');

/**
 * 应用初始化
 */
render(
    <Provider store={store}>
        { route }
    </Provider>,
    document.getElementById("root")
);

