import React from "react";
import Grid from "@material-ui/core/Grid";
import Slider from "react-slick";
import shoaib from "../../../../assets/img/team/shoaib.jpg";

function CustomerTestimonial(props) {
  const { textWhite, boldHR } = props.style;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const tezCustomer = [
    {
      srcPic: shoaib,
      name: "Sunil Yousaf",
      comment: "Koi To Hai Jo Sath Deta Hai Jese Ap Log"
    },
    {
      srcPic: shoaib,
      name: "Ahsan Mehmood",
      comment:
        "Excellent Services provided by Tez Team. I am Using It & Enjoying Much More."
    },
    {
      srcPic: shoaib,
      name: "Noman Rashid",
      comment:
        "First time used this app and never expected that i will get instant loan.. Doesn't matter how much they give but i think it's a good step when you are in hurry and no need to borrow money form friends"
    },
    {
      srcPic: shoaib,
      name: "Kamran Akmal",
      comment:
        "I have been a customer for 3 years, Tez has given me loans worth PKR 20,000 in last year. I love Tez!"
    },
    {
      srcPic: shoaib,
      name: "Owais Shah",
      comment: "Innovative And Is Progressing With Time"
    }
  ];

  return (
    <section>
      <Grid container>
        <Grid item xs={12} sm={7} lg={7} style={{ margin: "auto"}} className="testimonialContainer">
          <Slider {...settings}>
            {tezCustomer.map((objVal, key) => (
              <div key={key}>
                <Grid container className="perCustomer">
                  <Grid item xs={12} sm={12} lg={6}>
                    <div className="imgBox">
                      <img src={objVal.srcPic} alt="example avatar" />
                      <h5 className="blue-text" >{objVal.name}</h5>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={12} lg={6} style={{ margin: "auto" }}>
                    <p className="quotes-head blue-text" >What Our Customers Say</p>
                    <p className="curly-quotes colorGrey" >{"  "}{objVal.comment}{"  "}</p>
                  </Grid>
                </Grid>
              </div>
            ))}
          </Slider>
        </Grid>
        <Grid
          item
          xs={12}
          sm={5}
          lg={5}
          style={{
            ...textWhite
          }}
        >
          <div className="boxRight">
            <p style={{ lineHeight: "0" }}> IMPORTANT </p>
            <h5 style={{ lineHeight: "1" }}> SECURITY MEASURES </h5>
            <p style={{ lineHeight: "0" }}> TO REMEMBER </p>
            <hr style={{ ...boldHR, backgroundColor: "#ffffff" }} />
            <ul className="advanceUL">
              <li>
                <p>Fill in a few details, to get your unique credit limit.</p>
              </li>
              <li>
                <p>Instant Approval to take loan of PKR 1,000 to PKR 10,000</p>
              </li>
              <li>
                <p>A Fixed Charges, No Compounding Interest!</p>
              </li>
              <li>
                <p>Choose to conveniently repay between 1 week to 4 weeks</p>
              </li>
              <li>
                <p>Privacy Guaranteed</p>
              </li>
            </ul>
          </div>
        </Grid>
      </Grid>
    </section>
  );
}

export default CustomerTestimonial;
