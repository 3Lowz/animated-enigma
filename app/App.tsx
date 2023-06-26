import React from 'react'
import { Suspense } from 'react'
import { createBrowserRouter, BrowserRouter, RouterProvider } from 'react-router-dom'
import { Alert, Container } from 'reactstrap'

import DashboardRoutes from './components/dashboard/Dashboard.routes'

import AppRoutes, { mapRoutes, addBrowserRoutes } from './Routes'
import BaseRoutes from './components/page-base/index'

import './App.css'

const App = () => {
  const routes = createBrowserRouter([...AppRoutes, ...BaseRoutes])
  // TODO: fix me  .... const appRoutes = addBrowserRoutes()
  // const appRoutes = AppRoutes[0].children.concat(DashboardRoutes)
  // AppRoutes[0].children = appRoutes

  return (
    <>
      <div className="ht_wrapper_page">
        <div className="ht_page_container">
          <Container>
            <Suspense fallback={<div className="Loading">Loading...</div>}>
              <Alert>Backend Plugin Template</Alert>
              <RouterProvider router={routes} />
            </Suspense>
          </Container>
        </div>
      </div>
    </>
  )
}

export default App
