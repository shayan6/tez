import React, { Component } from "react";
import AtTez  from './sections/section-at-tez';
import '../../../assets/css/career-style.css';
import tecNetwork from '../../../assets/img/tec-network.png';

class Career extends Component {
  render() {
    return (
      <React.Fragment>
        <AtTez img={{tecNetwork}} />
      </React.Fragment>
    );
  }
}

export default Career;
