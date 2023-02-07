import React from 'react'
import "./assets/css/style.css";
import ReactDOM from 'react-dom/client'
// import App from './App'
// import './index.css'
import Login from './pages/login';
import Reset from './pages/reset';
import ConfirmReset from './pages/set_password';


import Signup from './pages/signup';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home';

const router = createBrowserRouter([
  {
    path: "/ConfirmReset",
    element: <ConfirmReset />,
  },
  
  {
    path: "/reset",
    element: <Reset />,
  },
  
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
 
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
