import React from 'react'
import {
  RouteObject,
  Route
} from 'react-router-dom'

import Index from './Index.dashboard.component'
import DashboardPage from './Page.dashboard.component'
import Slave from './Slave.dashboard.component'

const dashboardRoutes: Array<RouteObject> = [
  {
   path: '/dashboard',
   element: <DashboardPage />,
   children: [
    {
      path: 'index', 
      element: <Index />,
    },
    {
      path: 'slave',
      element:  <Slave />,
    },
    {
      path: '*',
      element: <>Not Found (build me)</>
    }
   ] 
  }
]

export default dashboardRoutes
