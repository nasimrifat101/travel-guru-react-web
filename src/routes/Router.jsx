import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/root/Root";
import Error from "../pages/error/Error";
import Home from "../pages/home/Home";
import Login from "../pages/auth/login/Login";
import Signup from "../pages/auth/signup/Signup";
import Details from "../pages/detailsPage/Details";

export const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<Error></Error>,
    children:[
        {
            path: '/',
            element:<Home></Home>,
            loader: () => fetch('card.json'),
        },
        {
            path: '/details/:id',
            element:<Details></Details>,
        },
        {
            path: '/login',
            element:<Login></Login>,
        },
        {
            path: '/signup',
            element:<Signup></Signup>,
        },
    ]
  },
]);
