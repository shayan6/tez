import React, { Component } from "react";
import { Carousel } from "react-materialize";
import '../../assets/css/advance-style.css';
import step1 from "../../assets/img/tez-mobile/step_1a.png";
import step2 from "../../assets/img/tez-mobile/step_1b.png";
import step3 from "../../assets/img/tez-mobile/step_2a.png";
import step4 from "../../assets/img/tez-mobile/step_3a.png";
import step5 from "../../assets/img/tez-mobile/step_3b.png";

class TezAdvance extends Component {
  render() {
    return (
      <section style={{background:'#f8f8f8'}}>
        <div className="box">
          <h2 className="colorBlack">TEZ ADVANCE</h2>
          <div style={{ marginTop: '-170px' }} className="process-steps">
            <Carousel
              style={{height:'100%'}}
              options={{ indicators: true}}
              images={[step1, step2, step3, step4, step5]}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default TezAdvance;
