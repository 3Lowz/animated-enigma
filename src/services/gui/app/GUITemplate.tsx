import React, {useState, useEffect, Suspense} from "react"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import { Alert, Container } from 'reactstrap'
import IndexPage from './components/IndexPage'
import Subroute from './components/Subroute'

function GUITemplate() {
  // const [routes, setRoutes] = useState([]);
  const [router, setRouter] = useState([])
  
  // let navigate = useNavigate();
  
  const routesArr = [
    {
      // pathElement: "index",
      element: <IndexPage />,
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
    const newRouter = createBrowserRouter(newBrowserRouter);
    // @ts-ignore
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

export default GUITemplate