import React from 'react'
import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import Header from './Header.dashboard'

const DashboardPage: FC<any> = ({ navigate }) => {
  console.log(`___incoming navigate in dashboardPage : `)
  return (<>
    <Header navigate={navigate} />
    Side menu
    <div className="content">
      Content:
      <Outlet />
    </div>
  </>)
}

export default DashboardPage