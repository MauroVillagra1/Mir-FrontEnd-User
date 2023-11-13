import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Button } from "react-bootstrap";
import "./Nav_bar.css";
import { NavLink } from "react-router-dom";

function Nav_bar() {
  return (
    <Navbar expand="lg" className="background-navbar">
      <NavLink to="./" className="logo-link-nav">
      <img
        className="img-icono-nav"
        src="https://res.cloudinary.com/dco2buhwt/image/upload/v1699661791/Mir/Icono/rkeuq02jzt8tlloqkmgs.png"
        alt="icono-inicio"
      />
      </NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="opciones-botones">
        <Nav className="me-auto ">
          <NavLink to="./Anuncios" className="button-link-nav ">
            <Button className="background-botones-navbar">Anuncios</Button>
          </NavLink>
          <NavLink to="./Noticias" className="button-link-nav ">
            <Button className="background-botones-navbar">Noticias</Button>
          </NavLink>
          <NavLink to="./Cursos" className="button-link-nav ">
            <Button className="background-botones-navbar">Cursos</Button>
          </NavLink>
          <NavLink to="./Propuestas" className="button-link-nav ">
            <Button className="background-botones-navbar">Propuestas</Button>
          </NavLink>
          <NavLink to="./SobreNosotros" className="button-link-nav ">
            <Button className="background-botones-navbar">
              Sobre Nosotros
            </Button>
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Nav_bar;
