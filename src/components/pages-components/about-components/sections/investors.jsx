import React from "react";
import Grid from "@material-ui/core/Grid";
import Slider from "react-slick";

function Investors(props) {
  const { planetN, omidyar, accion } = props.img;
  const settingsInvestors = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const tezInvestors = [
    {
      srcPic: planetN,
      name: "PLANET N",
      description:
        "Planet N Group, founded by Mr. Nadeem Hussain, is Pakistan’s largest tech-focused growth capital and incubator platform, comprising portfolio companies across Fintech, Data Analytics, AI, Blockchain, Healthtech, & Edutech. Planet N adds value to its portfolio entities via involvement in key operational areas, business consulting, cross-group synergies, international expansion facilitation and strategic partnerships.",
      srcLinkdin: "https://www.linkedin.com/"
    },
    {
      srcPic: omidyar,
      name: "OMIDYAR NETWORK",
      description:
        "One of the largest social impact investors globally. Established in 2004 by eBay founder Pierre Omidyar and his wife Pam Omidyar, ON has committed over USD 992 Million to nonprofit organizations and for-profit companies across multiple investment areas, including Consumer Internet & Mobile, Education, Financial Inclusion, Governance & Citizen Engagement, and Property Rights.",
      srcLinkdin: "https://www.linkedin.com/"
    },
    {
      srcPic: accion,
      name: "ACCION",
      description:
        "Accion International, is the largest microfinance investor and a global nonprofit organization that supports microfinance institutions to serve low-income clients. Accion has helped build 63 microfinance institutions in 32 countries. Accion Venture Lab is an investment initiative of Accion International that provides seed capital and management support to fintech start-ups.",
      srcLinkdin: "https://www.linkedin.com/"
    }
  ];
  return (
    <section>
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
              Our Investors
            </h3>
            <hr className="hrDividerCenter" />
            {/* <p>
                  A team where art and science come together to create positive,
                  sustainable impact.
                </p> */}
          </Grid>
          <Grid item xs={12} sm={12} lg={12}>
            <Slider {...settingsInvestors}>
              {tezInvestors.map((objVal, key) => (
                <div key={key}>
                  <Grid container className="perInvestor">
                    <Grid item xs={12} sm={6} lg={6}>
                      <h5>
                        <strong>{objVal.name}</strong>
                      </h5>
                      <p>{objVal.description}</p>
                      {/* <i> Icon </i> */}
                    </Grid>
                    <Grid item xs={12} sm={6} lg={6}>
                      <div className="imgBox">
                        <img src={objVal.srcPic} alt="example avatar" />
                      </div>
                    </Grid>
                  </Grid>
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

export default Investors;
