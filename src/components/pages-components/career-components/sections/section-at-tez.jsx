import React from "react";
import Grid from "@material-ui/core/Grid";

function AtTez(props) {
  return (
    <section>
      <div className="box" style={{ padding: "5% 0", backgroundImage:`url(${props.img.tecNetwork})` }}>
        <Grid container>
          <Grid item xs={12} sm={12} lg={12}>
            <h2 class="sentence">
              AT TEZ WE
              <div class="slidingVertical">
                <span style={{ color: "#00c851" }}>INNOVATE</span>
                <span style={{ color: "#47ad7b" }}>EMPOWER</span>
                <span style={{ color: "#1c6fb5" }}>GROW</span>
                <span style={{ color: "#fc9257" }}>ACCOMPLISH</span>
                <span style={{ color: "#47ad7b" }}>EMBRACE</span>
              </div>
              <h5>JOIN THE REVOLUTION FOR FINANCIAL INCLUSION</h5>
              <p
                style={{
                  fontSize: "17px",
                  lineHeight: "1.4rem",
                  textAlign: "justify"
                }}
              >
                Tez is the platform that allows you to realize your potential
                completely, and to do what you are passionate about. We ensure
                an inclusive culture on our turf, and provide equal
                opportunities for all. We value hard work, dedication and
                commitment and through mutual respect; we inspire loyalty
                throughout our workforce.
              </p>
              <p
                style={{
                  fontSize: "17px",
                  lineHeight: "1.4rem",
                  textAlign: "justify"
                }}
              >
                Tez does not just appreciate innovation, we have an enabling
                culture that encourages out-of-the-box ideas and approaches. You
                need to have the freedom to pursue your ideas and present them
                in an atmosphere that is enabling you and to a team that
                believes in making dreams come true. We believe
              </p>
            </h2>
          </Grid>
        </Grid>
      </div>
    </section>
  );
}
export default AtTez;
