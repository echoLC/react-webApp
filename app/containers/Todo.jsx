import React from 'react'

import Input from '../components/Input'
import List from '../components/List'

class Todo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            todos: []
        };
        this.deleteFn = this.deleteFn.bind(this);
        this.submitFn = this.submitFn.bind(this);
    }

    render(){
        return (
            <div>
                <Input submitFn={this.submitFn}/>
                <List todos={this.state.todos} deleteFn={this.deleteFn}/>
            </div>
        )
    }

    submitFn(value){
        const id = this.state.todos.length;
        let todos = this.state.todos;
        todos.push({id: id, text: value});

        this.setState({
            todos: todos
        })
    }

    deleteFn(index){
        let data = this.state.todos;
        data.splice(index, 1);
        this.setState({
            todos: data
        })
    }
}

export default Todo;