import React from 'react'
import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import Header from './Header.dashboard'
import SideMenu from './SideMenu.dashboard'

const DashboardPage: FC<any> = ({ navigate }) => {
  console.log(`___incoming navigate in dashboardPage : `)
  return (<>
    <Header />
    {/* <SideMenu /> */}
    <div className="content">
      <Outlet />
    </div>
  </>)
}

export default DashboardPage