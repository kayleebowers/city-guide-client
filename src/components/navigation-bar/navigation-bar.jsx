import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";

export const NavigationBar = () => {
    return (
        <Navbar expand="md" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand as={Link} to="/">Pegasus City Guide</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link href="#link">Profile</Nav.Link>
                {/* dropdown menu */}
                <NavDropdown title="Explore the city" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to={`/activities/types/Arts`}>Entertainment</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Restaurants
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Outdoors</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Date night
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
};