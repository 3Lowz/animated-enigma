import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import { createMemoryRouter } from 'react-router-dom'
import App from './App'
// import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);


const mount = (
    {
      mountPoint, 
      initialPathname,
      historyStrategy,
    }: {
      mountPoint: HTMLElement,
      initialPathname?: string,
      historyStrategy?: any,
    }
  ) => {

    //   const routes = createMemoryRouter(Routes)
    const history = historyStrategy || null
  
    const root = createRoot(mountPoint);
    root.render(<App />);
  };
  
  export { mount };