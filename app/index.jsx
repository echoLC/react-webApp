import React from 'react'
import { render } from 'react-dom'
// import { Provider } from 'react-redux'
// import { hashHistory } from 'react-router'
// import configureStore from './store/configureStore'

// import './static/css/common.less'

// import RouteMap from './router/routeMap'
//
// import { testFetch } from './fetch/test.js'
// testFetch();

// 创建 Redux 的 store 对象
// const store = configureStore()
class Hello extends React.Component {
    render () {
        return (
            <h1>Hello, world!</h1>
        )
    }
}

class Lock extends  React.Component {
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount(){
        this.timeId = setInterval(
            ()=> this.tick(),
            1000
        )
    }

    componentWillUnmount(){
        clearInterval(this.timeId);
    }

    tick(){
        this.setState({
            date: new Date()
        })
    }

    render(){
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}

function Welcome(props) {
    return <h1>hello, {props.name}</h1>
}

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // 这个绑定是必要的，使`this`在回调中起作用
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

function List(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((item)=>{
       return <li key={item.toString()}>{item}</li>
    });

    return (
        <ul>{listItems}</ul>
    );
}

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({value: e.target.value})
    }

    handleSubmit(e){
        alert(`a name was submitted:${this.state.value}`);
        e.preventDefault();
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

const numbers = [1,2,3,4,5];



const ele = <Form/>

render(
    ele,
    document.getElementById('root')
)
