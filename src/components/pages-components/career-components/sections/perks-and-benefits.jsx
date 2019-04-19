import React from "react";
import Grid from "@material-ui/core/Grid";
import { Carousel } from "react-materialize";
import sli2 from '../../../../assets/img/slider/sli2.jpg'
import sli3 from '../../../../assets/img/slider/sli3.jpg'
import cTeam from '../../../../assets/img/team/cTeam.jpg'


function PerksAndBenefits() {
  const styleHeading = {
    textAlign: "center",
    margin: "0",
    fontVariant: "petite-caps"
  };

  //each grid div box css ##########################################################
  const eachGrid = {
    width: "100%",
    height: "100%",
    // background: "white",
    display: "flex",
    fontSize: "10px",
    padding: "1% 7%",
    textAlign: "justify",
    lineHeight: "1.3"
  };

  //each bold HR CSS ##########################################################
  const boldHR = {
    left: "0",
    right: "0",
    top: "86%",
    width: "33%",
    height: "10px",
    border: "0px"
  };

  return (
    <section style={{ backgroundImage:'linear-gradient(to right, #eef1f9, #f9fafe)', padding: "2% 0" }}>
      <div className="box">
        <Grid container>
          <Grid item xs={12} sm={12} lg={12}>
            <h3 className="blue-text" style={styleHeading}>
              {"PERK AND BENIFITS"}
            </h3>
            <h3 className="colorBlack" style={styleHeading}>
              {"of working with tez"}
            </h3>
            <hr />
            <br />
          </Grid>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={16}>
              <Grid item xs={12} sm={12} lg={6}>
                <div style={{ ...eachGrid, backgroundImage: `url(${cTeam})`, backgroundSize:'cover', backgroundPosition:'center' }} />
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <div style={{ ...eachGrid, backgroundColor: "white" }}>
                  <div className="insideBenefitDiv">
                    <h6 className="colorBlack">THAT IS ALL ABOUT PEOPLE</h6>
                    <p className="colorGrey">
                      {" "}
                      We are energetic individuals with high aims, who desire to
                      give a lot to life. Tez is characterized by its lean
                      organization structure with few tiers and high degree of
                      independence; this places great responsibility on its
                      employees to perform in the best possible manner, often
                      exceeding benchmarks.{" "}
                    </p>
                    <hr style={{ ...boldHR, backgroundColor: "#3cce89" }} />
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <div
                  style={{
                    ...eachGrid,
                    backgroundColor: "#3cce89",
                    color: "white"
                  }}
                >
                  <div className="insideBenefitDiv">
                    <h6 style={{ textAlign: "center" }}>AT TEZ YOU... </h6>
                    <hr style={{ ...boldHR, backgroundColor: "#fff" }} />
                    <ul
                      className="ulAtTez"
                      style={{
                        color: "white",
                        textAlign: "justify"
                      }}
                    >
                      <li>
                        <p>Will be able to create social impact.</p>
                      </li>
                      <li>
                        <p>
                          Will be exposed to a continuously growing and learning
                          environment.
                        </p>
                      </li>
                      <li>
                        <p>
                          Will have the opportunity to interact with an
                          experienced team with a diverse set of skills.
                        </p>
                      </li>
                      <li>
                        <p>
                          Can have the freedom to innovate and create your own
                          growth path.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </Grid>
              {/* row 2 ***************************************************************************/}
              <Grid item xs={12} sm={4} lg={4}>
                <div style={{ ...eachGrid, backgroundColor: "#1d70b5" }}>
                  <div className="insideBenefitDiv">
                    <h6 style={{ textAlign: "center", color: "white" }}>
                      {" "}
                      FINANCIAL & <br /> RETIREMENT PERKS{" "}
                    </h6>
                    <hr style={{ ...boldHR, backgroundColor: "#fff" }} />
                    <ul style={{ textAlign: "center", color: "white" }}>
                      <li>
                        <p>Competitive Remuneration Packages</p>
                      </li>
                      <li>
                        <p>Employee Old Age Benefits</p>
                      </li>
                      <li>
                        <p>Performance Bonus</p>
                      </li>
                      <li>
                        <p>Employee Stock Options</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={4} lg={4}>
                <div style={{ ...eachGrid, backgroundColor: "white" }}>
                  <div className="insideBenefitDiv">
                    <h6 style={{ textAlign: "center" }} className="colorBlack">
                      {" "}
                      INSURANCE, HEALTH <br /> & WELLNESS BENEFITS{" "}
                    </h6>
                    <hr style={{ ...boldHR, backgroundColor: "#1d70b5" }} />
                    <ul style={{ textAlign: "center" }} className="colorGrey">
                      <li>
                        <p>Life Insurance</p>
                      </li>
                      <li>
                        <p>Hospitalization Coverage</p>
                      </li>
                      <li>
                        <p>Daily Lunch</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={4} lg={4}>
                <div style={{ ...eachGrid, backgroundColor: "white" }}>
                  <div className="insideBenefitDiv">
                    <h6
                      style={{ textAlign: "center", color: "#00c851" }}
                      className="colorBlack"
                    >
                      {" "}
                      FAMILY, PARENTING
                      <br /> & TIME-OFF{" "}
                    </h6>
                    <hr style={{ ...boldHR, backgroundColor: "#00c851" }} />
                    <ul className="colorGrey" style={{ textAlign: "center" }}>
                      <li>
                        <p>Maternity / Paternity Leave</p>
                      </li>
                      <li>
                        <p>Unpaid Extended Leave</p>
                      </li>
                      <li>
                        <p>Leave Fare Allowance</p>
                      </li>
                      <li>
                        <p>Sick Leave</p>
                      </li>
                      <li>
                        <p>Bereavement Leave</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </Grid>
              {/* row 3 ***************************************************************************/}
              <Grid item xs={12} sm={6} lg={3}>
                <div style={{ ...eachGrid, backgroundColor: "white" }}>
                  <div className="insideBenefitDiv">
                    <h6 style={{ textAlign: "center" }} className="colorBlack">
                      {" "}
                      PROFESSIONAL
                      <br />
                      SUPPORT{" "}
                    </h6>
                    <hr style={{ ...boldHR, backgroundColor: "#1d70b5" }} />
                    <ul style={{ textAlign: "center" }} className="colorGrey">
                      <li>
                        <p>Professional Training</p>
                      </li>
                      <li>
                        <p>Networking Opportunities</p>
                      </li>
                      <li>
                        <p>Apprenticeship Programs</p>
                      </li>
                      <li>
                        <p>Access to Incubators and </p>
                      </li>
                      <li>
                        <p>Accelerators</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <div
                  style={{
                    ...eachGrid,
                    backgroundColor: "#3cce89",
                    color: "white"
                  }}
                >
                  <div className="insideBenefitDiv">
                    <h6 style={{ textAlign: "center" }}> OTHER PERKS </h6>
                    <hr style={{ ...boldHR, backgroundColor: "#fff" }} />
                    <ul
                      style={{
                        color: "white",
                        textAlign: "center"
                      }}
                    >
                      <li>
                        <p>Birthday Celebrations</p>
                      </li>
                      <li>
                        <p>Open Seating</p>
                      </li>
                      <li>
                        <p>Employee Discounts</p>
                      </li>
                      <li>
                        <p>Team Picnics & Trips</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={12} lg={6}>
                <Carousel
                  options={{ fullWidth: true, indicators: true, height:'99%' }}
                  images={[
                    sli2,
                    sli3,
                    sli2,
                  ]}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <br />
        <br />
        <br />
        <br />
      </div>
    </section>
  );
}

export default PerksAndBenefits;
