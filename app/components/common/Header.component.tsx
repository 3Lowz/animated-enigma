import React from 'react'
import { NavLink } from 'react-router'
import { Button, Navbar, Nav, NavItem } from 'reactstrap'

const Header: React.FC = () => {
  // TODO: Define all the
  const routes = ['subroute', 'todo']

  return (
    <>
      <header>
        <Navbar>
          <Nav>
            <NavItem className="fixme">
              <NavLink to={'/'}>Index</NavLink>
            </NavItem>
            {routes.map((path, i) => (
              <NavItem className="fixme" key={i}>
                <NavLink to={'/' + path}>{path}</NavLink>
              </NavItem>
            ))}
          </Nav>
        </Navbar>
      </header>
    </>
  )
}

export default Header
