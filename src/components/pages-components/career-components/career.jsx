import React, { Component } from "react";
import AtTez from "./sections/at-tez";
import "../../../assets/css/career-style.css";

import tecNetwork from "../../../assets/img/tec-network.png";
import careerWomen from "../../../assets/img/career-women.png";
import careerLearn from "../../../assets/img/career-learn.png";
import careerSuccess from "../../../assets/img/career-success.png";
import careerGrow from "../../../assets/img/career-grow.png";
import PerksAndBenefits from "./sections/perks-and-benefits";
import CurrentOpening from "./sections/current-openings";

class Career extends Component {
  render() {
    return (
      <React.Fragment>
        <AtTez
          img={{
            tecNetwork,
            careerGrow,
            careerWomen,
            careerLearn,
            careerSuccess
          }}
        />
        <PerksAndBenefits />
        <CurrentOpening />
      </React.Fragment>
    );
  }
}

export default Career;
