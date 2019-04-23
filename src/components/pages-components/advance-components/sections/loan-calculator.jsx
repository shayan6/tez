import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import CustomerTestimonial from './customer-testimonial';

class LoanCalculator extends Component {
  state = {
    loanAmount: 5000,
    processFree: 0.13,
    loanTenure: [
      { tenure: "Week 1", fee: 0.13, variant: "contained" },
      { tenure: "Week 2", fee: 0.15, variant: "outlined" },
      { tenure: "Week 3", fee: 0.18, variant: "outlined" },
      { tenure: "Week 4", fee: 0.2, variant: "outlined" }
    ]
  };
  handleAmountPlus = () => {
    if (this.state.loanAmount < 10000 && this.state.loanAmount >= 1000)
      this.setState({
        loanAmount: this.state.loanAmount + 500
      });
  };
  handleAmountMinus = () => {
    if (this.state.loanAmount <= 10000 && this.state.loanAmount > 1000)
      this.setState({
        loanAmount: this.state.loanAmount - 500
      });
  };
  handleProcessFee = (processFree, key) => {
    this.setState({
      processFree,
      loanTenure: this.state.loanTenure.map((el, index) =>
        index === key
          ? {
              tenure: el.tenure,
              fee: processFree,
              variant: "contained"
            }
          : {
              tenure: el.tenure,
              fee: el.fee,
              variant: "outlined"
            }
      )
    });
  };

  currency = value => value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  render() {
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
                <Icon color="primary" onClick={this.handleAmountMinus}>
                  remove_circle
                </Icon>
                &nbsp; { "PKR " + this.currency(this.state.loanAmount)}
                &nbsp;
                <Icon color="primary" onClick={this.handleAmountPlus}>
                  add_circle
                </Icon>
              </h5>
              <br />
              <br />
              <p> Loan Tenure </p>
              <div className="tenureButtons">
                {this.state.loanTenure.map((el, key) => (
                  <Button
                    key={key}
                    variant={el.variant}
                    color={el.variant === "contained" ? "primary" : "default"}
                    style={{
                      background:
                        el.variant === "contained"
                          ? "rgb(28, 111, 181)"
                          : "white"
                    }}
                    onClick={() => this.handleProcessFee(el.fee, key)}
                  >
                    {el.tenure}
                  </Button>
                ))}
              </div>
              <div className="amountToReturn">
                <p>Amount To Return</p>
                <h6>
                  &nbsp; PKR{" "}
                  {this.currency(
                    this.state.loanAmount +
                      this.state.loanAmount * this.state.processFree
                  )}
                  &nbsp;
                </h6>
              </div>
            </Grid>
          </Grid>
        </section>
          <CustomerTestimonial style={{ textWhite, boldHR }} />
      </React.Fragment>
    );
  }
}

export default LoanCalculator;
