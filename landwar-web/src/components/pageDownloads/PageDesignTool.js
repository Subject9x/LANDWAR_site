import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';

import NavHeader from '../main/NavHeader.js';


class PageDesignTool extends Component{

  render(){
    return(
    <Container >
      <NavHeader />
      <Row>
        <Col md={{size:6}}>
          <i><h4>Unit Design Tool</h4></i>
        </Col>
      </Row>
      <Row>
        <Col md={{size:10}}>
          <p><i>LANDWAR</i> has a statline for units much like other wargames, these stats dictate how effective the unit is at certain tasks. To generate these stats, we use the <i>Unit Design Tool</i> here.</p>
          <p>The rules for this design tool can be found -HERE- if you prefer to work offline with pencil and paper.</p>
        </Col>
      </Row>
    </Container>
    );
  }
}

export default PageDesignTool;



