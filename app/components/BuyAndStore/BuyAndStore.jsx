import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './BuyAndStore.scss';

class BuyAndStore extends React.Component{
    constructor(props, context){
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
        return (
            <div className="buy-store-container clearfix">
                <div className="item-container float-left">
                    {this.props.isStore
                        ? <button className="selected" onClick={this.clickHandle.bind(this)}>已收藏</button>
                        : <button onClick={this.clickHandle.bind(this)}>收藏</button>
                    }
                </div>
                <div className="item-container float-right">
                    <button onClick={this.buyHandle.bind(this)}>购买</button>
                </div>
            </div>
        )
    }

    clickHandle(){
        this.props.storeHandle()
    }

    buyHandle(){
        this.props.buyHandle();
    }
}

export default BuyAndStore