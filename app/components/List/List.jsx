import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Item from './Item/Item'

import './List.scss';

class List extends React.Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
        const data = this.props.list;
        return (
            <div className="list-container">
                {data.map((item, index)=>{
                    return <Item item={item} key={index}/>
                })}
            </div>
        )
    }
}

export default List