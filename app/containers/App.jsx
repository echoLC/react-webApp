import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import LocalStore from '../util/localStore'
import { CITYNAME } from '../config/localStoreKey'
import * as userInfoActionsFromOtherFile from '../actions/userinfo'

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            initDone: false
        };
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                {this.state.initDone?this.props.children:<div>正在加载...</div>}</div>
        )
    }

    componentDidMount(){
        //获取位置信息
        let cityName = LocalStore.getItem(CITYNAME);

        if(cityName == null){
            cityName = '北京';
        }
        this.props.userInfoActions.update({
            cityName: cityName
        });

        //更改状态
        this.setState({
            initDone: true
        })
    }
}

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)