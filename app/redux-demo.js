/**
 * Created by echoLC on 2017/7/25.
 */
import {createStore} from 'redux'

export default function () {
    //定义计算规则，即reducer
    function counter(state = 0, action) {
        switch (action.type){
            case 'INCREMENT':
                return state + 1;
                break;
            case 'DECREMENT':
                return state - 1;
                break;
            default:
                return state;
        }
    }

    //根据定义规则生成store
    let store = createStore(counter);


    //定义数据即state变化之后的派发规则
    store.subscribe(()=>{
        console.log(`current state：${store.getState()}`);
    });

    //触发数据变化
    store.dispatch({type: 'INCREMENT'});
    store.dispatch({type: 'INCREMENT'});
    store.dispatch({type: 'DECREMENT'});
}

