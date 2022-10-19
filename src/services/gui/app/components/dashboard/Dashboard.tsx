import React from 'react'
import { FC } from 'react'
import { Outlet } from 'react-router'
import { Routes } from 'react-router-dom'

import DashboardRoutes, { mapRoutes } from './Dashboard.routes'
import Header from './Header.dashboard'


const Dashboard: FC = () => {
  return (<>
    <Header />
    <div className="content">
      <Routes>
        {mapRoutes(DashboardRoutes)}
      </Routes>
      <Outlet />
    </div>
  </>)
}

export default Dashboard