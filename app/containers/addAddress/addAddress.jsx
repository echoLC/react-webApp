import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from '../../components/Header/Header'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userInfoActionsFromOtherFile from '../../actions/userinfo'
import { hashHistory } from 'react-router'
import './add-address.scss'

class AddAddress extends React.Component{
    constructor(props, context){
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            tel: '',
            address: ''
        }
    }
    render(){
        return (
            <div className="add-address-container">
                <Header title="添加新地址"/>
                <div className="add-address-form">
                    <label>手机号：</label><input type="text" value={this.state.tel} onChange={this.telChangeHandle.bind(this)}/><br/>
                    <div className="distance">{''}</div>
                    <label>详细地址：</label>
                    <input type="text" value={this.state.address} onChange={this.addressChangeHandle.bind(this)}/><br/>
                    <div className="submit-btn">
                        <button onClick={this.addAddressHandle.bind(this)}>提交</button>
                    </div>
                </div>
            </div>
        )
    }
    addAddressHandle(){
        const actions = this.props.userInfoActions;
        let userInfo = this.props.userInfo;
        userInfo.address = this.state.address;
        userInfo.tel = this.state.tel;
        actions.update(userInfo);
        hashHistory.push('/order');
    }
    addressChangeHandle(e){
            this.setState({
                address: e.target.value
            })
    }
    telChangeHandle(e){
            this.setState({
                tel: e.target.value
            })
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
)(AddAddress)

