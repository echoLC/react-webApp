import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Link, hashHistory} from 'react-router'
import SearchInput from '../SearchInput/SearchInput'

import './header.scss'

class HomeHeader extends React.Component{
    constructor(props, context){
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render(){
        return (
            <div id="home-header" className="clearfix">
                <div className="home-header-left float-left">
                    <Link to="/city">
                        <span>{this.props.cityName}</span>
                        &nbsp;
                        <i className="icon-angle-down"></i>
                    </Link>
                </div>
                <div className="home-header-right float-right">
                    <i className="icon-user"></i>
                </div>
                <div className="home-header-middle">
                    <div className="search-container">
                        <i className="icon-search"></i>
                        <SearchInput value="" enterHandle={this.enterHandle.bind(this)}/>
                    </div>
                </div>
            </div>
        )
    }

    enterHandle(value){
        hashHistory.push('/search/all/' + encodeURIComponent(value));
    }
}

export default HomeHeader;