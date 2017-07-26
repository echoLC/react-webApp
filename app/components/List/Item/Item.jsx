import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './Item.scss'


class Item extends React.Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
        const data = this.props.item;
        return (
            <div className="list-item clearfix">
                <div className="item-img-container float-left">
                    <img src={data.img} alt={data.title}/>
                </div>
                <div className="item-content">
                    <div className="item-title-container clearfix">
                        <h3 className="float-left">{data.title}</h3>
                        <span className="float-right">{data.distance}</span>
                    </div>
                    <p className="item-sub-title">
                        {data.subTitle}
                    </p>
                    <div className="item-price-container clearfix">
                        <span className="price float-left">￥{data.price}</span>
                        <span className="number float-right">已售{data.number}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Item