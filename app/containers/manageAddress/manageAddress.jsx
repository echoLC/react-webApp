import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from '../../components/Header/Header';

class ManageAddress extends React.Component{
    constructor(props, context){
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
        return (
            <div>
                <Header title="收货地址"/>
                <h1>管理收货地址</h1>
            </div>
        )
    }
}

export default ManageAddress