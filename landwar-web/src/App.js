import React, {Component} from 'react';
import { createBrowserHistory } from "history";
import { Route, Router, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import LandingPage from './components/main/LandingPage.js';
/*
LANDWAR website
author: Peter Roohr
*/

const history= createBrowserHistory();

const Routing= (props) =>{
  return(
  <Router history={history} >
      <Switch>
          <Route path="/" exact component={LandingPage}/>
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
