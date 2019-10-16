import React, {Component} from 'react';
import {Container, Row, Col, Button, Navbar, Nav, NavItem, NavbarBrand} from 'reactstrap';
import {Link} from 'react-router-dom';

/**
 * LANDWAR site
 * author: Peter Roohr
 * 
 */


class NavHeader extends Component{
  constructor(props) {
      super(props);
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
  }
  toggle() {
      this.setState({
          isOpen: !this.state.isOpen
      });
  }

  render(){
      return(
      <Row>
      <Col md={{size:12}}>
          <Container id='fixed-top' fixed='top' className="container-fluid">
              <Navbar color="secondary" light fixed='top' expand="md">
                  <NavbarBrand href="/">LANDWAR</NavbarBrand>
                  <Nav className="ml-auto" navbar>
                      <NavItem>
                          <Link to="/garage"><Button>Home</Button></Link>
                      </NavItem>
                      <NavItem>
                          <Link to="/artwork/home"><Button>About</Button></Link>
                      </NavItem>
                      <NavItem>
                          <Link to="/boardgames"><Button>FAQ</Button></Link> 
                      </NavItem>
                      <NavItem>
                          <Link to="/network"><Button>Downloads</Button></Link>
                      </NavItem>
                      <NavItem>
                          <Link to="/about"><Button>Media</Button></Link> 
                      </NavItem>
                  </Nav>
              </Navbar>
          </Container>
       </Col>
       </Row>
      );
  }
}

export default NavHeader;