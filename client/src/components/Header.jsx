import React from 'react'
import "../css/Header.css"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
   <>
   <Navbar expand="lg" className="bg-body-tertiary" id='headerMain'>
      <Container fluid>
        <Navbar.Brand as={Link} to={'home'}>TrustBank</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
          >
            <Nav.Link as={Link} to={'home'}>Home</Nav.Link>
            <Nav.Link as={Link} to={'home'}>Personal</Nav.Link>
            <Nav.Link as={Link} to={'home'}>NRI</Nav.Link>
            
            <Nav.Link as={Link} to={'home'}>Help</Nav.Link>
            <Nav.Link as={Link} to={'home'}>Complaints</Nav.Link>
          </Nav>
          <Nav className="ms-auto d-flex align-items-center">
            <Button as={Link} to={'login'} variant='outline-success' > Login</Button>
            <span className="mx-2">|</span>
             <Button as={Link} to={'signup'} variant="primary">Register</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
   
   </>
  )
}

export default Header