import React, { Suspense } from 'react';
import {
  RouteObject,
  Route
} from 'react-router-dom'

import Page from './components/Page'
import Subroute from './components/Subroute'
import NotFound from './components/NotFound'

const baseRoutes: Array<RouteObject> = [
  {
   path: '/',
   element: <Page />,
   loader: async () => { message: 'test loader' },  // Can't remember when I saw it and what is used for
   children: [

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

function addBrowserRoutes(routes:Array<RouteObject>): void {
    Routes = Array().concat(Routes, routes)
}

// Work around for @remix/react-router V6, see: https://github.com/remix-run/react-router/issues/7421
const mapRoutes = routes => {
  return routes.map(({ path, element, children }, key) => (
    <Route
      path={path}
      key={key}
      element={element}
      children={children && mapRoutes(children)}
    />
  ));
};

// export default createBrowserRouter(Routes);
export default Routes as Array<RouteObject>;

export { mapRoutes, addBrowserRoutes }