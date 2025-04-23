import React, { Suspense } from 'react'
import { RouteObject, Route, Routes } from 'react-router-dom'
import TemplatePage from './components/pages/Template.page.component'
import NotFoundPage from './components/pages/NotFound.page.component'

// import baseRoutes from './components/page-base/index'
// import dashboardRoutes from './components/dashboard/index'

import TodoPage from './components/pages/Todo.page.component'

const internalRoutes: Array<RouteObject> = [
  {
    path: '/',
    element: <TemplatePage />,
    //  loader: async () => { message: 'test loader' },  // Can't remember when I saw it and what is used for
    children: [
      // {
      //   path: '/subroute',
      //   element: <SubroutePage />,
      // },
      {
        path: '/todo',
        index: true,
        element: <TodoPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
  {
    path: '*',
    element: <h1>Error</h1>,
  },
]

// Concat-ing under development pages
internalRoutes[0].children = Array().concat(internalRoutes[0].children) // , dashboardRoutes, baseRoutes)

let appRoutes: Array<RouteObject> = Array().concat(internalRoutes)

/**
 * Helpers
 */
function addBrowserRoutes(routes: Array<RouteObject>): void {
  appRoutes = Array().concat(appRoutes, routes)
}

// TODO: function addBrowserChildrenRoutes()

// Work around for @remix/react-router V6, see: https://github.com/remix-run/react-router/issues/7421
// @ts-ignore
const mapRoutes = (routes) => {
  // @ts-ignore
  return routes.map(({ path, element, children }, key) => (
    <Route path={path} key={key} element={element} children={children && mapRoutes(children)} />
  ))
}

export { mapRoutes, addBrowserRoutes }

export default appRoutes as Array<RouteObject>
