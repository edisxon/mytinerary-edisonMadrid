import { useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import StardardLayout from "./pages/StandardLayout.jsx"
import { Home } from './pages/Home.jsx';
import Cities from './pages/Cities.jsx';
import Details from './pages/Details.jsx';

const router = createBrowserRouter([
  {
      path: '/',
      element: <StardardLayout />, 
      children: [
          { path: '/', element: <Home /> }, 
          { path: '/Home', element: <Home /> },
          { path: '/cities', element: <Cities /> },
          {path: '/details', element: <Details />},
      ],
  },
]);


function App() {


  return (
    <>
     <RouterProvider router={router} />

      
    </>
  )
}



export default App
