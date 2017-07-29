import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './SearchInput.scss'

class SearchInput extends React.Component{
    constructor(props, context){
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

        this.state = {
            value: ''
        }
    }
    render(){
        return (
            <input
                type="text"
                className="search-input"
                placeholder="请输入关键字"
                value = {this.state.value}
                onKeyUp={this.keyUpHandler.bind(this)}
                onChange={this.changeHandler.bind(this)}
            />
        )
    }

    componentDidMount(){
        this.setState({
            value: this.props.value || ''
        })
    }

    changeHandler(e){
        this.setState({
            value: e.target.value
        })
    }

    keyUpHandler(e){
        if(e.keyCode !== 13){
            return;
        }

        this.props.enterHandle(e.target.value)
    }
}

export default SearchInput