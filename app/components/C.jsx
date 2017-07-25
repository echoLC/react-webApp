import React from 'react'

class C extends React.Component{
    render(){
        return(
            <button onClick={this.changeUserInfo.bind(this)}>修改</button>
        )
    }

   changeUserInfo(){
        const action = this.props.actions;

        action.login({
            userId: '123',
            city: 'guangzhou'
        })
    }
}

export default C