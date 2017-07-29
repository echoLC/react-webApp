import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'

import Header from '../../components/Header/Header';
import CurrentCity from './CurrentCity/CurrentCity';
import CityList from './CityList/CityList';

import * as userInfoActionsFromOtherFile from '../../actions/userinfo'
import { CITYNAME } from '../../config/localStoreKey'
import localStore from '../../util/localStore'

class City extends React.Component{
    constructor(props, context){
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
        return (
            <div>
                <Header title="选择城市"/>
                <CurrentCity cityName={this.props.userInfo.cityName}/>
                <CityList changeFn={this.changeCity.bind(this)}/>
            </div>
            )
    }

    changeCity(newCity){
        if(newCity == null){
            return;
        }

        //修改redux
        const userInfo = this.props.userInfo;
        userInfo.cityName = newCity;
        this.props.userInfoActions.update(userInfo);

        //修改storage
        localStore.setItem(CITYNAME, newCity);

        //跳转页面
        hashHistory.push('/');
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
)(City)