import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Roots from './General Components/Roots'
import Home from './Homepage/Home'
import Login from './General Components/Login'
import Resister from './General Components/Resister'
import Authprovider from './General Components/Authprovider'
import Collection from './General Components/Phonecollection/Collection'
import {
  QueryClient,
  QueryClientProvider
 
}from '@tanstack/react-query'
import Details from './General Components/Phonecollection/Details'
import Dashboard from './Dashboard/Dashboard'
import Mycart from './Dashboard/UserBoard/Mycart'
import Message from './Dashboard/UserBoard/Message'
import Addproduct from './Dashboard/AdminBoard/Addproduct'
import Alluser from './Dashboard/AdminBoard/Alluser'
import Update from './Dashboard/AdminBoard/Update'
import Inbox from './Dashboard/AdminBoard/Inbox'
import Replay from './Dashboard/AdminBoard/Replay'
import Allreplay from './Dashboard/UserBoard/Allreplay'
import Payment from './Dashboard/UserBoard/Payment/Payment'
import PaymentHistory from './Dashboard/UserBoard/Payment/PaymentHistory'
import AdminDashboard from './Dashboard/AdminBoard/AdminDashboard'
import Userprofile from './Dashboard/UserBoard/Userprofile'
import UserPrivateRoute from './General Components/PrivateRoute/UserPrivateRoute'



const queryClient = new QueryClient()
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
    },
    {
      path:'/collection',
      element:<Collection></Collection>
    },
    {
      path:'/detail/:id',
      element:<UserPrivateRoute><Details></Details></UserPrivateRoute>
    },
    {
      path:'/update/:id',
      element:<Update></Update>
    }                

  ]
},
{
  path:'dashboard',
  element:<UserPrivateRoute><Dashboard></Dashboard></UserPrivateRoute>,
  children:[
    
            //  USER ROUTE


     {
      path:'cart',
      element:<Mycart></Mycart>
     },
     {
      path:'message',
      element:<Message></Message>
     },
     {
      path:'adminReplay',
      element:<Allreplay></Allreplay>
     },
     {
      path:'payment',
      element:<Payment></Payment>
     },
     {
        path:'history',
        element:<PaymentHistory></PaymentHistory>

     },
     {
      path:'profile',
      element:<Userprofile></Userprofile>
     },

                    // ADMIN ROUTE

    {
      path:'product',
      element:<Addproduct></Addproduct>
    },
    {
      path:'users',
      element:<Alluser></Alluser>
    },
    {
      path:'inbox',
      element:<Inbox></Inbox>
    },
    {
      path:'replay/:messengerEmail',
      element:<Replay></Replay>
    },
    {
      path:'admin',
      element:<AdminDashboard></AdminDashboard>
    }




  ]
}








])











ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
   <QueryClientProvider client={queryClient}>
   <div className="max-w-6xl mx-auto">
    <RouterProvider router={router}>

</RouterProvider>
    </div>
   </QueryClientProvider>

    </Authprovider>
  </React.StrictMode>,
)
