import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {getCommentData} from '../../../fetch/getCommentData'
import CommentList from '../../../components/comment-list/comment-list';
import LoadMore from '../../../components/loadMore/loadMore';
import './subpage.scss';

class Comment extends React.Component{
    constructor(props, context){
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            page: 0,
            hasMore: false,
            isLoadingMore: false,
            data: []
        }
    }
    render(){
        return (
            <div className="detail-comment-subpage">
                <h2>用户点评</h2>
                {
                    this.state.data.length
                        ? <CommentList data={this.state.data}/>
                        : <div>加载中...</div>
                }
                {
                    this.state.hasMore
                        ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/>
                        : ''
                }
            </div>
        )
    }


    loadFirstData(){
        const id = this.props.id;
        let res = getCommentData(0, id);
        this.setState({
            data: res.data,
            hasMore: res.hasMore
        })
    }

    loadMoreData(){
        const id = this.props.id;
        this.setState({
            isLoadingMore: true
        });

        let page = this.state.page;
        let res = getCommentData(page, id);

        this.setState({
            page: page + 1,
            isLoadingMore: false,
            data: this.state.data.concat(res.data),
            hasMore: res.hasMore
        })
    }

    componentDidMount(){
        this.loadFirstData();
    }
}

export default Comment