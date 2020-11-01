import React from "react";
import {
  Nav,
  NavDropdown,
  Button,
  FormControl,
  Navbar,
  Form,
} from "react-bootstrap";

const MyNavbar = () => {
  return (
    <Navbar bg="light" variant="light" style={{ color: "white" }} expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#shop">Catalog</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Navbar.Brand href="#home">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 138 25"
            role="presentation"
            aria-hidden="true"
            tabindex="-1"
            disabled="disabled"
            clickable="false"
            style={{ width: "100px", fill: "black" }}
          >
            <title>Ferrari</title>
            <path d="M99.1 19.7v-10c0-3.1-1.7-3.7-6.5-3.7-5.2 0-7 .7-7 4.3v1.6H90v-1.3c0-1.8.1-2.1 2.4-2.1 1.9 0 2 .2 2 2.1v3.6h-4.6c-3.6 0-4.7 1.7-4.7 3.7h4.5v-.1c0-.9.6-1.7 1.5-1.7h3.4v4c0 1.4-.7 1.7-1.7 1.7H91c-1.1 0-1.5-.7-1.5-1.7v-2.2H85v2.5c0 2.1 1.6 3.8 4.1 3.8h11.8v-2.7h-1.8v-1.8zm36.6 1.9V6.4H129v2.5h1.9v12.7H129v2.6h8.5v-2.6h-1.8zM118.8 6c-2.5 0-4.1 3.1-5.2 4.4V6.3H107v2.5h1.8v12.7H107v2.7h8.2v-2.7h-1.7v-6.8c0-.6 3.9-5.5 3.9-5v6.8h4.6V8.9c0-1.8-1.1-2.9-3.2-2.9m-88.3 8.6h-4.7V9.8c0-.9.3-1.4 1.4-1.4h2c.8 0 1.3.4 1.3 1v5.2zm-2-8.6h-.7C22.4 6 21 7.2 21 10.3v10c0 3.4 2 4 6.9 4.1h.5c5.3-.1 6.9-.5 6.9-3.7v-2.6h-4.6v1.3c0 1.8-.3 1.9-2.5 1.9-2.6 0-2.5-.2-2.4-1.9v-3.1h9.6V9.6c0-2.5-1.9-3.6-6.9-3.6zM131 3.2h4.9V0H131v3.2zM.7 3.2h2.8v18.9H0v2.6h13v-2.6H8.6v-8.4h2.5v2.4h3V8.6h-3v2.2H8.6V3.2h118.6V0H.7v3.2zM53.8 6c-2.5 0-4.1 3.1-5.2 4.4V6.3H42v2.5h1.8v12.7H42v2.7h8.2v-2.7h-1.7v-6.8c0-.6 3.9-5.5 3.9-5v6.8H57V8.9C57 7.1 55.9 6 53.8 6m21 0c-2.5 0-4.1 3.1-5.2 4.4V6.3H63v2.5h1.8v12.7H63v2.7h8.2v-2.7h-1.7v-6.8c0-.6 3.9-5.5 3.9-5v6.8H78V8.9C78 7.1 76.9 6 74.8 6"></path>
          </svg>
        </Navbar.Brand>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
