import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { hashHistory } from 'react-router'

import * as storeActionsFromFile from '../../../actions/store'

import BuyAndStore from '../../../components/BuyAndStore/BuyAndStore';

class Buy extends React.Component{
    constructor(props, context){
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            isStore: false
        }
    }
    render(){
        const id = this.props.id;
        console.log(id);
        return (
            <div>
                <BuyAndStore isStore={this.state.isStore} buyHandle={this.buyHandle.bind(this)} storeHandle={this.storeHandle.bind(this)}/>
            </div>
        )
    }

    componentDidMount(){
        this.checkStoreState();
    }
    //检验商户是否被收藏
    checkStoreState(){
        const id = this.props.id;
        const store = this.props.store;

        store.some((item)=>{
            if(item.id === id){
                //已经被收藏
                this.setState({
                    isStore: true
                });
                //跳出循环
                return true;
            }
        })
    }

    //检验登录状态
    checkLoginState(){
        const id = this.props.id;
        const userInfo = this.props.userInfo;

        if(!userInfo.username){
            hashHistory.push('/login/' + encodeURIComponent('/detail/' + id));
            return false;
        }else {
            return true;
        }
    }

    buyHandle(){
        let loginState = this.checkLoginState();
        //如果未登录
        if(!loginState){
           return;
        }
        hashHistory.push('/order');
    }

    storeHandle(){
        let loginState = this.checkLoginState();
        //如果未登录
        if(!loginState){
            return;
        }
        const id = this.props.id;
        const actions = this.props.storeActions;
        //如果未被收藏，则将商户ID存入redux，即收藏
        if(!this.state.isStore){
            actions.add({id: id});
        }else {
            //如果已收藏则取消收藏，将商户移除redux
            actions.remove({id: id});
        }
        this.setState({
            isStore: !this.state.isStore
        })
    }
}

function mapStateToProps(state) {
    return {
        userInfo: state.userInfo,
        store: state.store
    }
}

function mapDispatchToProps(dispatch) {
    return {
        storeActions: bindActionCreators(storeActionsFromFile, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Buy)