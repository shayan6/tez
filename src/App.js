import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./assets/css/main-style.css";

// pasges components
import About from "./components/pages-components/about-components/about";
import Contact from "./components/pages-components/contact";
import Career from "./components/pages-components/career-components/career";
import FooterComponent from "./components/footer-components/footer";
import Header from "./components/header-components/header";
import HeaderWider from "./components/header-components/header-wider";
import Help from "./components/pages-components/help-components/help";
import Home from "./components/pages-components/home";
import Loader from "./components/loader";
import MoreProduct from "./components/pages-components/more_product";
import TezAdvance from "./components/pages-components/advance-components/tez_advance";

//pages images
// import tezLogo from './assets/img/tez.png';
// import tezLogoGreen from './assets/img/tez-green.png';
import tezLogoBlue from "./assets/img/tez-blue.png";
import fbImg from "./assets/img/fb.png";
import brickImg from "./assets/img/footer-img.png";
import tweetImg from "./assets/img/tweet.png";
import inImg from "./assets/img/in.png";
import playImg from "./assets/img/play.png";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      });
    }, 1000);
  }

  render() {
    return (
      <React.Fragment>
        <Loader isLoading={this.state.isLoading} />
        <Router>
          <div className="App">
            {/* Other Pages Routes Start ******************************************************/}

            <Route exact path="/" component={Header} />
            <Route exact path="/" component={Home} />

            <Route exact path="/tez_advance" component={Header} />
            <Route exact path="/tez_advance" component={TezAdvance} />

            <Route exact path="/more_product" component={Header} />
            <Route exact path="/more_product" component={MoreProduct} />

            <Route exact path="/help" component={HeaderWider} />
            <Route exact path="/help" component={Help} />

            <Route exact path="/contact" component={Header} />
            <Route exact path="/contact" component={Contact} />

            <Route exact path="/career" component={Header} />
            <Route exact path="/career" component={Career} />

            <Route exact path="/about" component={Header} />
            <Route exact path="/about" component={About} />
   
            {/* Other Pages Routes End   ******************************************************/}

            {/* Footer Component Start ********************************************************/}
            <FooterComponent
              footerContent={{
                tezLogoBlue,
                fbImg,
                inImg,
                tweetImg,
                playImg,
                brickImg
              }}
            />
            {/* Footer Component End ********************************************************/}
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
