import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as userinfoActions from '../actions/userinfo'

import A from '../components/A'
import B from '../components/B'
import C from '../components/C'

class Hello extends React.Component{
    render(){
        return (
            <div>
                <h1>Hello,World</h1>
                <hr/>
                <A userInfo={this.props.userInfo}/>
                <B userInfo={this.props.userInfo}/>
                <C actions={this.props.userinfoActions}/>
            </div>
        )
    }

    componentDidMount(){
        this.props.userinfoActions.login({
             userId: 'abc',
             city: 'beijing'
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
        userinfoActions: bindActionCreators(userinfoActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Hello)

