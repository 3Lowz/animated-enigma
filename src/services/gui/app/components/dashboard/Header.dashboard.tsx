import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'reactstrap'
import { Outlet } from 'react-router'

const Header: React.FC = () => {
  const routes = ['main', 'slave', 'random']
  return <>
    <header>
        <Navbar>
          {/* <NavbarBrand>
            <img src="" alt=".Logo." className="logo" />
          </NavbarBrand> */}
          <Nav>
            <NavItem className="fixme">
              <Link to={"/"}>Index</Link>
            </NavItem>
            {routes.map((path, i) => <NavItem className="fixme" key={i}> <Link to={"/dashboard/" + path}>{path}</Link> </NavItem>)}
          </Nav>
        </Navbar>
    </header>
  </>
}

export default Header