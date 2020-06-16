import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

class MenuComponent extends React.Component {

    render() {
      return (
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <NavLink  className="nav-link" to="/cadastro">Cadastrar Itens</NavLink>
                    <NavLink className="nav-link"  to="/main">Itens de Estoque</NavLink>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
      );
    }
  }


  export default MenuComponent;