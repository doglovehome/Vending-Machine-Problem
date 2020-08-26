import React from 'react';
import {  Navbar, Nav } from 'react-bootstrap';

const Example = (props) => {

  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">V-M-P</Navbar.Brand>
        <Nav className="mr-sm-2" variant="outline-info">
            <Nav.Link href="https://github.com/doglovehome/Vending-Machine-Problem">Github</Nav.Link>
        </Nav>
        </Navbar>
    </div>
  );
}

export default Example;