import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, SideNav, Breadcrumb, MenuItem } from "react-materialize";
import logoWhite from "../../assets/img/tez-logo-white.png";
import "../../assets/css/header-wider-style.css";
import Grid from "@material-ui/core/Grid";

class Header extends Component {
  render() {
    let img = (
      <img
        className="mobile-tez-logo"
        src={logoWhite}
        alt="tez"
        style={{ position: "absolute", top: "10px" }}
      />
    );
    return (
      <React.Fragment>
        <Navbar className="header-wider-nav" brand={img} right>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/tez_advance">Tez Advance</Link>
          </li>
          <li>
            <Link to="/more_product">More Products</Link>
          </li>
          <li>
            <Link to="/help">Help</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </Navbar>
        <SideNav
          trigger={<i className="material-icons">view_headline</i>}
          options={{ closeOnClick: true }}
        />
        {/* Grid Nav Bottom Contents */}
        <Grid container className="bg-green">
          <Grid item xs={12} sm={12} lg={12}>
            <h3 style={{ fontVariant: "petite-caps" }}> Facing Any Issue ? </h3>
          </Grid>
          <Grid item xs={4} sm={1} lg={1} />
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
