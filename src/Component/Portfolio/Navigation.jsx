import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./css/Hero.css";
// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";

const Navigation = () => {
  return (
    <Navbar
      variant="info"
      expand="lg"
      className="navbar navbar-expand-lg navbar-dark shadow fixed-top"
      style={{ backgroundColor: "#4ca845" }}
    >
      <Container>
        <Navbar.Brand href="#home">ZakariyaFebriansah</Navbar.Brand>
        <Navbar.Toggle aria-controls="" />
        <Navbar.Collapse id="">
          <Nav className="ms-auto my-2 my-lg-0">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#gallery">Gallery</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
