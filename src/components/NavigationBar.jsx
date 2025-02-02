import React from 'react';
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

function NavigationBar({ onSearch }) {
  const location = useLocation();

  return (
    <Navbar
      expand="lg"
      className="bg-primary p-2"
      style={{ position: 'fixed', width: '100%', zIndex: 999 }}
    >
      <Container fluid>
        <Navbar.Brand style={{ fontWeight: 'bold', color: '#fff' }}>Anime Hub</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-1" style={{ maxHeight: '200px' }} navbarScroll>
            {['/home', '/anime'].map((path) => (
              <Nav.Link
                key={path}
                as={Link}
                to={path}
                className={location.pathname === path ? 'active' : ''}
                style={{
                  fontWeight: location.pathname === path ? 'bold' : 'normal',
                  color: location.pathname === path ? '#fff' : 'inherit',
                  backgroundColor: location.pathname === path ? '#333' : 'transparent',
                  borderRadius: '4px',
                  padding: '8px 12px',
                  margin: '0 5px',
                  textTransform: 'capitalize',
                }}
              >
                {path === '/home' ? 'Home' : path.replace('/', '')}
              </Nav.Link>
            ))}
          </Nav>

          <div className="d-flex">
            <Form className="d-flex me-2">
              <FormControl
                type="search"
                placeholder="Search Anime..."
                aria-label="Search"
                onChange={(e) => onSearch(e.target.value)}
              />
            </Form>
            <Button
              as={Link}
              to="/fav"
              variant="outline-dark"
              style={{
                padding: '8px 12px',
                borderRadius: '4px',
                margin: '0 5px',
                border:'2px solid'
              }}
            >
              Favorites
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
