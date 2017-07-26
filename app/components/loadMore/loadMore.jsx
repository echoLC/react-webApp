import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './loadMore.scss'

class LoadMore extends React.Component{
    constructor(props, context){
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
        return (
            <div className="load-more" ref="loadMore">
                {this.props.isLoadingMore
                    ?<span>加载中...</span>
                    :<span onClick={this.loadMoreHandler.bind(this)}>加载更多</span>
                }
            </div>
        )
    }

    loadMoreHandler(){
        this.props.loadMoreFn();
    }

    componentDidMount(){
        //滚动时加载更多
        const loadMoreFn = this.props.loadMoreFn;
        const loadMoreEle = this.refs.loadMore;
        //定义一个放定时器的变量
        let timeId;

        function timeCallback() {
            const top = loadMoreEle.getBoundingClientRect().top;
            const windowHeight = window.screen.height;

            //当加载更多的按钮暴露在页面可视的底部时
            if (top && top < windowHeight) {
                loadMoreFn();
            }
        }

        //监听滚动事件
        window.addEventListener('scroll', function () {
            if(this.props.isLoadingMore){
                return;
            }

            if(timeId){
                clearTimeout(timeId);
            }

            timeId = setTimeout(timeCallback, 50);
        }.bind(this), false)
    }
}

export default LoadMore;