import React from 'react'
import { Outlet } from 'react-router'
import Header from './Header'

const Page: React.FC<any> = ({ navigate }) => {
  return (<>
    <Header navigate={navigate} />
    <Outlet />
  </>)
}

export default Page