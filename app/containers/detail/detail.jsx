import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from '../../components/Header/Header';
import Info from './subpage/info';
import Comment from './subpage/comment';
import Buy from './subpage/buy';

class Detail extends React.Component{
    constructor(props, context){
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
        const id = this.props.params.id;
        return (
            <div>
                <Header title="详情页"/>
                <Info id={id}/>
                <Buy id={id}/>
                <Comment id={id}/>
            </div>
        )
    }
}

export default Detail