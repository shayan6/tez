import React, { Component } from "react";
import { Parallax } from "react-materialize";
import Grid from "@material-ui/core/Grid";
class MoreProduct extends Component {
  render() {
    return (
      <React.Fragment>
        <section>
          <Parallax imageSrc="https://www.solarsystemscope.com/textures/download/2k_stars.jpg" />
        </section>
        <section>
          <Grid container>
            <Grid item xs={12} sm={7} lg={7} />
            <Grid item xs={12} sm={5} lg={5}>
              <div className="boxRight">
                <ul className="advanceUL">
                  <li>
                    <p>
                      Fill in a few details, to get your unique credit limit.
                    </p>
                  </li>
                  <li>
                    <p>
                      Instant Approval to take loan of PKR 1,000 to PKR 10,000
                    </p>
                  </li>
                  <li>
                    <p>A Fixed Charges, No Compounding Interest!</p>
                  </li>
                  <li>
                    <p>
                      Choose to conveniently repay between 1 week to 4 weeks
                    </p>
                  </li>
                  <li>
                    <p>Privacy Guaranteed</p>
                  </li>
                </ul>
              </div>
            </Grid>
          </Grid>
        </section>
      </React.Fragment>
    );
  }
}

export default MoreProduct;
