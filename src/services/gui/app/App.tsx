// host/src/App.js
import React, {useState, useEffect, Suspense} from "react"
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom"
import {Alert, Container} from 'reactstrap'
// import Loader from "./Components/Loader";
import Index from './components/Index'
import Subroute from './components/Subroute'

function App() {
  // const [routes, setRoutes] = useState([]);
  const [router, setRouter] = useState([])
  
  // let navigate = useNavigate();
  
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
    const newRouter = createBrowserRouter(newBrowserRouter);
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