import React from 'react'
import { Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Alert, Container } from 'reactstrap'

import AppRoutes from './Routes'
// TODO: move to ./Routes
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
              <RouterProvider router={routes} />
            </Suspense>
          </Container>
        </div>
      </div>
    </>
  )
}

export default App
