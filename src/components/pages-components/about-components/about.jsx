// import components #######################################################
import React, { Component } from "react";
import RevolutionizingAcess from "./sections/revolutionizing-access";
import VisionAndMission from "./sections/vision-and-mission";

// import style sheet page #################################################
import "../../../assets/css/about-style.css";

// team images #############################################################
import shayan from "../../../assets/img/team/shayan.jpg";
import nadeem from "../../../assets/img/team/nadeem.jpg";
import humza from "../../../assets/img/team/humza.jpg";
import naureen from "../../../assets/img/team/naureen.jpg";
import shoaib from "../../../assets/img/team/shoaib.jpg";
import jamal from "../../../assets/img/team/jamal.jpg";
import shafiq from "../../../assets/img/team/shafiq.jpg";
import adeel from "../../../assets/img/team/adeel.jpg";
import laiba from "../../../assets/img/team/laiba.jpg";

// imvestors images #######################################################
import planetN from "../../../assets/img/investors/planet-n.png";
import omidyar from "../../../assets/img/investors/omidyar.png";
import accion from "../../../assets/img/investors/accion.png";
import Team from "./sections/team";
import Investors from "./sections/investors";

//extra images #############################################################
import imgHand from "../../../assets/img/hand-mobile.png";
import imgTecTree from "../../../assets/img/tec-tree.png";
import tezWallet from "../../../assets/img/tez-wallet.jpg";
import inWhite from "../../../assets/img/in-white.png";

class About extends Component {
  componentWillMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <React.Fragment>
        {/* Section Tez is revolutionizing access start ***************************************************/}
        <RevolutionizingAcess tezWallet={tezWallet} imgHand={imgHand} />
        {/* Section Tez is revolutionizing access end *****************************************************/}

        {/* Section Tez vision and mission start **********************************************************/}
        <VisionAndMission imgTecTree={imgTecTree} />
        {/* Section Tez vision and mission end ************************************************************/}

        {/* Section Tez team start ************************************************************************/}
        <Team
          img={{
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
          }}
        />
        {/* Section Tez team end *********************************************************************/}

        {/* Section Tez investors start *********************************************************************/}
        <Investors img={{ planetN, omidyar, accion }} />
        {/* Section Tez investors end *********************************************************************/}
      </React.Fragment>
    );
  }
}

export default About;
