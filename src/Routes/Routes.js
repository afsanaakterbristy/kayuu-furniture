import { createBrowserRouter } from "react-router-dom";
import Categoty from "../components/Categoty";
import Login from "../components/Login/Login";
import Signup from "../components/Login/Signup";
import Home from "../components/Pages/Home/Home";
import ErrorPage from "../components/Shareds/ErrorPage";
import Main from "../Layout/Main";

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
                path: '/category/:id',
                element:<Categoty></Categoty>
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
    }
])

export default router;