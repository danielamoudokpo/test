import React, { Component } from 'react';

import {Navbar , NavDropdown , Nav} from  'react-bootstrap';

import { Link, animateScroll as scroll } from "react-scroll";


class NavBar extends Component{

    render(){
        return(
            
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Mon Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
           
              <Nav className="mr-auto">
                {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> */}
              </Nav>

              <Nav.Link>
                    <Link
                    activeClass = "active"
                    to= "AboutMe-Section"
                    smooth ={true}
                    offset= {0}
                    duration = {300}
                    >
                        About 
                    </Link>
                 </Nav.Link>

              <Nav.Link>
                    <Link
                    activeClass = "active"
                    to= "Projects-Section"
                    smooth ={true}
                    offset= {0}
                    duration = {300}
                    >
                        Projets
                    </Link>
                 </Nav.Link>
              {/* <Nav> */}

                <Nav.Link>
                    <Link
                    activeClass = "active"
                    to= "Hobby-Section"
                    smooth ={true}
                    offset= {0}
                    duration = {300}
                    >
                        Hobby
                    </Link>
                 </Nav.Link>

                 <Nav.Link className= 'text-whit' href="features"> 
                    <Link
                    activeClass = "active"
                    to= "Contact-Section"
                    smooth ={true}
                    offset= {0}
                    duration = {300}
                    >
                        Contacts
                    </Link>
                 </Nav.Link>

              {/* </Nav> */}
            </Navbar.Collapse>
          </Navbar>
        )
    }
}

export default NavBar;