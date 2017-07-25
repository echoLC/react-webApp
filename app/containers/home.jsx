import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {hashHistory} from 'react-router'

class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
               <h1 onClick={this.handleClick.bind(this)}>hello world!</h1>
            </div>
        )
    }

    handleClick(){
        hashHistory.push({pathname: '/Todo', query: {id: 123}})
    }
}

export default Home
