import React from 'react'
import { RouteObject, Route } from 'react-router-dom'

import PageBase from './Page.base'
import PageOne from './Page.one'
import PageTwo from './Page.two'

const baseRoutes: Array<RouteObject> = [
  {
    path: '/base',
    element: <PageBase />,
    children: [
      {
        path: '',
        element: <PageOne />,
      },
      {
        path: '1',
        element: <PageOne />,
      },
      {
        path: '2',
        element: <PageTwo />,
      },
      {
        path: '*',
        element: <>Not Found (build me)</>,
      },
    ],
  },
]
let Routes: Array<RouteObject> = Array().concat(baseRoutes)

const mapRoutes = (routes) => {
  return routes.map(({ path, element, children }, key) => (
    <Route path={path} key={key} element={element} children={children && mapRoutes(children)} />
  ))
}

// export default createBrowserRouter(Routes);
export default Routes as Array<RouteObject>

export { mapRoutes, Routes }
