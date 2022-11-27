import { createBrowserRouter } from "react-router-dom";
//import Categoty from "../components/Category";
import Login from "../components/Login/Login";
import Signup from "../components/Login/Signup";
import Home from "../components/Pages/Home/Home";
import Bolg from "../components/Shareds/Bolg";
import CategoryTwo from "../components/Shareds/CategoryTwo";
import ErrorPage from "../components/Shareds/ErrorPage";
import AddProducts from "../Dashboard/AddProducts";
import Admin from "../Dashboard/Admin";
import AllBuyer from "../Dashboard/AllBuyer";
import AllSeller from "../Dashboard/AllSeller";
import Dashboard from "../Dashboard/Dashboard";
import MyOrder from "../Dashboard/MyOrder";
import MyProducts from "../Dashboard/MyProducts";
import Payment from "../Dashboard/Payment";
import Report from "../Dashboard/Report";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import AdminRoute from "./AdminRoute";
import BuyerRoute from "./BuyerRoute";
import PrivateRoute from "./PrivateRoute";
import SellerRoute from "./SellerRoute";


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
        //    { 
        //         path: '/categorys/:id',
        //         element:<PrivateRoute><Categoty></Categoty></PrivateRoute>,
        //         loader:({params})=>fetch(`http://localhost:5000/categorys/${params.id}`)
        //     },
            // this is extrat for test
           {
                path: '/category/:id',
               element: <PrivateRoute><CategoryTwo></CategoryTwo></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/categorystwo/${params.id}`)
            },
           {
                path: '/login',
                element:<Login></Login>
            },
           {
                path: '/signup',
                element:<Signup></Signup>
            },
           {
                path: '/blog',
                element:<Bolg></Bolg>
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
                element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            },
            {
                path: '/dashboard/myorder',
                element:<BuyerRoute><MyOrder></MyOrder></BuyerRoute>
            },
            {
                path: '/dashboard/admin',
                element:<AdminRoute><Admin></Admin></AdminRoute>
            },
            {
                path: '/dashboard/addproducts',
                element:<SellerRoute><AddProducts></AddProducts></SellerRoute>
            },
            {
                path: '/dashboard/myproducts',
                element:<SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <BuyerRoute><Payment></Payment></BuyerRoute>,
                loader:({params})=>fetch(`http://localhost:5000/bookings/${params.id}`)
            },
              {
                path:'/dashboard/allbuyer',
                element:<AdminRoute><AllBuyer></AllBuyer></AdminRoute>
            },
              {
                path:'/dashboard/allseller',
                element:<AdminRoute><AllSeller></AllSeller></AdminRoute>
            },
              {
                path:'/dashboard/report',
                element:<AdminRoute><Report></Report></AdminRoute>
            },
        ]

    }
])

export default router;