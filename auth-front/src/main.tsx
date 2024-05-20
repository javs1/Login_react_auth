import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './routes/Login'
import Singup from './routes/Singup'
import Dashboard from './routes/Dashboard'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProtectedRoute from './routes/ProtectedRoute'

const router = createBrowserRouter ([
  {
  path: "/",
  element: <Login/>,
  },
  {
    path: "/singup",
    element: <Singup/>,
  },
  {
    path: "/",
    element: <ProtectedRoute/>,
    children: [
    {
      path: "/dashboard",
      element: <Dashboard/>
    }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
