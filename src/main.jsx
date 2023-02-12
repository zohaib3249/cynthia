import React from 'react'
import "./assets/css/style.css";
import ReactDOM from 'react-dom/client'
// import App from './App'
// import './index.css'
import Login from './pages/login';
import Reset from './pages/reset';
import ConfirmReset from './pages/set_password';
import Logout from './pages/logout';

import Signup from './pages/signup';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home';
import Teams from './pages/team';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Teams />,
  },
  {
    path: "/logout",
    element: <Logout />,
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
