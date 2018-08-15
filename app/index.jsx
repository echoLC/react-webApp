import React from 'react'
import { render } from 'react-dom'
import { hashHistory } from 'react-router'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'

import RouteMap from './router/routeMap'

const store = configureStore()

// 通用样式
import './static/css/common.scss'
import './static/css/font.css'
import 'antd-mobile/dist/antd-mobile.css'


render (
  <Provider store={ store }>
    <div>
      <RouteMap history={hashHistory}/>
    </div>
  </Provider>,
  document.getElementById('root')
)
