import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, SideNav} from 'react-materialize';
import '../../assets/css/header-style.css';
import logo from '../../assets/img/tez.png';

class Header extends Component {
    
    render() { 
        let img = <img src={logo} alt="tez" height="25px" width="20px" />;
        return ( 
            <React.Fragment>
                <Navbar brand={img} fixed={true} right>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/tez_advance'>Tez Advance</Link></li>
                    <li><Link to='/more_product'>More Product</Link></li>
                    <li><Link to='/help'>Help</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </Navbar>
                <SideNav trigger={<i className="material-icons">view_headline</i>} options={{ closeOnClick: true }}></SideNav>
            </React.Fragment>
        );
    }
}
 
export default Header;