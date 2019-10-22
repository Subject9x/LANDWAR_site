import React, {Component} from 'react';
import {Container, Row, Col, Button, Navbar, Nav, NavItem, NavbarBrand} from 'reactstrap';
import {Link} from 'react-router-dom';

/**
 * LANDWAR site
 * author: Peter Roohr
 * Navigable header buttons for every page top.
 */


class NavHeader extends Component{

  render(){
    return(<>
    <Row>
      <Col md={{size:12}}>
        <Container id='fixed-top' fixed='top' className="container-fluid">
            <Navbar color="secondary" light fixed='top' expand="md">
                <NavbarBrand href="/">LANDWAR</NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Link to="/"><Button>Home</Button></Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/about"><Button>About</Button></Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/faq"><Button>FAQ</Button></Link> 
                    </NavItem>
                    <NavItem>
                        <Link to="/downloads"><Button>Downloads</Button></Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/media"><Button>Media</Button></Link> 
                    </NavItem>
                </Nav>
            </Navbar>
        </Container>
      </Col>
    </Row>
    <Row>
      &nbsp;
    </Row>
    <Row>
      &nbsp;
    </Row>
    <Row>
      &nbsp;
    </Row>
      </>
    );
  }
}

export default NavHeader;