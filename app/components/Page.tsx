import React from 'react'
import { Outlet } from 'react-router'
import Header from './Header'

const Page: React.FC = () => {
  return (<>
    <Header />
    <Outlet />
  </>)
}

export default Page