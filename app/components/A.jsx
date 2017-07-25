import React from 'react'

class A extends React.Component{
    render(){
        return (
            <p>{this.props.userInfo.userId}</p>
        )
    }
}

export default A