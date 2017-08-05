import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import Header from '../../components/Header/Header';
import UserInfo from '../../components/userInfo/userInfo';
import Order from './subpage/Order';
import {hashHistory} from 'react-router'

class User extends React.Component{
    constructor(props, context){
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
        let userInfo = this.props.userInfo;
        return (
            <div>
                <Header title="用户主页" backRouter="/"/>
                <UserInfo city={userInfo.cityName} username={userInfo.username}/>
                <Order username={userInfo.username}/>
            </div>
        )
    }

    componentDidMount(){
        // 如果未登录，跳转到登录页面
        if (!this.props.userInfo.username) {
            hashHistory.push('/Login')
        }
    }
}

function mapStateToProps(state) {
    return {
        userInfo: state.userInfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(User)