import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layout/Main"
import AddProduct from "../../Pages/AddProduct/AddProduct"
import Device from "../../Pages/allDevice/Device"
import AllUsers from "../../Pages/allUsers/AllUsers"
import Blog from "../../Pages/Blog/Blog"
import Dashboard from "../../Pages/Dashboard/Dashboard"
import Home from "../../Pages/Home/Home"
import Login from "../../Pages/Login/Login"
import NotFound from "../../Pages/NotFound/NotFound"
import SignUp from "../../Pages/SignUp/SignUp"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>, 
        // errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/categories'),
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
                path:'/addproduct',
                element: <AddProduct></AddProduct>,
                loader: () => fetch('http://localhost:5000/categories'),
            },
            {
                path: '/allmobile/:id',
                element: <Device></Device>,
                loader: async ({params}) =>  fetch(`http://localhost:5000/allmobile/${params.id}`)
            }, 
            {
                path: '/allUsers',
                element: <AllUsers></AllUsers>,
                loader: async ({params}) =>  fetch(`http://localhost:5000/users`)
            }, 
            
            {
                path: '/dashboard',
                element: <Dashboard ></Dashboard>
            },
            
           
        ]},
        {path: '*', element: <NotFound></NotFound>}
])