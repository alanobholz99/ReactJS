import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ItemListcontainer from './itemListcontainer';
import CardWidget from './cardWidget';



const NavBar = () => {
    return (
        <>



    <Navbar className='centradodenavbar' expand="lg" >
      <Container fluid>
     
        <Navbar.Brand href="#">Busca lo que gustes</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '300px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">home</Nav.Link>
            <Nav.Link href="#action2">juegos</Nav.Link>
            <NavDropdown title="Novedades" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">proximos lanzamientos</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Free to Play
              </NavDropdown.Item>
              <NavDropdown.Divider />
              
                
              
            </NavDropdown>
            <Nav.Link href="#" disabled>
              
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Escribe lo que quieres buscar"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>
          <CardWidget />
         
        </Navbar.Collapse>
        
      </Container>
     
    </Navbar>
   

        
        
        </>
    )
}

export default NavBar;
