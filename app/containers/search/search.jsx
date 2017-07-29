import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import SearchHeader from './SearchHeader/SearchHeader';

class Search extends React.Component{
    constructor(props, context){
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
        const params = this.props.params
        return (
            <div>
                <SearchHeader keyword={params.keyword}/>
                <h1>搜索结果页</h1>
            </div>
        )
    }
}

export default Search