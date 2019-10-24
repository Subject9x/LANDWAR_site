import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';

import NavHeader from '../main/NavHeader.js';

/*
LANDWAR website
Page: Media
*/

class PageMedia extends Component{

  render(){
    return(
    <Container>
      <NavHeader />
      <Row>
        <Col md={{size: 6}}>
          <h3>Media and Showcase</h3>
        </Col>  
      </Row> 
      <Row>
        
      </Row>
    </Container>
    );
  }
}

export default PageMedia;