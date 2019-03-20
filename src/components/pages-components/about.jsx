import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import imgHand from "../../assets/img/hand-mobile.png";
import imgTecTree from "../../assets/img/tec-tree.png";
import { Button } from "@material-ui/core";
import "../../assets/css/about-style.css";
import tezWallet from "../../assets/img/tez-wallet.jpg";
import Hidden from "@material-ui/core/Hidden";

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <section style={{ background: "rgb(242, 242, 242)" }}>
          <Hidden smUp lgUp>
            <Grid item xs={12}>
              <img src={tezWallet} alt="" height="100%" width="100%" />
            </Grid>
          </Hidden>
          <Grid container spacing={16}>
            <Grid
              item
              xs={8}
              sm={6}
              lg={6}
              id="about-grid"
              style={{ margin: "auto", textAlign: "justify" }}
            >
              <h4 style={{ fontVariantCaps: "small-caps" }}>
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
              </Button><br/><br/><br/>
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
        <section style={{background:'#fff', padding:'5% 0'}} >
          <Grid container>
            <Grid item >
              <Grid item xs={12} sm={6} lg={6} style={{ textAlign: "right" }}>
                <img
                  src={imgTecTree}
                  alt="mobile in hand"
                  height="300px"
                  width="350px"
                  style={{filter:'brightness(0%)'}}
                />
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6} lg={6} style={{color:'black', margin:'auto', textAlign: "justify"}} className="gridContainer" >
                <h3 style={{ fontVariantCaps: "small-caps" }}>Vision</h3>
                <p>To accelerate financial inclusion by leveraging upon the power of digital and transcending the masses from a state of financial vulnerability to economic empowerment – thereby bringing positive, effective change.</p>
                <br/>
                <h3 style={{ fontVariantCaps: "small-caps" }}>Mission</h3>
                <p>To revolutionize the financial sector by providing swift and frictionless financial access to the unbanked and under-banked by aggregating credit, savings, insurance, and investments into a single platform – a smartphone application - thereby accelerating financial inclusion. </p>
            </Grid>
          </Grid>
        </section>
      </React.Fragment>
    );
  }
}

export default About;
