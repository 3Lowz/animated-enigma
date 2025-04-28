import React from 'react'
import { Suspense } from 'react'
import { Provider } from 'react-redux'
// import store from './store'
import store, { newConfigStore } from './store'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { Container } from 'reactstrap'

import AppRoutes from './Routes'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
// import { Outlet } from 'react-router'

const App = () => {
  const routes = createBrowserRouter(AppRoutes, {
    future: {
      // @ts-ignore
      v7_relativeSplatPath: true,
    },
  })

  return (
    <Provider store={store}>
      <Container>
        <Suspense fallback={<div className="Loading">Loading...</div>}>
          <RouterProvider router={routes} />
        </Suspense>
      </Container>
    </Provider>
  )
}

export default App
