import { useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import StardardLayout from "./pages/StandardLayout.jsx"
import { Home } from './pages/home.jsx';
import Cities from './pages/cities.jsx';

const router = createBrowserRouter([
  {
      path: '/',
      element: <StardardLayout />, 
      children: [
          { path: '/', element: <Home /> }, 
          { path: '/Home', element: <Home /> },
          { path: '/cities', element: <Cities /> },
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
