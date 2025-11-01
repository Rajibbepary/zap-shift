
import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Auth/Login";
import Rider from "../pages/Rider/Rider";
import Coverage from "../pages/Coverage/Coverage";
import SendParcel from "../pages/SendParcel/SendParcel";
import PrivateRoute from "../routes/PrivateRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import MyParcel from "../pages/Dashboard/User/MyParcel";
import About from "../pages/About/About";
import Payment from "../pages/Dashboard/Payment/Payment";




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
      path:'coverage',
      element:<Coverage/>,
      loader: () => fetch('./serviceCenter.json')
    },
    {
      path:'rider',
      element:<Rider/>
    },
    {
      path:'about',
      element:<About/>
    },
    {
      path:"sendparcel",
      element:<PrivateRoute><SendParcel/></PrivateRoute>,
      loader: () => fetch('./serviceCenter.json')
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
  },
  {
    path:'dashboard',
    element:<PrivateRoute>
      <DashboardLayout/>
    </PrivateRoute>,
    children: [
      {
        path:"myparcel",
        element:<MyParcel/>
      },
      {
        path:"payment/:parcelId",
        element:<Payment/>
      }
    ]
  }
]);