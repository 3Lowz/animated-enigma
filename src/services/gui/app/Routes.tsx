import type { Component } from 'react'
import React, { Suspense } from 'react';
import {
  RouteObject
} from 'react-router-dom'
// import Home from './components/Home'
// import Loader from './components/Loader'
import Main from './components/Main'
import Page from './components/Page'
import Subroute from './components/Subroute'
import NotFound from './components/NotFound'


// const Main = React.lazy(() => import('./components/Main'))
// const Page = React.lazy(() => import('./components/Page'))
// const Subroute = React.lazy(() => import('./components/Subroute'))
// const NotFound = React.lazy(() => import('./components/NotFound'))

// const PluginApp = React.lazy(() => {})

const baseRoutes: Array<RouteObject> = [
  {
   path: '/',
   element: <Page />,
   children: [
    {
      path: '/main', 
      element: <Main />,
    },
    {
      path: '/subroute',
      element:  <Subroute />,
    },
    {
      path: '*',
      element: <NotFound />
    }
   ] 
  }
]
let Routes : Array<RouteObject> = Array().concat(baseRoutes);

export function addBrowserRoutes(routes:Array<RouteObject>): void {
    Routes = Array().concat(Routes, routes)
}

// export default createBrowserRouter(Routes);
export default Routes as Array<RouteObject>;
