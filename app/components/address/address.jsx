import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import {hashHistory} from 'react-router';
import './address.scss';

class address extends React.Component{
    constructor(props, context){
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
        let userInfo = this.props.userInfo;
        return (
            <div className="address-container">
                <div className="user-address-info">
                    {userInfo.address
                        ? <div className="user-detail-info">
                            <p>
                            <i className="icon-phone"></i>
                            &nbsp;
                            <span>{userInfo.tel}</span>
                        </p>
                            <p>
                                <i className="icon-map-marker"></i>
                                &nbsp;
                                <span>{userInfo.address}</span>
                            </p></div>
                        : <button className="add-newAddress-btn" onClick={this.redirectToAddAddressHandle.bind(this)}>添加新地址</button>
                    }
                </div>
            </div>
        )
    }
    redirectToAddAddressHandle(){
        hashHistory.push('/addAddress');
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
)(address)