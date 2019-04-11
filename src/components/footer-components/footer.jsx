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

    let onLinkClick = () => {
      window.scrollTo(0, 0);
    }

    return (
      <React.Fragment>
        <footer className="page-footer footer">
          <div className="footer-container">
            <Grid container>
              <Grid item xs={12} sm={12} lg={8}>
                <Grid container>
                  
                  {/* Tez Image Footer Grid ############################################# */}
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

                  {/* Contact Detail Footer Grid ############################################# */}
                  <Grid item xs={6} sm={4} lg={4}>
                    <ul className="footerContact">
                      <Hidden smDown>
                        <li>
                          <h5>Contact</h5>
                        </li>
                      </Hidden>
                      {[
                        { icon: "location_city", html: "Karachi, Pakistan" },
                        { icon: "mail", html: "info@tezfinancialservices.pk" },
                        { icon: "smartphone", html: "+92-423-832-9614" },
                        { icon: "smartphone", html: "+92-321-135-4854" }
                      ].map((el, key) => (
                        <li key={key}>
                          <Icon>{el.icon}</Icon>
                          {el.html}
                        </li>
                      ))}
                    </ul>
                  </Grid>
                  
                  {/* Links Footer Grid ############################################# */}
                  <Grid item xs={6} sm={4} lg={4}>
                    <ul className="footerLink">
                      <Hidden smDown>
                        <li>
                          <h5>Links</h5>
                        </li>
                      </Hidden>
                      {[
                        { link: "/about", html: "About" },
                        { link: "/about", html: "Press" },
                        { link: "/career", html: "Career" },
                        { link: "/career", html: "Privacy Policy" },
                        { link: "/about", html: "Site Map" },
                        { link: "/about", html: "Terms & Conditions" }
                      ].map((el, key) => (
                        <li key={key} onClick={onLinkClick}>
                          <Link to={el.link}>{el.html}</Link>
                        </li>
                      ))}
                    </ul>
                  </Grid>
                </Grid>
              </Grid>

              {/* Join Us Footer Grid ############################################# */}
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
