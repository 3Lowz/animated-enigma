import React from 'react'
import { Outlet } from 'react-router'
import Header from './Header.component'
import SideBar from './common/SideBar.common'

const PageTemplate: React.FC = () => {
  return (<>
    <Header />
    <SideBar layoutType="vertical" />
    <Outlet />
  </>)
}

export default PageTemplate