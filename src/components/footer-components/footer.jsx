import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Icon } from "react-materialize";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import "../../assets/css/footer-style.css";

class FooterComponent extends Component {
  render() {
    let {
      tezLogoBlue,
      fbImg,
      inImg,
      tweetImg,
      playImg
    } = this.props.footerContent;
    return (
      <React.Fragment>
        <footer
          className="page-footer footer"
          // style={{ backgroundImage: `url(${brickImg})` }}
        >
          <div className="footer-container">
            <Grid container>
              <Grid item xs={12} sm={12} lg={8}>
                <Grid container>
                  <Grid item xs={12} sm={4} lg={4} className="footer-img">
                    <img id="imgFooter" src={tezLogoBlue} alt="tez logo" />
                    <h6
                      className="text-uppercase mb-4 font-weight-bold"
                      style={{ fontSize: "13px" }}
                    >
                      A Planet N Company
                    </h6>
                    <img src={playImg} alt="google play" height="46px" />
                  </Grid>
                  <Grid item xs={6} sm={4} lg={4}>
                    <ul className="footerContact">
                      <Hidden smDown>
                        <li>
                          <h5>Contact</h5>
                        </li>
                      </Hidden>
                      <li>
                        <Icon>location_city</Icon>Karachi, Pakistan
                      </li>
                      <li>
                        <Icon>mail</Icon>info@tezfinancialservices.pk
                      </li>
                      <li>
                        <Icon>smartphone</Icon>+92-423-832-9614
                      </li>
                      <li>
                        <Icon>smartphone</Icon>+92-321-135-4854
                      </li>
                    </ul>
                  </Grid>
                  <Grid item xs={6} sm={4} lg={4}>
                    <ul className="footerLink">
                      <Hidden smDown>
                        <li>
                          <h5>Links</h5>
                        </li>
                      </Hidden>
                      <li>
                        <Link to="/about#">About</Link>
                      </li>
                      <li>
                        <Link to="/about">Press</Link>
                      </li>
                      <li>
                        <Link to="/about">Career</Link>
                      </li>
                      <li>
                        <Link to="/about">Privacy Policy</Link>
                      </li>
                      <li>
                        <Link to="/about">Site Map</Link>
                      </li>
                      <li>
                        <Link to="/about">Terms & Conditions</Link>
                      </li>
                    </ul>
                  </Grid>
                </Grid>
              </Grid>
              <Hidden smDown>
                <Grid item sm={12} lg={4} className="footerJoinUs">
                  <Grid container>
                    <Grid
                      item
                      sm={6}
                      lg={12}
                      style={{ textAlign: "center", paddingRight: "5%" }}
                    >
                      <h5>Join Our Community</h5>
                    </Grid>
                    <Grid item sm={6} lg={12} style={{ textAlign: "center" }}>
                      <img src={fbImg} alt="fb" />
                      <img src={inImg} alt="fb" />
                      <img src={tweetImg} alt="fb" />
                    </Grid>
                  </Grid>
                </Grid>
              </Hidden>
            </Grid>
          </div>
          <div className="footer-copyright">
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
