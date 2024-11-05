import React from 'react'
import { Navbar, Nav, Button, Image } from 'react-bootstrap';

 
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const Navigation = () => {
  return (
    <Navbar className=" bg-info p-3 justify-content-between " expand="lg" >
 <Navbar.Brand href="#home">
    
    
     <Image src="vite.svg" alt="Logo" height="40px" />
    </Navbar.Brand>
    
    <Nav className="ml-auto">
      
    <Nav.Link href="#Skills">Skills</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
      <Nav.Link href="#mentor">Mentorship</Nav.Link>
      <Button variant="outline-primary">say Hello</Button>
      </Nav>
    </Navbar>
    
  )
}

export default Navigation