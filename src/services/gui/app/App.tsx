import React, { Suspense }  from "react"
import {
  createMemoryRouter,
  createBrowserRouter,
  RouterProvider,
  MemoryRouter
} from "react-router-dom"
import { Alert, Container } from 'reactstrap'

import Routes from './Routes'

const App = () => {

  const routes = createMemoryRouter(Routes)

  return (<>
    <div className="ht_wrapper_page">
      <div className="ht_page_container">
        <Container>
          <Suspense fallback={<div className="loading" />}>
            §Plugin
            <Alert>Backend Plugin Template</Alert>
            <RouterProvider
              router={routes}
            />
          </Suspense>
        </Container>
      </div>
    </div>
  </>)
}

export default App;