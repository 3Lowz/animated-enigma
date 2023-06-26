import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'reactstrap'

const PageHeader: React.FC<any> = ({ navigate }) => {
  const routes = ['1', '2']

  return (
    <>
      <header>
        <Navbar>
          {/* <NavbarBrand>
            <img src="" alt=".Logo." className="logo" />
          </NavbarBrand> */}
          <Nav>
            {routes.map((path, i) => (
              <NavItem className="fixme" key={i}>
                <Link to={'/base/' + path}>{path}</Link>
              </NavItem>
            ))}
          </Nav>
        </Navbar>
      </header>
    </>
  )
}

export default PageHeader
