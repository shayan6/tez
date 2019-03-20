import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, SideNav, Breadcrumb, MenuItem} from 'react-materialize';
import logoWhite from '../../assets/img/tez-logo-white.png';
import '../../assets/css/header-wider-style.css';
import Grid from '@material-ui/core/Grid';

class Header extends Component {
    render() { 
        let img = <img src={logoWhite} alt="tez" height="25px" width="35px" />;
        return ( 
            <React.Fragment>
                <Navbar className='header-wider-nav' brand={img} right>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/tez_advance'>Tez Advance</Link></li>
                    <li><Link to='/more_product'>More Product</Link></li>
                    <li><Link to='/help'>Help</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </Navbar>
                <SideNav trigger={<i className="material-icons">view_headline</i>} options={{ closeOnClick: true }}></SideNav>
                {/* Grid Nav Bottom Contents */}
                <Grid container spacing={12}  className="bg-green">
                    <Grid item xs={12} sm={12} lg={12}>
                        <h3> Need Help ? </h3>
                    </Grid>
                    <Grid xs={4} sm={0} lg={0}></Grid>
                    <Grid item xs={8} sm={12} lg={12}>
                        <Breadcrumb className="breadcrumb-nav">
                            <MenuItem>Home</MenuItem>
                            <MenuItem>Help</MenuItem>
                        </Breadcrumb>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}
 
export default Header;