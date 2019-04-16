import React from "react";
import Grid from "@material-ui/core/Grid";
import ss from "../../../../assets/img/tez-mobile/ss.png";
import cell from "../../../../assets/img/tez-mobile/cell.png";

function HowToAdvance(props) {
  const style = {
    img: {
      boxShadow: "0 10px 30px 0 rgba(0, 0, 0, 0.1)",
      width: "30%"
    }
  };

  return (
    <Grid container>
      <Grid item sm={6} lg={6} style={{ padding: "5%" }}>
        <div data-aos="fade-up" data-aos-duration="600" data-aos-once="true">
          <h5 className="blue-text" style={{ textTransform: "uppercase" }}>
            {props.heading}
          </h5>
          <hr className="hrDivider" />
        </div>
        <br />
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="600"
          data-aos-once="true"
        >
          <p
            className="colorGrey"
            style={{ textAlign: "justify" }}
          >
            {props.content}
          </p>
        </div>
      </Grid>
      <Grid item sm={6} lg={6} style={{ textAlign: "center" }}>
        <img
          src={ss}
          alt="screen shot"
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-once="true"
          style={{ ...style.img, margin: "8% 11% 11%" }}
        />
        {/* <img
          src={cell}
          alt="Cell"
        /> */}
        <img
          src={ss}
          alt="screen shot"
          data-aos="fade-left"
          data-aos-delay="300"
          data-aos-duration="1100"
          data-aos-once="true"
          style={{ ...style.img }}
        />
      </Grid>
    </Grid>
  );
}

export default HowToAdvance;
