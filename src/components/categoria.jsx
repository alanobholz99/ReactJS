import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import itemDetailsContainer from './ItemDetailsContainer';
import CardWidget from './CardWidget';
import { Link } from 'react-router-dom';




const Categoria = () => {
    return (
        <>
     
     <Link to={"/"} >
           <Nav.Link href="#action1">home</Nav.Link>
           
           </Link>
           <Nav.Link href="#action2">Proximamente</Nav.Link>
          <NavDropdown title="Novedades" id="navbarScrollingDropdown">
            <Link to={"/categoria/nuevos"} > 
            <NavDropdown.Item href="#action3">Nuevos</NavDropdown.Item>
           </Link>
            
            <Link  to={"/categoria/actuales"} >    
            <NavDropdown.Item href="#action4">
              Atuales
            </NavDropdown.Item>
            
            </Link>
            <NavDropdown.Divider />
            
              
            
          </NavDropdown>
        
        
        </>
          
       
    );
}

export default Categoria;
