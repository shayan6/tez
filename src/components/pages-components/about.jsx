import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import imgHand from "../../assets/img/hand-mobile.png";
import imgTecTree from "../../assets/img/tec-tree.png";
import { Button } from "@material-ui/core";
import "../../assets/css/about-style.css";
import tezWallet from "../../assets/img/tez-wallet.jpg";
import Hidden from "@material-ui/core/Hidden";
import Slider from "react-slick";

// team images ############################################################
import shayan from "../../assets/img/shayan.jpg";
import nadeem from "../../assets/img/nadeem.jpg";
import humza from "../../assets/img/humza.jpg";
import naureen from "../../assets/img/naureen.jpg";
import shoaib from "../../assets/img/shoaib.jpg";
import jamal from "../../assets/img/jamal.jpg";
import shafiq from "../../assets/img/shafiq.jpg";
import adeel from "../../assets/img/adeel.jpg";
import laiba from "../../assets/img/laiba.jpg";

// imvestors images #######################################################
import planetN from "../../assets/img/investors/planet-n.png";
import omidyar from "../../assets/img/investors/omidyar.png";
import accion from "../../assets/img/investors/accion.png";

class About extends Component {
  render() {
    const styleRel = {
      fontWeight: "700",
      color: "#4caf50",
      fontSize: "14px"
    };
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 620,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    const settingsInvestors = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const tezMembers = [
      {
        srcPic: nadeem,
        name: "NADEEM HUSSAIN",
        rel: "Founder & Chief Executive Officer",
        srcLinkdin: "https://www.linkedin.com/"
      },
      {
        srcPic: naureen,
        name: "NAUREEN HYAT",
        rel: "Co-Founder & Business Head",
        srcLinkdin: "https://www.linkedin.com/"
      },
      {
        srcPic: humza,
        name: "HUMZA HUSSAIN",
        rel: "Co-Founder & Business Head",
        srcLinkdin: "https://www.linkedin.com/"
      },
      {
        srcPic: shoaib,
        name: "SHOAIB LALANI",
        rel: "Business Head",
        srcLinkdin: "https://www.linkedin.com/"
      },
      {
        srcPic: jamal,
        name: "JAMALUDDIN",
        rel: "Marketing Manager",
        srcLinkdin: "https://www.linkedin.com/"
      },
      {
        srcPic: shafiq,
        name: "SHAFIQ-UR-REHMAN",
        rel: "Finance Manager",
        srcLinkdin: "https://www.linkedin.com/"
      },
      {
        srcPic: shayan,
        name: "SHAYAN SHAIKH",
        rel: "Software Engineer",
        srcLinkdin: "https://www.linkedin.com/"
      },
      {
        srcPic: adeel,
        name: "Adeel Raees",
        rel: "IT Manager",
        srcLinkdin: "https://www.linkedin.com/in/laiba-sajid-9b642517b/"
      },
      {
        srcPic: laiba,
        name: "Laiba Sajid",
        rel: "Customer Support Executive",
        srcLinkdin: "https://www.linkedin.com/in/laiba-sajid-9b642517b/"
      }
    ];
    const tezInvestors = [
      {
        srcPic: planetN,
        name: "PLANET N",
        description:
          "Planet N Group, founded by Mr. Nadeem Hussain, is Pakistan’s largest tech-focused growth capital and incubator platform, comprising portfolio companies across Fintech, Data Analytics, AI, Blockchain, Healthtech, & Edutech. Planet N adds value to its portfolio entities via involvement in key operational areas, business consulting, cross-group synergies, international expansion facilitation and strategic partnerships.",
        srcLinkdin: "https://www.linkedin.com/"
      },
      {
        srcPic: omidyar,
        name: "OMIDYAR NETWORK",
        description:
          "One of the largest social impact investors globally. Established in 2004 by eBay founder Pierre Omidyar and his wife Pam Omidyar, ON has committed over USD 992 Million to nonprofit organizations and for-profit companies across multiple investment areas, including Consumer Internet & Mobile, Education, Financial Inclusion, Governance & Citizen Engagement, and Property Rights.",
        srcLinkdin: "https://www.linkedin.com/"
      },
      {
        srcPic: accion,
        name: "ACCION",
        description:
          "Accion International, is the largest microfinance investor and a global nonprofit organization that supports microfinance institutions to serve low-income clients. Accion has helped build 63 microfinance institutions in 32 countries. Accion Venture Lab is an investment initiative of Accion International that provides seed capital and management support to fintech start-ups.",
        srcLinkdin: "https://www.linkedin.com/"
      }
    ];
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
              style={{ margin: "auto", textAlign: "justify" }}
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
        {/* Section Tez team start *********************************************************************/}
        <section style={{ background: "rgb(242, 242, 242)" }}>
          <div className="box">
            <Grid container>
              <Grid
                item
                xs={12}
                sm={12}
                lg={12}
                style={{ textAlign: "center", padding: "3% 0" }}
              >
                <h3 style={{ fontVariantCaps: "small-caps", color: "#1c6fb5" }}>
                  Our Team
                </h3>
                <hr className="hrDividerCenter" />
                <p>
                  A team where art and science come together to create positive,
                  sustainable impact.
                </p>
              </Grid>
              <Grid item xs={12} sm={12} lg={12}>
                <Slider {...settings}>
                  {tezMembers.map((objVal, key) => (
                    <div key={key} className="perTeam">
                      <img src={objVal.srcPic} alt="example avatar" />
                      <h5>
                        <strong>{objVal.name}</strong>
                      </h5>
                      <p style={styleRel}>{objVal.rel}</p>
                      <i> Icon </i>
                    </div>
                  ))}
                </Slider>
              </Grid>
            </Grid>
          </div>
          <br />
          <br />
          <br />
          <br />
        </section>
        {/* Section Tez team end *********************************************************************/}
        {/* Section Tez investors start *********************************************************************/}
        <section>
          <div className="box">
            <Grid container>
              <Grid
                item
                xs={12}
                sm={12}
                lg={12}
                style={{ textAlign: "center", padding: "3% 0" }}
              >
                <h3 style={{ fontVariantCaps: "small-caps", color: "#1c6fb5" }}>
                  Our Investors
                </h3>
                <hr className="hrDividerCenter" />
                {/* <p>
                  A team where art and science come together to create positive,
                  sustainable impact.
                </p> */}
              </Grid>
              <Grid item xs={12} sm={12} lg={12}>
                <Slider {...settingsInvestors}>
                  {tezInvestors.map((objVal, key) => (
                    <div key={key}>
                      <Grid container className="perInvestor">
                        <Grid item xs={12} sm={6} lg={6}>
                          <h5>
                            <strong>{objVal.name}</strong>
                          </h5>
                          <p>{objVal.description}</p>
                          <i> Icon </i>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={6}>
                          <div className="imgBox">
                            <img src={objVal.srcPic} alt="example avatar" />
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                  ))}
                </Slider>
              </Grid>
            </Grid>
          </div>
          <br />
          <br />
          <br />
          <br />
        </section>
        {/* Section Tez investors end *********************************************************************/}
      </React.Fragment>
    );
  }
}

export default About;
