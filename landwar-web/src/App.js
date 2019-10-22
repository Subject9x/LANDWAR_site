import React, {Component} from 'react';
import { createBrowserHistory } from "history";
import { Route, Router, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import PageLanding from './components/main/PageLanding.js';
import PageDownloads from './components/pageDownloads/DownloadsPage.js';
import PageAbout from './components/pageAbout/PageAbout.js';
import PageFAQ from './components/pageFAQ/PageFAQ.js';
import PageMedia from './components/media/PageMedia.js';
/*
LANDWAR website
author: Peter Roohr
*/

const history= createBrowserHistory();

const Routing= (props) =>{
  return(
  <Router history={history} >
      <Switch>
          <Route path="/" exact component={PageLanding}/>
          <Route path="/downloads" exact component={PageDownloads}/>
          <Route path="/about" exact component={PageAbout} />
          <Route path="/faq" exact component={PageFAQ} />
          <Route path="/media" exact component={PageMedia} />
      </Switch>
  </Router>
  );
}

class App extends Component {
  render(){
    return(
      <Routing />
    );
  }
}
export default App;
