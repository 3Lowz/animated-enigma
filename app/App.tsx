import React from 'react'
import { Suspense } from 'react'
import { Provider } from 'react-redux'
import { configureStore } from './store'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Container } from 'reactstrap'

import AppRoutes from './Routes'

import './App.css'

const App = () => {
  const routes = createBrowserRouter(AppRoutes)

  return (
    <Provider store={configureStore({})}>
      <Container>
        <Suspense fallback={<div className="Loading">Loading...</div>}>
          <RouterProvider router={routes} />
        </Suspense>
      </Container>
    </Provider>
  )
}

export default App
