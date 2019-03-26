import React from 'react';
import Grid from "@material-ui/core/Grid";

function VisionAndMission(props) {
    console.log(props);
  return (
    <section style={{ background: "#fff", padding: "5% 0" }}>
      <Grid container>
        <Grid item>
          <Grid item xs={12} sm={6} lg={6} style={{ textAlign: "right" }}>
            <img
              src={props.imgTecTree}
              id="tecTree"
              alt="Tec tree"
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
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <h3 style={{ fontVariantCaps: "small-caps", color: "#1c6fb5" }}>
              Vision <hr className="hrDivider" />{" "}
            </h3>
            <p>
              To accelerate financial inclusion by leveraging upon the power
              of digital and transcending the masses from a state of
              financial vulnerability to economic empowerment – thereby
              bringing positive, effective change.
            </p>
          </div>
          <br />
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="500"
            data-aos-once="true"
          >
            <h3 style={{ fontVariantCaps: "small-caps", color: "#1c6fb5" }}>
              Mission <hr className="hrDivider" />{" "}
            </h3>
            <p>
              To revolutionize the financial sector by providing swift and
              frictionless financial access to the unbanked and under-banked
              by aggregating credit, savings, insurance, and investments
              into a single platform – a smartphone application - thereby
              accelerating financial inclusion.{" "}
            </p>
          </div>
        </Grid>
      </Grid>
    </section>
  );
}

export default VisionAndMission;
