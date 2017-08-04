import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import DetailInfo from '../../../components/detailInfo/detailInfo';
import {getDetailInfo} from '../../../fetch/getDetailInfo';

class Info extends React.Component{
    constructor(props, context){
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            info: false
        }
    }
    render(){
        return (
            <div>
                {
                    this.state.info?<DetailInfo data={this.state.info}/>: ''
                }
            </div>
        )
    }
    componentDidMount(){
        const id = this.props.id;
        let data = getDetailInfo(id);
        this.setState({
            info:data
        });
    }
}

export default Info