import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useLocation } from "react-router-dom";
import { Link } from "react-scroll";
import "./Nav-bar.scss";

export const Nav_bar = () => {
  const location = useLocation();

  return (
    <Navbar collapseOnSelect expand="lg" className="navBar_Design">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Home
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {location.pathname === "/menu" ? (
            <Nav className="nav-menu">
              <Nav.Link href="#primeros">#Primeros</Nav.Link>
              <Nav.Link href="#segundos">#Segundos</Nav.Link>
              <Nav.Link href="#postres">#Postres</Nav.Link>
              <Nav.Link href="#bebidas">#Bebidas</Nav.Link>
            </Nav>
          ) : (
            <Nav className="me-auto"></Nav>
          )}
          <Nav>
            <Nav.Link as={Link} to="/menu">
              Menú
            </Nav.Link>
            <Nav.Link as={Link} to="/contacto">
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
