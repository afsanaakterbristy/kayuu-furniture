import { createBrowserRouter } from "react-router-dom";
import Categoty from "../components/Category";
import Login from "../components/Login/Login";
import Signup from "../components/Login/Signup";
import Home from "../components/Pages/Home/Home";
import ErrorPage from "../components/Shareds/ErrorPage";
import Dashboard from "../Dashboard/Dashboard";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
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
        element: <DashboardLayout></DashboardLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/dashboard',
                element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            },
        ]

    }
])

export default router;