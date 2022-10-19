import React from 'react'
import { Suspense }  from "react"
import {
  BrowserRouter,
  Routes
} from "react-router-dom"
import { Alert, Container } from 'reactstrap'

import DashboardRoutes from './components/dashboard/Dashboard.routes'
import AppRoutes, { mapRoutes, addBrowserRoutes } from './Routes'

import './App.css'

const App = () => {

  // const routes = createMemoryRouter(Routes)
  // TODO: fix me  .... const appRoutes = addBrowserRoutes()
  const appRoutes = AppRoutes[0].children.concat(DashboardRoutes)
  AppRoutes[0].children = appRoutes

  return (<>
    <div className="ht_wrapper_page">
      <div className="ht_page_container">
        <Container>
          <Suspense fallback={<div className="Loading">Loading...</div>}>
            <Alert>Backend Plugin Template</Alert>
            <BrowserRouter>
              <Routes>
                {mapRoutes(AppRoutes)}
              </Routes>
            </BrowserRouter>
          </Suspense>
        </Container>
      </div>
    </div>
  </>)
}

export default App;