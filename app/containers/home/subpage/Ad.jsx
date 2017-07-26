import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './subpage.scss'
import HomeSub from '../../../components/home-sub/homeSub'
import { getAdData } from '../../../fetch/home'

class SubPage extends React.Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: []
        }
    }
    render(){
        return (
            <div>
                {this.state.data.length?<HomeSub data={this.state.data}/>:<div>加载中...</div>}
            </div>
        )
    }

    componentDidMount(){
        let result = getAdData();
        this.setState({
            data: result
        })
    //     result.then((res)=>{
    //         return res.json();
    //     }).then((data)=>{
    //         if(data.length){
    //             this.setState({
    //                 data: data
    //             })
    //         }
    //     }).catch((err)=>{
    //         if (__DEV__){
    //             console.error('获取广告数据错误', err.message);
    //         }
    //     })
    }
}

export default SubPage