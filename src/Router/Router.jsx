import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import PrivateRoute from "./PrivateRoute";
import Products from "../Pages/Products";
import Profile from "../Pages/Profile";
import Dashboard from "../Pages/Dashboard";
import Test from "../Components/test";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'register',
                Component: Register
            },
            {
                path: 'login',
                Component: Login
            },
            {
                path: 'dashboard',
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            },
            {
                path: '/products',
                element: <PrivateRoute><Products></Products></PrivateRoute>
            }
            ,
            {
                path: '/profile',
                element: <PrivateRoute> <Profile></Profile> </PrivateRoute>
            },
            {
                path: '/test',
                Component: Test
            }
        ]
    }
])

export default router