import React from 'react';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';




const Categoria = () => {
    return (
        <>

     <Link style={{ textDecoration: "none" }} to={"/"}  >
           <Nav.Link  href="#action1"  >Inicio</Nav.Link>
           
           </Link>
           <Nav.Link  href="#action2" >Próximo</Nav.Link>
          <NavDropdown  title="Novedades" id="navbarScrollingDropdown">
          <div >
            <Link className='colortitulo'style={{ textDecoration: "none" }}  to={"/categoria/nuevos"} > 
            <NavDropdown.Item >Nuevos</NavDropdown.Item>
           </Link>
            
            <Link className='colortitulo' style={{ textDecoration: "none" }} to={"/categoria/actuales"} >    
            <NavDropdown.Item  href="#action4">
              Antiguos
            </NavDropdown.Item>
       
            </Link>
            </div>
            
              
            
          </NavDropdown>
  
     
        
        
        </>
          
       
    );
}

export default Categoria;
