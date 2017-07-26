import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from '../../components/header/header'
import Category from '../../components/category/category'
import SubPage from  './subpage/Ad'

import { connect } from 'react-redux'

class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
               <Header cityName={this.props.userInfo.cityName}/>
                <Category/>
                <div style={{height: '15px'}}></div>
                <SubPage/>
            </div>
        )
    }


}

function mapStateToProps(state) {
    return {
        userInfo: state.userInfo
    };
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)
