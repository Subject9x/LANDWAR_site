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

class PageLanding extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
    <Container fluid={true}>
      <NavHeader />
      <Row className="justify-content-md-center">
        <Col md={{size:10}}><b><h3><i>LANDWAR!</i></h3></b></Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md={{size:10}}><img className="img-fluid" src="..." alt="..."/>TODO-banner image</Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md={{size:10}}><p>
          <i>LANDWAR</i> is an open-source set of rules for skirmish tabletop wargaming. The primary goal of the rules is to allow you, the players, to use any and all 6mm, 15mm, or 28mm miniatures
          in a single game system. It is a rules set to satisfy your coolest ideas for miniatures combat in a fast-and-fun way.</p>
          <p>Being open-source means that the rules are provided as-is for you to use and modify, we encourage you to add rules as-needed to simulate any ideas for your miniature wargaming.</p>
        </Col>
      </Row>
    </Container>
    );
  }
}

export default PageLanding;