import React from 'react'
import { render } from 'react-dom'
import { hashHistory } from 'react-router'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'

import RouteMap from './router/routeMap'

import Hello from './containers/Hello'
const store = configureStore()

// 通用样式
import './static/css/common.scss'

// render(
//     <RouteMap history={hashHistory}/>,
//     document.getElementById('root')
// )
render (
    <Provider store={store}>
        <Hello/>
    </Provider>,
    document.getElementById('root')
)
