import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layout/Main"
import Blog from "../../Pages/Blog/Blog"
import Dashboard from "../../Pages/Dashboard/Dashboard"
import Home from "../../Pages/Home/Home"
import Login from "../../Pages/Login/Login"
import SignUp from "../../Pages/SignUp/SignUp"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>, 
        // errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login ></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blog',
                element: <Blog ></Blog>
            },
            
            {
                path: '/dashboard',
                element: <Dashboard ></Dashboard>
            },
            
           
        ]}
])