import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, SideNav } from "react-materialize";
import "../../assets/css/header-style.css";
import logo from "../../assets/img/tez-blue.png";

class Header extends Component {
  render() {
    let img = (
      <div>
        <img src={logo} className="headerLogo" alt="tez" />
      </div>
    );

    let onLinkClick = () => {
      window.scrollTo(0, 0);
    };

    return (
      <React.Fragment>
        <Navbar brand={img} fixed={true} right>
          {[
            { link: "/", html: "Home" },
            { link: "/tez_advance", html: "Tez Advance" },
            { link: "/more_product", html: "More Products" },
            { link: "/help", html: "Help" },
            { link: "/contact", html: "Contact" },
          ].map((el, key) => (
            <li key={key} onClick={onLinkClick}>
              <Link to={el.link}>{el.html}</Link>
            </li>
          ))}
        </Navbar>
        <SideNav
          trigger={<i className="material-icons">view_headline</i>}
          options={{ closeOnClick: true }}
        />
      </React.Fragment>
    );
  }
}

export default Header;
