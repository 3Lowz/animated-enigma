import React from 'react'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
  const routes = ['main', 'subroute']
  return <>
    <header>
      <ul>
        <li>
          <Link to={'/'}>Index</Link>
        </li>
          {routes.map((path, i) => <li key={i}> <Link to={"/" + path}>{path}</Link> </li>)}
      </ul>
    </header>
  </>
}

export default Header