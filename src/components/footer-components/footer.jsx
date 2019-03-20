import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Icon } from "react-materialize";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import "../../assets/css/footer-style.css";

class FooterComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <footer className="page-footer footer">
          <div className="container">
            <Grid container>
                <Grid item xs={12} sm={4} lg={4}>
                    <img id="imgFooter" src={this.props.tezLogo} alt="tez" />
                    <h6 className="text-uppercase mb-4 font-weight-bold">A Planet N Company</h6>
                </Grid>
                <Grid item xs={7} sm={5} lg={5}>
                    <ul className="footerContact" >
                        <Hidden smDown><li><h5>Contact</h5></li></Hidden>
                        <li><Icon>location_city</Icon>Karachi, Pakistan</li>
                        <li><Icon>mail</Icon>info@tezfinancialservices.pk</li>
                        <li><Icon>smartphone</Icon>+92-423-832-9614</li>
                        <li><Icon>smartphone</Icon>+92-321-135-4854</li>
                    </ul>
                </Grid>
                <Grid item xs={5} sm={3} lg={3}>
                    <ul className="footerLink">
                        <li><Link className="blue-text" to="/about">About</Link></li>
                        <li><Link className="blue-text" to="/about">Press</Link></li>
                        <li><Link className="blue-text" to="/about">Career</Link></li>
                        <li><Link className="blue-text" to="/about">Privacy Policy</Link></li>
                        <li><Link className="blue-text" to="/about">Site Map</Link></li>
                        <li><Link className="blue-text" to="/about">Terms & Conditions</Link></li>
                    </ul>
                </Grid>
            </Grid>
          </div>
          <div className="footer-copyright">
            <div className="container">
              &amp;copy 2015 Copyright Text
              <a className="blue-text right" href="#!">
                More Links
              </a>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default FooterComponent;
