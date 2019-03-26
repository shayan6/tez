import React from "react";
import Grid from "@material-ui/core/Grid";
import Slider from "react-slick";

function Team(props) {
  const {
    shoaib,
    jamal,
    shafiq,
    shayan,
    adeel,
    laiba,
    inWhite,
    nadeem,
    naureen,
    humza
  } = props.img;
  const styleRel = {
    fontWeight: "700",
    color: "rgb(28, 111, 181)",
    fontSize: "14px"
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const tezMembers = [
    {
      srcPic: nadeem,
      name: "NADEEM HUSSAIN",
      rel: "Founder & Chief Executive Officer",
      srcLinkdin: "https://www.linkedin.com/"
    },
    {
      srcPic: naureen,
      name: "NAUREEN HYAT",
      rel: "Co-Founder & Business Head",
      srcLinkdin: "https://www.linkedin.com/"
    },
    {
      srcPic: humza,
      name: "HUMZA HUSSAIN",
      rel: "Co-Founder & Business Head",
      srcLinkdin: "https://www.linkedin.com/"
    },
    {
      srcPic: shoaib,
      name: "SHOAIB LALANI",
      rel: "Business Head",
      srcLinkdin: "https://www.linkedin.com/"
    },
    {
      srcPic: jamal,
      name: "JAMALUDDIN",
      rel: "Marketing Manager",
      srcLinkdin: "https://www.linkedin.com/"
    },
    {
      srcPic: shafiq,
      name: "SHAFIQ-UR-REHMAN",
      rel: "Finance Manager",
      srcLinkdin: "https://www.linkedin.com/"
    },
    {
      srcPic: shayan,
      name: "SHAYAN SHAIKH",
      rel: "Software Engineer",
      srcLinkdin: "https://www.linkedin.com/"
    },
    {
      srcPic: adeel,
      name: "ADEEL RAEES",
      rel: "Manager IT",
      srcLinkdin: "https://www.linkedin.com/in/laiba-sajid-9b642517b/"
    },
    {
      srcPic: laiba,
      name: "LAIBA SAJID",
      rel: "Customer Support Executive",
      srcLinkdin: "https://www.linkedin.com/in/laiba-sajid-9b642517b/"
    }
  ];
  return (
    <section style={{ background: "rgb(242, 242, 242)" }}>
      <div
        className="box"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
            lg={12}
            style={{ textAlign: "center", padding: "3% 0" }}
          >
            <h3 style={{ fontVariantCaps: "small-caps", color: "#1c6fb5" }}>
              Our Team
            </h3>
            <hr className="hrDividerCenter" />
            <p>
              A team where art and science come together to create positive,
              sustainable impact.
            </p>
          </Grid>
          <Grid item xs={12} sm={12} lg={12}>
            <Slider {...settings}>
              {tezMembers.map((objVal, key) => (
                <div key={key} className="perTeam">
                  <div className="imgBox">
                    <img src={objVal.srcPic} alt="example avatar" />
                    <div className="hvrbox-layer_top hvrbox-layer_slideup">
                      <div className="hvrbox-text">
                        {/* <h3>in</h3> */}
                        <img
                          src={inWhite}
                          alt="IN"
                          style={{ filter: "brightness(3)" }}
                        />
                      </div>
                    </div>
                  </div>
                  <h5>
                    <strong>{objVal.name}</strong>
                  </h5>
                  <p style={styleRel}>{objVal.rel}</p>
                </div>
              ))}
            </Slider>
          </Grid>
        </Grid>
      </div>
      <br />
      <br />
      <br />
    </section>
  );
}

export default Team;
