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
*/

class LandingPage extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
    <Container fluid={true}>
      <NavHeader />
      <Row>
        &nbsp;
      </Row>
      <Row>
        &nbsp;
      </Row>
      <Row className="justify-content-md-center">
        <Col md={{size:10}}><b><h3><i>LANDWAR:</i> an open-source approach to tabletop wargaming!</h3></b></Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md={{size:10}}><img className="img-fluid" src="..." alt="..."/>TODO-banner image</Col>
      </Row>
      <Row>
        <Col md={{size:10}}></Col>
      </Row>
    </Container>
    );
  }
}

export default LandingPage;