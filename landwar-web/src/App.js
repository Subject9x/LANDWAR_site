import React, {Component} from 'react';
import './App.css';

/*
  LANDWAR website
*/

class App extends Component {
  render(){
    return(
      <Routing />
    );
  }
}
export default App;

const Routing = (props) =>{
  return(
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={HomePage}/>
      </Switch>
    </Router>
  );
}
