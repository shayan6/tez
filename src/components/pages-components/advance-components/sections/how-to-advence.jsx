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
      <Grid item sm={6} lg={6} className="instAdvance">
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
          <p className="colorGrey" style={{ textAlign: "justify" }}>
            {props.content}
          </p>
        </div>
      </Grid>
      <Grid
        item
        sm={6}
        lg={6}
        style={{
          textAlign: "center",
          padding: "3%",
          backgroundImage: `url(${cell})`,
          backgroundSize: "contain",
          backgroundRepeat: " no-repeat",
          backgroundPosition: "center"
        }}
      >
        <img
          src={ss}
          alt="screen shot"
          data-aos="zoom-in-left"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-once="true"
          className="object"
          style={{ ...style.img }}
        />
        <img
          src={ss}
          alt="screen shot"
          data-aos="zoom-in-right"
          data-aos-duration="1100"
          data-aos-once="true"
          className="object2"
          style={{ ...style.img }}
        />
      </Grid>
    </Grid>
  );
}

export default HowToAdvance;
