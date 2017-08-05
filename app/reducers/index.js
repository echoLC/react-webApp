/**
 * Created by echoLC on 2017/7/21.
 */
import {combineReducers} from 'redux'

import userInfo from './userinfo'
import store from './store';

const rootReducer = combineReducers({
    userInfo,
    store
})

export default rootReducer