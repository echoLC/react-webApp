import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import OrderList from '../../../components/orderList/OrderList';
import {getOrderList} from '../../../fetch/getOrderList';
import {postComment}from '../../../fetch/postComment';
import './Order.scss';

class Order extends React.Component{
    constructor(props, context){
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: []
        }
    }
    render(){
        return (
            <div className="order-list-container">
                <h2>您的订单</h2>
                {
                    this.state.data.length
                        ? <OrderList data={this.state.data} submitComment={this.submitComment.bind(this)}/>
                        :''
                }
            </div>
        )
    }

    componentDidMount(){
        const username = this.props.username;
        if(username){
            this.loadOrderListData(username)
        }
    }

    loadOrderListData(username){
        let orderList = getOrderList(username);
        this.setState({
            data: orderList
        })
    }

    submitComment(id, comment, callback){
        const result = postComment(id, comment);
        if(result.errorCode === 0){
            //评价成功
            callback()
        }
    }
}

export default Order;