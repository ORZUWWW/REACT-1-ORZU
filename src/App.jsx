
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router';
import About from './Pages/About';
import Layout from './Layout/Layout';
import Error from './Pages/Error';
import Home from './Pages/home';
import Careers from './Pages/Careers';
import CareerDetails from './Pages/Career Details';
import Contact from './Pages/Contact';

const App = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          index:true,
          element:<Home />
        },
        {
          path:"/About",
          element:<About />
        },
        {
          path:"/Careers",
          element:<Careers />
        },
        {
          path:"/CareerDetails",
          element:<CareerDetails />
        },
        {
          path:"/Contact",
          element:<Contact />
        }
      ]
    },
    {
      path:"*",
      element:<Error />
    }
  ])

    return <RouterProvider router={router} />
}

export default App
