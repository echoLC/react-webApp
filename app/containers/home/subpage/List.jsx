import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import List from '../../../components/List/List'
import {getListData} from '../../../fetch/home'
import LoadMore from '../../../components/loadMore/loadMore'

import './subpage.scss'

class HomeList extends React.Component{
    constructor(props, context){
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            list: [],
            hasMore: false,
            isLoadingMore: false,
            page: 1
        }
    }
    render(){
        return (
            <div>
                <h2 className="home-list-title">猜你喜欢</h2>
                {this.state.list.length?<List list={this.state.list}/>:<div>加载中...</div>}
                {this.state.hasMore?<LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMore.bind(this)}/>:''}
            </div>
            )
    }

    componentDidMount(){
        let page = 0;
        this.loadListData(page);
    }

    loadListData(page){
        const list = getListData(page);
        this.setState({
            list: this.state.list.concat(list.data),
            hasMore: list.hasMore
        });
    }

    //加载更多数据
    loadMore(){

        this.setState({
            isLoadingMore: true
        });

        let page = this.state.page;

        let list = getListData(page);

        // 增加 page 计数
        this.setState({
            page: page + 1,
            isLoadingMore: false,
            list: this.state.list.concat(list.data),
            hasMore: list.hasMore
        })
    }
}

export default HomeList