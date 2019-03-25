import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import imgHand from "../../assets/img/hand-mobile.png";
import imgTecTree from "../../assets/img/tec-tree.png";
import { Button } from "@material-ui/core";
import "../../assets/css/about-style.css";
import tezWallet from "../../assets/img/tez-wallet.jpg";
import Hidden from "@material-ui/core/Hidden";
import Slider from "react-slick";


import shayan from '../../assets/img/shayan.jpg'; 
import nadeem from '../../assets/img/nadeem.jpg';
import humza from '../../assets/img/humza.png'; 
import naureen from '../../assets/img/naureen.jpg';
import shoaib from '../../assets/img/shoaib.jpg';
import jamal from '../../assets/img/jamal.jpg';
import shafiq from '../../assets/img/shafiq.jpg';

class About extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <React.Fragment>
        {/* Section Tez is revolutionizing access start *****************************************************/}
        <section style={{ background: "rgb(242, 242, 242)" }}>
          <Hidden smUp lgUp>
            <Grid item xs={12}>
              <img src={tezWallet} alt="" height="100%" width="100%" />
            </Grid>
          </Hidden>
          <Grid container>
            <Grid
              item
              xs={8}
              sm={6}
              lg={6}
              id="about-grid"
              style={{ margin: "auto", textAlign: "justify" }}
            >
              <h4 style={{ fontVariantCaps: "small-caps", color: "#1c6fb5 " }}>
                Tez is revolutionizing access to finance for the masses.
              </h4>
              <p>
                Tez is a digital financial institution that is accelerating
                access to finance across Pakistan. This means that Tez customers
                can get an instant loan of up to PKR 10,000 within a few
                minutes, all at the convenience of their own phones.
              </p>
              <Button variant="contained" color="primary">
                Open An Account
              </Button>
              <br />
              <br />
              <br />
            </Grid>
            <Hidden xsDown>
              <Grid item xs={12} sm={6} lg={6} style={{ textAlign: "right" }}>
                <img
                  src={imgHand}
                  alt="mobile in hand"
                  height="100%"
                  width="100%"
                />
              </Grid>
            </Hidden>
          </Grid>
        </section>
        {/* Section Tez is revolutionizing access end *****************************************************/}
        {/* Section Tez vision and mission start **********************************************************/}
        <section style={{ background: "#fff", padding: "5% 0" }}>
          <Grid container>
            <Grid item>
              <Grid item xs={12} sm={6} lg={6} style={{ textAlign: "right" }}>
                <img
                  src={imgTecTree}
                  id="tecTree"
                  alt="mobile in hand"
                  style={{
                    filter:
                      " grayscale(100%) brightness(40%) sepia(100%) hue-rotate(43deg) saturate(1000%) contrast(0.8)"
                  }}
                />
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              lg={6}
              style={{ color: "black", margin: "auto", textAlign: "justify" }}
              className="gridContainer"
            >
              <h3 style={{ fontVariantCaps: "small-caps", color: "#1c6fb5" }}>
                Vision <hr className="hrDivider" />{" "}
              </h3>
              <p>
                To accelerate financial inclusion by leveraging upon the power
                of digital and transcending the masses from a state of financial
                vulnerability to economic empowerment – thereby bringing
                positive, effective change.
              </p>
              <br />
              <h3 style={{ fontVariantCaps: "small-caps", color: "#1c6fb5" }}>
                Mission <hr className="hrDivider" />{" "}
              </h3>
              <p>
                To revolutionize the financial sector by providing swift and
                frictionless financial access to the unbanked and under-banked
                by aggregating credit, savings, insurance, and investments into
                a single platform – a smartphone application - thereby
                accelerating financial inclusion.{" "}
              </p>
            </Grid>
          </Grid>
        </section>
        {/* Section Tez vision and mission end *********************************************************************/}
        <section style={{ background: "rgb(242, 242, 242)" }}>
          <div className="box" style={{margin:'auto', padding:'5% 0'}}>
            <Grid container>
              <Grid item xs={12} sm={12} lg={12} style={{ textAlign: "center" }}>
                <h3>Our Team</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
                  dolore, ipsam deserunt adipisci asperiores, architecto a iste
                  deleniti ad reiciendis recusandae saepe esse? Veniam delectus
                  numquam harum. Soluta, animi sunt.
                </p><br/><br/><br/><br/>
              </Grid>
              <Grid item xs={12} sm={12} lg={12} style={{ textAlign: "center" }}>
                <Slider {...settings}>
                  <div>
                    <Grid container>
                      <Grid item xs={4} sm={4} lg={4}>
                        <div className="perTeam">
                          <img
                            src={nadeem}
                            alt="example avatar"
                          />
                          <h5 style={{fontFamily:'Open Sans'}}> 
                            <strong style={{fontWeight:'bolder'}}>
                              Nadeem Hussain 
                            </strong>
                          </h5>
                          <p style={{fontWeight:'700',color:'#007bff'}}>CEO Planet N</p>
                          <i> Icon </i>
                        </div>
                      </Grid>
                      <Grid item xs={4} sm={4} lg={4}>
                        <div className="perTeam">
                          <img
                            src={humza}
                            alt="example avatar"
                          />
                          <h5 style={{fontFamily:'Open Sans'}}> 
                            <strong style={{fontWeight:'bolder'}}>
                              Humza Hussain
                            </strong>
                          </h5>
                          <p style={{fontWeight:'700',color:'#007bff'}}>CO Founder TEZ</p>
                          <i> Icon </i>
                        </div>
                      </Grid>
                      <Grid item xs={4} sm={4} lg={4}>
                        <div className="perTeam">
                          <img
                            src={naureen}
                            alt="example avatar"
                          />
                          <h5 style={{fontFamily:'Open Sans'}}> 
                            <strong style={{fontWeight:'bolder'}}>
                              Naureen Hyat
                            </strong>
                          </h5>
                          <p style={{fontWeight:'700',color:'#007bff'}}>CO Founder TEZ</p>
                          <i> Icon </i>
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                  <div>
                    <Grid container>
                      <Grid item xs={4} sm={4} lg={4}>
                        <div className="perTeam">
                          <img
                            src={shoaib}
                            alt="example avatar"
                          />
                          <h5 style={{fontFamily:'Open Sans'}}> 
                            <strong style={{fontWeight:'bolder'}}>
                              Shoaib Lalani
                            </strong>
                          </h5>
                          <p style={{fontWeight:'700',color:'#007bff'}}></p>
                          <i> Icon </i>
                        </div>
                      </Grid>
                      <Grid item xs={4} sm={4} lg={4}>
                        <div className="perTeam">
                          <img
                            src={jamal}
                            alt="example avatar"
                          />
                          <h5 style={{fontFamily:'Open Sans'}}> 
                            <strong style={{fontWeight:'bolder'}}>
                              Jamal udin 
                            </strong>
                          </h5>
                          <p style={{fontWeight:'700',color:'#007bff'}}></p>
                          <i> Icon </i>
                        </div>
                      </Grid>
                      <Grid item xs={4} sm={4} lg={4}>
                        <div className="perTeam">
                          <img
                            src={shayan}
                            alt="example avatar"
                          />
                          <h5 style={{fontFamily:'Open Sans'}}> 
                            <strong style={{fontWeight:'bolder'}}>
                              Shayan Shaikh 
                            </strong>
                          </h5>
                          <p style={{fontWeight:'700',color:'#007bff'}}>Software Engineer</p>
                          <i> Icon </i>
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                  <div>
                    <Grid container>
                      <Grid item xs={4} sm={4} lg={4}>
                        <div className="perTeam">
                          <img
                            src={shafiq}
                            alt="example avatar"
                          />
                        </div>
                      </Grid>
                      <Grid item xs={4} sm={4} lg={4}>
                        <div className="perTeam">
                          <img
                            src={shafiq}
                            alt="example avatar"
                          />
                        </div>
                      </Grid>
                      <Grid item xs={4} sm={4} lg={4}>
                        <div className="perTeam">
                          <img
                            src={shafiq}
                            alt="example avatar"
                          />
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                </Slider>
                <br />
                <br />
                <br />
                <br />
              </Grid>
            </Grid>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default About;
