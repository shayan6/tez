import React from "react";
import Grid from "@material-ui/core/Grid";

function PerksAndBenefits() {
  const eachGrid = {
    width: "100%",
    height: "100%",
    // background: "white",
    fontSize: "10px",
    padding: "1% 7%",
    textAlign: "justify"
  };

  const boldHR = {
    left: "0",
    right: "0",
    top: "86%",
    margin: "7px auto",
    width: "33%",
    height: "10px",
    // backgroundColor: "#3cce89",
    border: "0px"
  };

  return (
    <section style={{ background: "#f4f4f4", padding: "2% 0" }}>
      <div className="box">
        <Grid container>
          <Grid item xs={12} sm={12} lg={12}>
            <h3
              className="blue-text"
              style={{
                textAlign: "center",
                margin: "0",
                fontVariant: "petite-caps"
              }}
            >
              {"PERK AND BENIFITS"}
            </h3>
            <h3
              style={{
                textAlign: "center",
                margin: "0",
                fontVariant: "petite-caps"
              }}
            >
              {"of working with tez"}
            </h3>
            <hr />
            <br />
          </Grid>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={24}>
              <Grid item xs={12} sm={6} lg={6}>
                <div style={{ ...eachGrid, backgroundColor: "white" }} />
              </Grid>
              <Grid item xs={12} sm={3} lg={3}>
                <div style={{ ...eachGrid, backgroundColor: "white" }}>
                  <h6>THAT IS ALL ABOUT PEOPLE</h6>
                  <p>
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
              </Grid>
              <Grid item xs={12} sm={3} lg={3}>
                <div
                  style={{
                    ...eachGrid,
                    backgroundColor: "#3cce89",
                    color: "white"
                  }}
                >
                  <h6 style={{ textAlign: "center" }}>AT TEZ YOU... </h6>
                  <hr style={{ ...boldHR, backgroundColor: "#fff" }} />
                  <ul
                    style={{
                      color: "white",
                      textAlign: "justify",
                      lineHeight: "1.2"
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
              </Grid>
              {/* row 2 */}
              <Grid item xs={12} sm={4} lg={4}>
                <div style={{ ...eachGrid, backgroundColor: "#1d70b5" }}>
                  <h6 style={{ textAlign: "center", color: "white" }}>
                    {" "}
                    FINANCIAL & <br /> RETIREMENT PERKS{" "}
                  </h6>
                  <hr style={{ ...boldHR, backgroundColor: "#fff" }} />
                  <ul style={{ textAlign: "center", color: "white" }}>
                    <li>Competitive Remuneration Packages</li>
                    <li>Employee Old Age Benefits</li>
                    <li>Performance Bonus</li>
                    <li>Employee Stock Options</li>
                  </ul>
                </div>
              </Grid>
              <Grid item xs={12} sm={4} lg={4}>
                <div style={{ ...eachGrid, backgroundColor: "white" }} />
              </Grid>
              <Grid item xs={12} sm={4} lg={4}>
                <div style={{ ...eachGrid, backgroundColor: "white" }} />
              </Grid>
              {/* row 3 */}
              <Grid item xs={12} sm={3} lg={3}>
                <div style={{ ...eachGrid, backgroundColor: "#1d70b5" }} />
              </Grid>
              <Grid item xs={12} sm={3} lg={3}>
                <div style={{ ...eachGrid, backgroundColor: "#00c851" }} />
              </Grid>
              <Grid item xs={12} sm={6} lg={6}>
                <div style={{ ...eachGrid, backgroundColor: "white" }} />
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
