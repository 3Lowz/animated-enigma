import React, { Suspense } from 'react'
import { RouteObject, Route, Routes } from 'react-router-dom'

import Page from './components/Page'
import Subroute from './components/Subroute'
import NotFound from './components/NotFound'

import baseRoutes from './components/page-base/index'

const internalRoutes: Array<RouteObject> = [
  {
    path: '/',
    element: <Page />,
    //  loader: async () => { message: 'test loader' },  // Can't remember when I saw it and what is used for
    children: [
      {
        path: '/subroute',
        element: <Subroute />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]
let appRoutes: Array<RouteObject> = Array().concat(internalRoutes)
appRoutes = appRoutes.map((route) => {
  route.children = Array().concat(route.children, baseRoutes)
  return route
})

function addBrowserRoutes(routes: Array<RouteObject>): void {
  appRoutes = Array().concat(appRoutes, routes)
}
// TODO: function addBrowserChildrenRoutes()

// Work around for @remix/react-router V6, see: https://github.com/remix-run/react-router/issues/7421
const mapRoutes = (routes) => {
  return routes.map(({ path, element, children }, key) => (
    <Route path={path} key={key} element={element} children={children && mapRoutes(children)} />
  ))
}

// export default createBrowserRouter(Routes);
export default appRoutes as Array<RouteObject>

export { mapRoutes, addBrowserRoutes }
