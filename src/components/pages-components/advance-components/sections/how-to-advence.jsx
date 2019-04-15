import React from "react";
import Grid from "@material-ui/core/Grid";
import ss from '../../../../assets/img/tez-mobile/ss.png'

function HowToAdvance(props) {

    const style={
        img:{
            boxShadow: '0 10px 30px 0 rgba(0, 0, 0, 0.1)'
        }
    }

  return (
    <Grid container>
      <Grid item sm={6} lg={6} style={{padding:'5%'}}>
        <h5 style={{textTransform:'uppercase'}}>{props.heading}</h5>
        <p style={{textAlign:'justify'}}>{props.content}</p>
      </Grid>
      <Grid item sm={6} lg={6}>
        <img src={ss} alt="screen shot" style={{ ...style.img, margin:'10%'}}/>
        <img src={ss} alt="screen shot" style={{ ...style.img}}/>
      </Grid>
    </Grid>
  );
}

export default HowToAdvance;
