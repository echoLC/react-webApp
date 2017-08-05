import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { hashHistory } from 'react-router'

import * as userInfoActionsFromOtherFile from '../../actions/userinfo'
import Header from '../../components/Header/Header';
import LoginComponent from '../../components/Login/login';

class Login extends React.Component{
    constructor(props, context){
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            checking: true
        }
    }
    render(){
        return (
            <div>
                <Header title="登录"/>
                {
                    //验证之后再显示登录信息
                    this.state.checking
                        ?<div>已登录</div>
                        : <LoginComponent loginHandle = {this.loginHandle.bind(this)}/>
                }
            </div>
        )
    }

    componentDidMount(){
        //判断是否登录
        this.doCheck()
    }

    loginHandle(username){
        //将用户名存入redux
        const actions = this.props.userInfoActions;
        let userInfo = this.props.userInfo;
        userInfo.username = username;
        actions.update(userInfo);

        const params = this.props.params;
        const router = params.router;
        //如果有router，则跳转到指定页面
        if(router){
            hashHistory.push(router)
        }else {
            //跳转到用户主页
            this.goUserPage();
        }
    }

    doCheck(){
        const userInfo = this.props.userInfo;
        if(userInfo.username){
            //已经登录，跳转到用户中心页
            this.goUserPage();
        }else {
            //未登录，显示登录页
            this.setState({
                checking: false
            })
        }
    }

    goUserPage(){
        hashHistory.push('/user');
    }
}


function mapStateToProps(state) {
    return {
        userInfo: state.userInfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)