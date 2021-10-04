import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './header.css'


const Header = () => {
    return (
        
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home"><span className='text-warning'>Online</span> 
  <span className='text-danger'>School.CoM</span>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto nav-bar">
     <NavLink to='/home'>
     <Nav.Link href="#home">Home</Nav.Link>
     </NavLink>
      <NavLink to='/courses'>
      <Nav.Link href="#pricing">Courses</Nav.Link>
      </NavLink>
      <NavLink to='/about'>
      <Nav.Link href="#about">About</Nav.Link>
      </NavLink>
      
      
    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
      
    );
};

export default Header;