import React from 'react';
import Container from 'react-bootstrap/Container';
import {Nav , Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Edunesda</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="/add">Modules</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}


export default Header;