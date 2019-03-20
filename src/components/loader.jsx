import React, { Component } from 'react';
import '../assets/css/loader-style.css';
import loadingImg from '../assets/img/tez-loader.gif';

class Loader extends Component {
    render() { 
        let styleLoader = {
            display : this.props.isLoading ? 'block' : 'none'
        } 
        return ( 
            <div id="preloader" style={styleLoader}>
                <div id="tez-loader">
                    <img src={loadingImg}  alt="Loading..." />
                </div>
            </div> 
        );
    }
}
 
export default Loader;