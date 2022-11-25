import { createBrowserRouter } from "react-router-dom";
import Categoty from "../components/Category";
import Login from "../components/Login/Login";
import Signup from "../components/Login/Signup";
import Home from "../components/Pages/Home/Home";
import ErrorPage from "../components/Shareds/ErrorPage";
import AddProducts from "../Dashboard/AddProducts";
import Admin from "../Dashboard/Admin";

import MyOrder from "../Dashboard/MyOrder";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
         path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
           {
                path: '/',
                element:<Home></Home>
            },
           {
                path: '/categorys/:id',
                element:<Categoty></Categoty>,
                loader:({params})=>fetch(`http://localhost:5000/categorys/${params.id}`)
            },
           {
                path: '/login',
                element:<Login></Login>
            },
           {
                path: '/signup',
                element:<Signup></Signup>
            },
        ]
    },
    {
         path: '/dashboard',
        element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
           
            {
                path: '/dashboard',
                element:<MyOrder></MyOrder>
            },
            {
                path: '/dashboard/admin',
                element:<AdminRoute><Admin></Admin></AdminRoute>
            },
            {
                path: '/dashboard/addproducts',
                element:<AddProducts></AddProducts>
            },
        ]

    }
])

export default router;