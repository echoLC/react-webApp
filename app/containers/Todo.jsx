import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Input from '../components/Input'
import List from '../components/List'

class Todo extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            todos: []
        }
    }
    render() {
        return (
            <div>
                <Input submitFn={this.submitFn.bind(this)}/>
                <List todos={this.state.todos} deleteFn={this.deleteFn.bind(this)}/>
            </div>
        )
    }
    submitFn(value) {
        const id = this.state.todos.length;
        let data = this.state.todos;
        this.setState({
            todos: data.concat({
                id: id,
                text: value
            })
        })
    }
    deleteFn(id) {
        let data = this.state.todos;
        this.setState({
            todos:data.filter((item)=>{
                if(item.id !== id){
                    return item;
                }
            })
        })
    }

    componentDidMount(){
        console.log(this.props.location.query)
    }
}

export default Todo