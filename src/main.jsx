import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Roots from './General Components/Roots'
import Home from './Homepage/Home'
import Login from './General Components/Login'
import Resister from './General Components/Resister'





const router=createBrowserRouter([

{
  path:'/',
  element:<Roots></Roots>,
  children:[
    {
      path:'/',
      element:<Home></Home>
    },
    {
      path:'/login',
      element:<Login></Login>
    },
    {
      path:'/resister',
      element:<Resister></Resister>
    }
  ]
}








])











ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="max-w-6xl mx-auto">
    <RouterProvider router={router}>

</RouterProvider>
    </div>

  </React.StrictMode>,
)
