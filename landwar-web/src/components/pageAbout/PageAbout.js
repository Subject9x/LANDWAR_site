import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';

import NavHeader from '../main/NavHeader.js';
/*
  LANDWAR website

  About Page
    What is game
    
    Dev history?

*/

class PageAbout extends Component{

  render(){
    return(
    <Container>
      <NavHeader />
      <Row>
        <Col md={{size: 6}}>
          <h3>About</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4><i>Intent</i></h4>
        </Col>
      </Row>
        
      <Row>
        <Col md={{size:6}}>
          <h4><i>Development History</i></h4>
        </Col>
      </Row>
      <Row>
        <Col md={{size:8}}>
          <p><i>LANDWAR</i> was primarily developed between 2016 and 2018, taking inspiration from a bunch of popular tabletop wargaming systems such as <i>Warhammer:40,000</i>, <i>Battletech:Alpha Strike</i>, and <i>X-Wing</i>.
          The designers of <i>LANDWAR</i> by 2016 had built up a large collection of wargame miniatures from a bunch of different games. They didn't have the time to master, memorize, and play all of the different wargame systems
          for their miniatures, thus the <i>LANDWAR</i> project was started. The main goal of the project was to deliver a universal rules set to account for a wide variety of miniatures, and to make sure every instance of the game
          was finished in about an hour or so.</p>
          <p>After 2 years of playtesting, iterating, and expanding, <i>LANDWAR</i> is ready for some real play testing by gamers other than the design team!</p>
        </Col>
      </Row>
    </Container>  
    );
  }
}


export default PageAbout;
