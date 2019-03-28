import React from "react";
import Grid from "@material-ui/core/Grid";

function PerksAndBenefits() {
  return (
    <section style={{ background: "#f4f4f4" }}>
      <div className="box">
        <Grid container>
          <Grid item xs={12} sm={12} lg={12}>
            <h3 className="blue-text" style={{textAlign:'center',fontVariant: 'petite-caps'}}>
              {"Perk And Benifits "}
              <hr className="hrDividerCenter" />
            </h3>
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
