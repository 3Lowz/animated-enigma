import React, { useState, useEffect, Suspense}  from "react"
import type { RouteObject } from 'react-router-dom'
import { RouteProps } from 'react-router'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import { Alert, Container } from 'reactstrap'

import Index from './components/Index'
import Subroute from './components/Subroute'

// interface RoutePros {
//   name?: String;
// }

function App() {
  
  const [router, setRouter]: [RouteObject[], any] = useState([])
   
  const routesArr = [
    {
      // pathElement: "index",
      element: <Index />,
      pathRouter: '/',
      name:'index'
    },
    {
      // pathElement: "subroute",
      element: <Subroute />,
      pathRouter: '/subroute',
      name:'subroute'
    }
  ]

  const createRouter = () => {

    const newBrowserRouter = routesArr.map( obj => {
      const {element, pathRouter, name} = obj;

      return  {
        path: pathRouter,
        element: element,
        name: name
      }
    });
    const newRouter:any = createBrowserRouter(newBrowserRouter);
    setRouter(newRouter)
  }

  useEffect(() => {
    createRouter()
  },[])

  useEffect(() => {console.log('router', router)},[router])
  
  return<>
    <div className="ht_wrapper_page">
      <div className="ht_page_container">
      <Container>
        <Alert>Backend Header</Alert>
        {
          Object.keys(router).length > 0 &&
          <Suspense fallback={<div className="loading" />}>
            <RouterProvider
              // @ts-ignore
              router={router}
            >
            </RouterProvider>
          </Suspense>
        }
      </Container>
      </div>
    </div>
  </>
}

export default App;