import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Footer } from 'react-materialize';
import './assets/css/main-style.css';
import tezLogo from './assets/img/tez.png';

// pasges components
import About from './components/pages-components/about';
import Contact from './components/pages-components/contact';
import Header from './components/header-components/header';
import HeaderWider from './components/header-components/header-wider';
import Help from './components/pages-components/help';
import Home from './components/pages-components/home';
import Loader from './components/loader';
import MoreProduct from './components/pages-components/more_product';
import TezAdvance from './components/pages-components/tez_advance';

class App extends Component {
  
  constructor(){
    super();
    this.state = {
      isLoading: true
    }
  }

  componentDidMount(){
    setTimeout(() => {   
      this.setState({
        isLoading: false
      });
    }, 1000);
  }
  
  render() {
    return (
      <React.Fragment>
        <Loader isLoading = {this.state.isLoading} />
        <Router>
          <div className="App">
            {/* Other Pages Routes Start ******************************************************/}
              
              <Route exact path='/' component={ Header} />
              <Route exact path='/' component={ Home} />

              <Route exact path='/tez_advance' component={ Header} />
              <Route exact path='/tez_advance' component={TezAdvance} />
              
              <Route exact path='/more_product' component={ Header} />
              <Route exact path='/more_product' component={MoreProduct} />
              
              <Route exact path='/help' component={HeaderWider} />
              <Route exact path='/help' component={Help} />
              
              <Route exact path='/contact' component={ Header} />
              <Route exact path='/contact' component={Contact} />
              
              <Route exact path='/about' component={Header} />
              <Route exact path='/about' component={About} />
            {/* Other Pages Routes End   ******************************************************/}

            {/* Footer Component Start ********************************************************/}
            <Footer copyrights="&copy 2015 Copyright Text"
                moreLinks={
                  <a className="blue-text right" href="#!">More Links</a>
                }
                links={
                  <ul >
                      <li><a className="blue-text" href="/about">About</a></li>
                      <li><a className="blue-text" href="/about">Press</a></li>
                      <li><a className="blue-text" href="/about">Career</a></li>
                      <li><a className="blue-text" href="/about">Privacy Policy</a></li>
                      <li><a className="blue-text" href="/about">Site Map</a></li>
                      <li><a className="blue-text" href="/about">Terms & Conditions</a></li>
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
      </React.Fragment>
    );
  }
}
export default App;
