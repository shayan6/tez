import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Icon } from "react-materialize";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import "../../assets/css/footer-style.css";

import fbImg from '../../assets/img/fb.png';
import instaImg from '../../assets/img/insta.png';
import tweetImg from '../../assets/img/tweet.png';
import inImg from '../../assets/img/in.png';
import playImg from '../../assets/img/play.png';

class FooterComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <footer className="page-footer footer">
          <div className="footer-container">
            <Grid container>
              <Grid container xs={12} sm={12} lg={7} >
                  <Grid item xs={12} sm={4} lg={4}>
                      <img id="imgFooter" src={this.props.tezLogo} alt="tez" />
                      <h6 className="text-uppercase mb-4 font-weight-bold">A Planet N Company</h6>
                      <img src={playImg} alt="google play" height="60px" />
                  </Grid>
                  <Grid item xs={6} sm={4} lg={4}>
                    <ul className="footerContact" >
                        <Hidden smDown><li><h5>Contact</h5></li></Hidden>
                        <li><Icon>location_city</Icon>Karachi, Pakistan</li>
                        <li><Icon>mail</Icon>info@tezfinancialservices.pk</li>
                        <li><Icon>smartphone</Icon>+92-423-832-9614</li>
                        <li><Icon>smartphone</Icon>+92-321-135-4854</li>
                    </ul>
                  </Grid>
                  <Grid item  xs={6} sm={4} lg={4}>
                    <ul className="footerLink">
                        <Hidden smDown><li><h5>Links</h5></li></Hidden>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/about">Press</Link></li>
                        <li><Link to="/about">Career</Link></li>
                        <li><Link to="/about">Privacy Policy</Link></li>
                        <li><Link to="/about">Site Map</Link></li>
                        <li><Link to="/about">Terms & Conditions</Link></li>
                    </ul>
                  </Grid>
                </Grid>
                <Hidden smDown>
                  <Grid container sm={12} lg={5} className="footerJoinUs">
                      <Grid item sm={6} lg={6} style={{textAlign:'right', paddingRight:'5%' }}>
                        <h4>Join Us:</h4>
                      </Grid>
                      <Grid item sm={6} lg={6} >
                        <img src={fbImg} alt="fb" />
                        <img src={instaImg} alt="fb" />
                        <img src={inImg} alt="fb" />
                        <img src={tweetImg} alt="fb" />
                      </Grid>
                  </Grid>
                </Hidden>
            </Grid>
          </div>
          <div className="footer-copyright" style={{background: '#4caf50'}}>
            <div className="container">
              &amp;copy 2019 Copyright Text
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
