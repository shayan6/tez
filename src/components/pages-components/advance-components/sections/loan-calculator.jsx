import React from "react";
import Grid from "@material-ui/core/Grid";
import bgWhite from "../../../../assets/img/background/bg-white.png";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";

function LoanCalculator(props) {
  //each bold HR CSS ##########################################################
  const boldHR = {
    left: "0",
    right: "0",
    top: "86%",
    width: "33%",
    height: "10px",
    border: "0px"
  };

  const textWhite = {
    backgroundColor: "#3cce89",
    color: "white",
    // fontVariant: "small-caps",
    textAlign: "center",
    fontWeight: "700"
  };

  return (
    <React.Fragment>
      <section>
        <Grid container>
          <Grid
            item
            xs={12}
            sm={5}
            lg={5}
            style={{
              ...textWhite
            }}
          >
            <div className="boxLeft">
              <p> Tez Financial Services Gives You An Instant Loan Upto </p>
              <h5> PKR 10,000! </h5>
              <hr style={{ ...boldHR, backgroundColor: "#ffffff" }} />
              <ul className="advanceUL">
                <li>
                  <p>Fill in a few details, to get your unique credit limit.</p>
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
                  <p>Choose to conveniently repay between 1 week to 4 weeks</p>
                </li>
                <li>
                  <p>Privacy Guaranteed</p>
                </li>
              </ul>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            sm={7}
            lg={7}
            className="loanCal"
            style={{ textAlign: "center" }}
          >
            <h5 className="colorBlack"> LOAN CALCULATOR </h5>
            <br />
            <p> Loan Amount </p>
            <h5 className="colorBlack">
              <Icon color="primary">remove_circle</Icon>
              &nbsp; PKR 5,000 &nbsp;
              <Icon color="primary">add_circle</Icon>
            </h5>
            <br />
            <br />
            <p> Loan Tenure </p>
            <div className="tenureButtons">
              <Button variant="contained" color="primary">
                Week1
              </Button>
              <Button variant="outlined">Week2</Button>
              <Button variant="outlined">Week3</Button>
              <Button variant="outlined">Week4</Button>
            </div>
            <div
              style={{
                background: "#1c6fb5",
                color: "white",
                borderRadius: "10px",
                padding: "1%"
              }}
            >
              <p>Amount To Return</p>
              <h6>&nbsp; PKR 6,000 &nbsp;</h6>
            </div>
          </Grid>
        </Grid>
      </section>
      <section>
        <Grid container>
          <Grid
            item
            xs={12}
            sm={7}
            lg={7}
            style={
              {
                //   backgroundImage: `url(${bgWhite})`
              }
            }
          >
            {/* <h2>tes</h2> */}
          </Grid>
          <Grid
            item
            xs={12}
            sm={5}
            lg={5}
            style={{
              ...textWhite
            }}
          >
            <div className="boxRight">
              <p style={{ lineHeight: "0" }}> IMPORTANT </p>
              <h5 style={{ lineHeight: "1" }}> SECURITY MEASURES </h5>
              <p style={{ lineHeight: "0" }}> TO REMEMBER </p>
              <hr style={{ ...boldHR, backgroundColor: "#ffffff" }} />
              <ul className="advanceUL">
                <li>
                  <p>Fill in a few details, to get your unique credit limit.</p>
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
                  <p>Choose to conveniently repay between 1 week to 4 weeks</p>
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

export default LoanCalculator;
