import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Login from './Login'
import {
  createBrowserRouter,
  NavLink,
  RouterProvider,
} from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login /> ,

  },
  {
    path:"/",
    element:<App />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}><App /></RouterProvider>
  </React.StrictMode>,
)


