import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class NoteFound extends React.Component{
    constructor(props, context){
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
        return <h1>404,没有该页面！</h1>
    }
}

export default NoteFound