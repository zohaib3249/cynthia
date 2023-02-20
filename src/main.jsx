import React from 'react'
import "./assets/css/style.css";
import "./assets/css/nav.css";
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
import RoadMap from './pages/roadmap';
const PrivateRoute = ({ element }) => {
  const token = JSON.parse(sessionStorage.getItem('user'));
  if (!token) {
    return element;
  } else {
    window.location.href = '/login'; // Redirect to the login page if the user is not authenticated
    return null;
  }
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute element={<Home />} />,
  },
  {
    path: "/teams",
    element: <PrivateRoute element={<Teams />} />,
  },
  {
    path: "/roadmap",
    element: <PrivateRoute element={<RoadMap />} />,
  },
  {
    path: "/logout",
    element: <PrivateRoute element={<Logout />} />,
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
  {
    path: "/reset_password",
    element: <ConfirmReset />,
  },

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
