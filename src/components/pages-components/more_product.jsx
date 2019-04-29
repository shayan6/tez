import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import "../../assets/css/product-style.css";
import p1 from "../../assets/img/people/people1.jpg";
import p2 from "../../assets/img/people/people2.jpg";
import p3 from "../../assets/img/people/people3.jpg";
import p4 from "../../assets/img/people/people4.jpg";
import p5 from "../../assets/img/people/people5.jpg";
import p6 from "../../assets/img/people/people6.jpg";
// import p7 from "../../assets/img/people/people7.jpg";
import p8 from "../../assets/img/people/people8.jpg";
import icons from "../../assets/img/icons/icons.png";
import cellAdvance from "../../assets/img/tez-mobile/cell-advance.png";
class MoreProduct extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="bgGrey">
          <div className="box">
            <Grid container spacing={24}>
              <Grid item xs={6} sm={6} lg={6} style={{ paddingTop: "10%" }}>
                <h2 className="headingCaps blue-text shadowText fontLS">
                  TEZ FINANCIAL SERVICES
                </h2>
                <h5 className="colorBlack">
                  Providing{" "}
                  <strong className="green-text">Frictionless Access</strong> to{" "}
                  <br />{" "}
                  <strong className="green-text"> Financial Services </strong>
                </h5>
                <br />
                <img
                  src={icons}
                  alt=""
                  style={{
                    filter: "contrast(0) brightness(27%)",
                    width: "64%"
                  }}
                />
              </Grid>
              <Grid item xs={6} sm={6} lg={6} className="bgPakistan">
                <div className="innerProduct">
                  <img
                    src={p8}
                    alt=""
                    className="floating shadowLight picture pic_1"
                  />
                  <img
                    src={p6}
                    alt=""
                    className="floating shadowLight picture pic_2"
                  />
                  <img
                    src={p5}
                    alt=""
                    className="floating shadowLight picture pic_3"
                  />
                  <img
                    src={p4}
                    alt=""
                    className="floating shadowLight picture pic_4"
                  />
                  <img
                    src={p3}
                    alt=""
                    className="floating shadowLight picture pic_5"
                  />
                  <img
                    src={p2}
                    alt=""
                    className="floating shadowLight picture pic_6"
                  />
                  <img
                    src={p1}
                    alt=""
                    className="floating shadowLight picture pic_7"
                  />
                </div>
              </Grid>
            </Grid>
          </div>
        </section>
        <section>
          <Grid container>
            <Grid item xs={12} sm={5} lg={5} className="bgBlue">
              <div
                style={{
                  color: "white",
                  padding: "18% 12%",
                  textAlign: "justify"
                }}
              >
                <h3 className="fontProduct fontLS headingCaps"> TEZ ADVANCE </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Alias, dolorem laboriosam rerum soluta laborum dolores non
                  nostrum nulla dolore, at minima. Officiis ad, vel dolor eius
                  cum hic iste enim.
                </p>
              </div>
            </Grid>
            <Grid item xs={12} sm={7} lg={7} style={{ height: "100%" }}>
              <Grid container>
                <Grid item xs={12} sm={5} lg={5}  style={{margin:'auto'}}>
                  <img src={cellAdvance} alt="" style={{ width: "95%", padding:'10%'}} />
                </Grid>
                <Grid item xs={12} sm={7} lg={7} style={{margin:'auto', padding:'0 15% 0 0'}}>
                  <ul className="advanceLI">
                    <li>
                      {" "}
                      <strong>Instant Decisions:</strong> Making disbursements within minutes
                      into customers mobile wallets.{" "}
                    </li>
                    ​
                    <li>
                      {" "}
                      <strong>Nano Sized:</strong> Ranging between PKR 1,000 to PKR 10,000, with
                      tenures between 1 to 4 weeks.
                    </li>
                    ​<li><strong> Transparent Pricing:</strong> No hidden charges.</li>​
                    <li>
                      <strong>Scale Up:</strong> Opportunity for customers to improve product
                      offerings by observing good repayment behaviour.{" "}
                    </li>
                  </ul>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </section>
        <section>
          <Grid container>
            <Grid item xs={12} sm={7} lg={7} style={{ height: "100%" }}>
              <Grid container>
                <Grid item xs={12} sm={5} lg={5}  style={{margin:'auto'}}>
                  <img src={cellAdvance} alt="" style={{ width: "95%", padding:'10%'}} />
                </Grid>
                <Grid item xs={12} sm={7} lg={7} style={{margin:'auto', padding:'0 15% 0 0'}}>
                  <ul className="advanceLI">
                    <li>
                      {" "}
                      <strong>Instant Decisions:</strong> Making disbursements within minutes
                      into customers mobile wallets.{" "}
                    </li>
                    ​
                    <li>
                      {" "}
                      <strong>Nano Sized:</strong> Ranging between PKR 1,000 to PKR 10,000, with
                      tenures between 1 to 4 weeks.
                    </li>
                    ​<li><strong> Transparent Pricing:</strong> No hidden charges.</li>​
                    <li>
                      <strong>Scale Up:</strong> Opportunity for customers to improve product
                      offerings by observing good repayment behaviour.{" "}
                    </li>
                  </ul>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={5} lg={5} className="bgGreen">
              <div
                style={{
                  color: "white",
                  padding: "18% 12%",
                  textAlign: "justify"
                }}
              >
                <h3 className="fontProduct fontLS headingCaps"> TEZ BIMA </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Alias, dolorem laboriosam rerum soluta laborum dolores non
                  nostrum nulla dolore, at minima. Officiis ad, vel dolor eius
                  cum hic iste enim.
                </p>
              </div>
            </Grid>
          </Grid>
        </section>
        <section>
          <Grid container>
            <Grid item xs={12} sm={5} lg={5} className="bgBlue">
              <div
                style={{
                  color: "white",
                  padding: "18% 12%",
                  textAlign: "justify"
                }}
              >
                <h3 className="fontProduct fontLS headingCaps"> TEZ ADVANCE </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Alias, dolorem laboriosam rerum soluta laborum dolores non
                  nostrum nulla dolore, at minima. Officiis ad, vel dolor eius
                  cum hic iste enim.
                </p>
              </div>
            </Grid>
            <Grid item xs={12} sm={7} lg={7} style={{ height: "100%" }}>
              <Grid container>
                <Grid item xs={12} sm={5} lg={5}  style={{margin:'auto'}}>
                  <img src={cellAdvance} alt="" style={{ width: "95%", padding:'10%'}} />
                </Grid>
                <Grid item xs={12} sm={7} lg={7} style={{margin:'auto', padding:'0 15% 0 0'}}>
                  <ul className="advanceLI">
                    <li>
                      {" "}
                      <strong>Instant Decisions:</strong> Making disbursements within minutes
                      into customers mobile wallets.{" "}
                    </li>
                    ​
                    <li>
                      {" "}
                      <strong>Nano Sized:</strong> Ranging between PKR 1,000 to PKR 10,000, with
                      tenures between 1 to 4 weeks.
                    </li>
                    ​<li><strong> Transparent Pricing:</strong> No hidden charges.</li>​
                    <li>
                      <strong>Scale Up:</strong> Opportunity for customers to improve product
                      offerings by observing good repayment behaviour.{" "}
                    </li>
                  </ul>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </section>
        <section>
          <Grid container>
            <Grid item xs={12} sm={7} lg={7} style={{ height: "100%" }}>
              <Grid container>
                <Grid item xs={12} sm={5} lg={5}  style={{margin:'auto'}}>
                  <img src={cellAdvance} alt="" style={{ width: "95%", padding:'10%'}} />
                </Grid>
                <Grid item xs={12} sm={7} lg={7} style={{margin:'auto', padding:'0 15% 0 0'}}>
                  <ul className="advanceLI">
                    <li>
                      {" "}
                      <strong>Instant Decisions:</strong> Making disbursements within minutes
                      into customers mobile wallets.{" "}
                    </li>
                    ​
                    <li>
                      {" "}
                      <strong>Nano Sized:</strong> Ranging between PKR 1,000 to PKR 10,000, with
                      tenures between 1 to 4 weeks.
                    </li>
                    ​<li><strong> Transparent Pricing:</strong> No hidden charges.</li>​
                    <li>
                      <strong>Scale Up:</strong> Opportunity for customers to improve product
                      offerings by observing good repayment behaviour.{" "}
                    </li>
                  </ul>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={5} lg={5} className="bgGreen">
              <div
                style={{
                  color: "white",
                  padding: "18% 12%",
                  textAlign: "justify"
                }}
              >
                <h3 className="fontProduct fontLS headingCaps"> TEZ BIMA </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Alias, dolorem laboriosam rerum soluta laborum dolores non
                  nostrum nulla dolore, at minima. Officiis ad, vel dolor eius
                  cum hic iste enim.
                </p>
              </div>
            </Grid>
          </Grid>
        </section>
      </React.Fragment>
    );
  }
}

export default MoreProduct;
