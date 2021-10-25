import React from "react";
import {
    Navbar,
    Nav,
    Container
} from "react-bootstrap"

const Header = () => {
    return (
        <Navbar className="nav-style" collapseOnSelect expand="lg" bg="white" variant="light">
  <Container>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#shop">Shop</Nav.Link>
      <Nav.Link href="#read">Read</Nav.Link>
      <Nav.Link href="#stores">Stores</Nav.Link>
      <Nav.Link href="#search">Search</Nav.Link>
    </Nav>
    <Nav className="ml-auto">
      <Nav.Link href="#login" className="me-2">Login</Nav.Link>
      <Nav.Link eventKey={2} href="#cart" className="me-2">
        Cart
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};
export default Header;