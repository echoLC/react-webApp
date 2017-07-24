import React from 'react'

class Input extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: ''
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.keyUpHandler = this.keyUpHandler.bind(this);
    }
    
    render(){
        return (
            <input type="text"
                   style={{width: '100%', height: '40px', fontSize: '35px'}}
                    value = {this.state.value}
                   onChange={this.changeHandler}
                   onKeyUp={this.keyUpHandler}
            />
        )
    }

    changeHandler(e){
        //实时同步数据
        this.setState({
            value: e.target.value
        })
    }

    keyUpHandler(e){
        const value = this.state.value;
        if(e.keyCode === 13 && value.trim()){
            //提交并清空数据
            this.props.submitFn(value);
            this.setState({value: ''});
        }
    }
}

export default Input;