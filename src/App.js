// import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header-components/header.jsx';
import { Footer } from 'react-materialize';
import './assets/css/main-style.css';
import tezLogo from './assets/img/tez.png';

// pasges components
import Home from './components/pages-components/home.jsx';
import TezAdvance from './components/pages-components/tez_advance.jsx';
import MoreProduct from './components/pages-components/more_product.jsx';
import Help from './components/pages-components/help.jsx';
import Contact from './components/pages-components/contact.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* Header Component Start ********************************************************/}
          <Header />
          {/* Header Component End   ********************************************************/}

          {/* Other Pages Routes Start ******************************************************/}
          <div className="container">
            <Route exact path='/' component={Home} />
            <Route exact path='/tez_advance' component={TezAdvance} />
            <Route exact path='/more_product' component={MoreProduct} />
            <Route exact path='/help' component={Help} />
            <Route exact path='/contact' component={Contact} />
          </div>
          {/* Other Pages Routes End   ******************************************************/}

          {/* Footer Component Start ********************************************************/}
          <Footer copyrights="&copy 2015 Copyright Text"
              moreLinks={
                <a className="blue-text right" href="#!">More Links</a>
              }
              links={
                <ul >
                    <li><a className="blue-text" href="#!">About</a></li>
                    <li><a className="blue-text" href="#!">Press</a></li>
                    <li><a className="blue-text" href="#!">Career</a></li>
                    <li><a className="blue-text" href="#!">Privacy Policy</a></li>
                    <li><a className="blue-text" href="#!">Site Map</a></li>
                    <li><a className="blue-text" href="#!">Terms & Conditions</a></li>
                </ul>
              }
              className='example'
              >
              <div>
                <img src={tezLogo} alt="tez" height="100px" width="80px" />
                <h6 className="text-uppercase mb-4 font-weight-bold">A Planet N Company</h6>
              </div>
          </Footer>
          {/* Footer Component End ********************************************************/}
        </div>
      </Router>
    );
  }
}
export default App;
