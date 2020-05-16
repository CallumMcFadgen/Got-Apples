// Package Dependences
import React, { useState } from 'react';

import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink  } from 'reactstrap';

const Example = (props) => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <React.Fragment>
      <Navbar light expand="xl" style={{  background: 'green', border: 'thin black solid' }}>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink style={{  left: '15%',  position: 'absolute'  }} href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink  style={{  left: '18%',  position: 'absolute'  }}  href="/about">About</NavLink>
            </NavItem>
            <NavItem>
            <NavLink  style={{  left: '21%',  position: 'absolute'  }}  href="/growers">Growers</NavLink>
            </NavItem>
            <NavItem>
            <NavLink  style={{  left: '24.5%',  position: 'absolute'  }}  href="/auctions">Auctions</NavLink>
            </NavItem>
            <NavItem>
            <NavLink  style={{  left: '28%',  position: 'absolute'  }}  href="/varieties">Varieties</NavLink>
            </NavItem>
            <NavItem>
            <NavLink  style={{  left: '31.5%',  position: 'absolute'  }}  href="/news">News</NavLink>
            </NavItem>
            <NavItem>
            <NavLink  style={{  left: '34%',  position: 'absolute'  }}  href="/contact">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </React.Fragment>
  )
};


export default Example;
