import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'reactstrap'

const Header: React.FC<any> = ({ navigate }) => {

  const routes = ['index', 'main', 'slave', 'random']

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
            {routes.map((path, i) => <NavItem className="fixme" key={i}>
                <Link to={"/dashboard/" + path}>{path}</Link>
              </NavItem>)}
          </Nav>
        </Navbar>
    </header>
  </>
}

export default Header