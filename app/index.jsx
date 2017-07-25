import React from 'react'
import { render } from 'react-dom'
import { hashHistory } from 'react-router'

import RouteMap from './router/routeMap'
import store from './redux-demo';

store();

// 通用样式
import './static/css/common.scss'

render(
    <RouteMap history={hashHistory}/>,
    document.getElementById('root')
)
