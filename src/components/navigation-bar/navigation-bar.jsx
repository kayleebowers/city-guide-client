import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

export const NavigationBar = ({onLogout, user}) => {
  return (
    <Navbar expand="md" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Pegasus City Guide
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            {/* direct users to login with no user */}
            { !user && (
              <Nav.Link as={Link} to="/login">Profile</Nav.Link>
            )}
            { user && (
              <Nav.Link as={Link} to={`/users/${user._id}`}>Profile</Nav.Link>
            )}
            {/* dropdown menu */}
            <NavDropdown title="Explore the city" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to={`/activities/types/Arts`}>
                Entertainment
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={`/activities/types/Restaurant`}>
                Restaurants
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={`/activities/types/Outdoors`}>Outdoors</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={`/activities/types/Date%20Night`}>Date night</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        {/* user routes */}
        <Nav>
          { user && (
            <Nav.Link as={Link} to="/" onClick={onLogout}>Logout</Nav.Link>
          )}
          { !user && (
            <>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <Nav.Link as={Link} to="/users">Sign up</Nav.Link>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};
