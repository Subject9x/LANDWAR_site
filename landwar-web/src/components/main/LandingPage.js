import React, {Component} from 'react';
import {Container, Col, Row} from 'reactstrap';

import NavHeader from './NavHeader.js';
/*
  LANDWAR website

  Landing Page
    title
    banner image
    link to current version docs
    short description
    navigation buttons
      About
      FAQ
      Downloads
      Unit Builder -> external link? internal module
*/

class LandingPage extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
    <Container fluid={true}>
      <NavHeader />
    </Container>
    );
  }
}

export default LandingPage;