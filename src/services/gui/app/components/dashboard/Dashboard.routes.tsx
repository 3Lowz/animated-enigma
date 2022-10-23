import React from 'react'
import {
  RouteObject,
  Route
} from 'react-router-dom'

import Dashboard from './Dashboard'
import DashboardPage from './Dashboard.page'
import MainDashboard from './Main.dashboard'
import SlaveDashboard from './Slave.dashboard'

const baseRoutes: Array<RouteObject> = [
  {
   path: '/dashboard',
   element: <DashboardPage />,
   children: [
    {
      path: 'index', 
      element: <Dashboard />,
    },
    {
      path: 'main', 
      element: <MainDashboard />,
    },
    {
      path: 'slave',
      element:  <SlaveDashboard />,
    },
    {
      path: '*',
      element: <>Not Found (build me)</>
    }
   ] 
  }
]
let Routes : Array<RouteObject> = Array().concat(baseRoutes);

const mapRoutes = routes => {
  return routes.map(({ path, element, children }, key) => (
    <Route
      path={path}
      key={key}
      element={element}
      children={children && mapRoutes(children)}
    />
  ));
};

// export default createBrowserRouter(Routes);
export default Routes as Array<RouteObject>;

export { mapRoutes, Routes }