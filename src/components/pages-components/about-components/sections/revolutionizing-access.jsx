import React from 'react';
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";

function RevolutionizingAccess(props){
    return (
       <section style={{ background: "rgb(242, 242, 242)" }}>
          <Hidden smUp lgUp>
            <Grid item xs={12}>
              <img src={props.tezWallet} alt="" height="100%" width="100%" />
            </Grid>
          </Hidden>
          <Grid container>
            <Grid
              item
              xs={8}
              sm={6}
              lg={6}
              id="about-grid"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
              style={{ margin: "auto", textAlign: "justify" }}
            >
              <h4 style={{ fontVariantCaps: "small-caps", color: "#1c6fb5 " }}>
                Tez is revolutionizing access to finance for the masses.
              </h4>
              <p className="colorGrey">
                Tez is a digital financial institution that is accelerating
                access to finance across Pakistan. This means that Tez customers
                can get an instant loan of up to PKR 10,000 within a few
                minutes, all at the convenience of their own phones.
              </p>
              <Button variant="contained" color="primary" style={{background:'rgb(28, 111, 181)'}}>
                Open An Account
              </Button>
              <br />
              <br />
              <br />
            </Grid>
            <Hidden xsDown>
              <Grid item xs={12} sm={6} lg={6} style={{ textAlign: "right" }}>
                <img
                  src={props.imgHand}
                  alt="mobile in hand"
                  height="100%"
                  width="100%"
                />
              </Grid>
            </Hidden>
          </Grid>
        </section>
    );
}

export default RevolutionizingAccess;