/**
 * Created by echoLC on 2017/8/6.
 */
import * as actionTypes from '../constants/store'

const initState = [];

export default function store(state = initState, action) {
    switch(action.type){
        case actionTypes.STORE_UPDATE:
            return action.data;
        case actionTypes.STORE_ADD:
             state.unshift(action.data);
             return state;
        case actionTypes.STORE_REMOVE:
             return state.filter((item)=>{
                if(item.id !== action.data.id){
                    return item;
                }
            });
        default:
            return state;
    }
}