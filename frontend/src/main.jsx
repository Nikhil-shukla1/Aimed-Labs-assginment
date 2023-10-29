import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, Route, Link, createRoutesFromElements, Outlet } from "react-router-dom";
import Login from './components/login.jsx';
import Register from './components/register.jsx';
import Home from './components/home.jsx';
import Layout from './layout';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Login />} />
      <Route path='register' element={<Register />} />
      <Route path='home' element={<Home />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
