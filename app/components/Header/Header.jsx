import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './Header.scss';

class Header extends React.Component{
    constructor(props, context){
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
        return (
            <div id="common-header">
                <span onClick={this.back.bind(this)} className="back-icon">
                    <i className="icon-chevron-left"></i>
                </span>
                <h1>{this.props.title}</h1>
            </div>
            )
    }

    back(){
        window.history.back();
    }
}

export default Header