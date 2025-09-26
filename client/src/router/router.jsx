
import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Auth/Login";
import Rider from "../pages/Rider/Rider";

export const router = createBrowserRouter([
  {
    path: "/",
   Component: RootLayout,
   children: [
    {
        index: true,
        Component: Home
    },
    {
      path:'rider',
      element:<Rider/>
    }
   ] 
  },
  {
    path:'/',
    Component:AuthLayout,
    children: [
      {
        path:'login',
        element:<Login/>
      }
    ]
  }
]);