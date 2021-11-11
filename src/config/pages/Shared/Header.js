import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Useauth from  '../../../hooks/Useauth'

const Header = () => {
    const {user,Signout,admin} = Useauth()
    return (
        <Navbar  fixed='top' collapseOnSelect expand="lg" className="navbars m-0" variant="dark">
        <Container>
        <Navbar.Brand href="#home"> <h2 className="h">Motorcycle <span className="h-span text-danger">vally</span></h2> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
        <Nav.Link className="text-white fw-bold"  as={Link} to="/home">Home</Nav.Link>
      <Nav.Link as={Link}  className=" text-white fw-bold" to="/explore">explore</Nav.Link>
    
     
     
     {  admin &&    user?.email  &&  <NavDropdown title="admin-dashboard" id="basic-nav-dropdown">
          <NavDropdown.Item as={Link} to="/manageorder">manageorder</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/manageproduct">manage product</NavDropdown.Item>
          <NavDropdown.Item as={Link} to='/makeadmin'>make admin</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/addservice">add product</NavDropdown.Item>
         
   
        </NavDropdown>}
       
      
        {
            admin && ' ' ||  user?.email && <Nav.Link as={Link}  className=" text-white fw-bold" to="/dashboard">dashboard</Nav.Link>
        } 
      
      
        { user?.email ? <Link to="/home"><button onClick={Signout} className="logout mt-1 btnm btn-danger">logout</button></Link> : <Nav.Link  className="text-danger login fw-bold" as={Link} to="/login">login</Nav.Link> }
         {
          user?.displayName?   <p className="mt-2 text-white ms-1">  as: <span className="fw-bold text-info"> {user.displayName}</span></p> :
          <p className="mt-2 text-white">as: <span className="fw-bold text-info"> {user.email}</span></p>
        }
        
        
        
        
        </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar> 
    );
};

export default Header;