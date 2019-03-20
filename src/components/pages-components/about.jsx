import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import imgHand from '../../assets/img/hand-mobile.png';
import { Button } from '@material-ui/core';

class About extends Component {
    render() { 
        return (
            <div style={{ background : 'rgb(242, 242, 242)' }}>
                {/* <section> */}
                    <Grid container spacing={12}>    
                        <Grid item xs={8} sm={6} lg={6} style={{paddingLeft:'15%', margin: 'auto',textAlign:'justify'}}>
                            <h4 style={{fontVariantCaps: 'small-caps'}} >Tez is revolutionizing access to finance for the masses.</h4>
                            <p>Tez is a digital financial institution that is accelerating access to finance across Pakistan. This means that Tez customers can get an instant loan of up to PKR 10,000 within a few minutes, all at the convenience of their own phones.</p>
                            <Button variant="contained" color="primary">Open An Account</Button>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={6} style={{textAlign:'right'}}>
                            <img src={imgHand} alt="mobile in hand" height='100%' width="100%" />
                        </Grid>
                    </Grid>
                {/* </section>  */}
            </div>
        );
    }
}
 
export default About;