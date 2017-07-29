import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './CityList.scss'

class CityList extends React.Component{
    constructor(props, context){
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
        const cityList = [
            {name: '北京'},
            {name: '上海'},
            {name: '广州'},
            {name: '深圳'},
            {name: '杭州'},
            {name: '厦门'},
            {name: '长沙'},
            {name: '西安'},
            {name: '天津'},
            {name: '重庆'},
            {name: '武汉'},
            {name: '苏州'},
        ];
        return (
            <div className="city-list-container">
                <h3>热门城市</h3>
                <ul className="clearfix">
                    {
                        cityList.map((item, index)=>{
                            return (
                                <li key={index}><span onClick={this.changeCityHandler.bind(this, item.name)}>{item.name}</span></li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }

    changeCityHandler(newCity){
        const changeFn = this.props.changeFn;
        changeFn(newCity)
    }
}

export default CityList