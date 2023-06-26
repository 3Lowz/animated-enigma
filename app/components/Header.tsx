import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Navbar, Nav, NavItem } from 'reactstrap'

const Header: React.FC = () => {
  // TODO: Define all the
  const routes = ['subroute', 'dashboard', 'base']
  return (
    <>
      <header>
        <Navbar>
          {/* <NavbarBrand>
            <img src="" alt=".Logo." className="logo" />
          </NavbarBrand> */}
          <Nav>
            <NavItem className="fixme">
              <Link to={'/'}>Index</Link>
            </NavItem>
            {routes.map((path, i) => (
              <NavItem className="fixme" key={i}>
                <Button>
                  <Link to={'/' + path}>{path}</Link>
                </Button>
              </NavItem>
            ))}
          </Nav>
        </Navbar>
      </header>
    </>
  )
}

export default Header
