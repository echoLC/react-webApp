import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'

import ListComponent from '../../../components/List/List'
import LoadMoreComponent from '../../../components/loadMore/loadMore'

import {getSearchData} from '../../../fetch/home'

// 初始化一个组件的 state
const initialState = {
    data: [],
    hasMore: false,
    isLoadingMore: false,
    page: 0
}

class SearchList extends React.Component{
    constructor(props, context){
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = initialState;
    }
    render(){
        return (
            <div>
                {
                    this.state.data.length
                        ? <ListComponent list={this.state.data}/>
                        : <div>加载中...</div>
                }
                {
                    this.state.hasMore
                        ? <LoadMoreComponent isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/>
                        : ''
                }
            </div>
        )
    }

    componentDidMount(){
        // 获取首页数据
        this.loadFirstPageData()
    }

    loadFirstPageData(){
        const cityName = this.props.userInfo.cityName;
        const keyword = this.props.keyword || '';
        const category = this.props.category;
        const result = getSearchData(0, cityName, category, keyword);
        this.setState({
            data: this.state.data.concat(result.data),
            hasMore: result.hasMore
        });
    }

    loadMoreData(){
        this.setState({
            isLoadingMore: true
        });

        let page = this.state.page;
        const cityName = this.props.userInfo.cityName;
        const keyword = this.props.keyword || '';
        const category = this.props.category;

        let list = getSearchData(0, cityName, category, keyword);

        // 增加 page 计数
        this.setState({
            page: page + 1,
            isLoadingMore: false,
            data: this.state.data.concat(list.data),
            hasMore: list.hasMore
        })
    }

    componentDidUpdate(prevProps, prevState){
        const keyword = this.props.keyword;
        const category = this.props.category;

        if(keyword === prevProps.keyword && category === prevProps.category){
            return;
        }

        //重置state
        this.setState(initialState);

        //重新加载数据
        this.loadFirstPageData();
    }
}

function mapStateToProps(state) {
    return {
        userInfo: state.userInfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchList)