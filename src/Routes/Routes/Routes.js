import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layout/Main"
import AddProduct from "../../Pages/AddProduct/AddProduct"
import Device from "../../Pages/allDevice/Device"
import AllUsers from "../../Pages/allUsers/AllUsers"
import Blog from "../../Pages/Blog/Blog"
import Dashboard from "../../Pages/Dashboard/Dashboard"
import Home from "../../Pages/Home/Home"
import Login from "../../Pages/Login/Login"
import Mybuyers from "../../Pages/Mybuyers/Mybuyers"
import MyOrder from "../../Pages/MyOrder/MyOrder"
import MyProduct from "../../Pages/MyProduct/MyProduct"
import NotFound from "../../Pages/NotFound/NotFound"
import SignUp from "../../Pages/SignUp/SignUp"
import PrivateRoute from "../PrivateRoute/PrivateRoute"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>, 
        // errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://recycle-shop-server.vercel.app/categories'),
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
                loader: () => fetch('https://recycle-shop-server.vercel.app/categories'),
            },
            {
                path: '/allmobile/:id',
                element:<PrivateRoute> <Device></Device></PrivateRoute>,
                loader: async ({params}) =>  fetch(`https://recycle-shop-server.vercel.app/allmobile/${params.id}`)
            }, 
            {
                path: '/allUsers',
                element: <AllUsers></AllUsers>,
                loader: async ({params}) =>  fetch(`https://recycle-shop-server.vercel.app/users`)
            }, 
            
            {
                path: '/dashboard/myproduct',
                element: <MyProduct></MyProduct>,
                loader:  () =>  fetch(`https://recycle-shop-server.vercel.app/allmobile`)
            },
             {
                path:'/dashboard/addproduct',
                element: <AddProduct></AddProduct>,
                loader: () => fetch('https://recycle-shop-server.vercel.app/categories'),
            },
             {
                path:'/dashboard/mybuyers',
                element: <Mybuyers></Mybuyers>,
                
            },
            
            {
                path: '/dashboard',
                element: <Dashboard ></Dashboard>
            },
            // {
            //                path:'/dashboard/mybuyers',
            //                element: <Mybuyers></Mybuyers>,
                            
            //            },
            // {
            //     path:'/myproduct',
            //     element:<MyProduct></MyProduct>,
            //     loader:  () =>  fetch(`https://recycle-shop-server.vercel.app/allmobile`)
            // }
           
        ]},
        // {
        //     path: '/dashboard',
        //     element: <Dashboard></Dashboard>,
        //     children: [
              
        //         {
        //             path: '/dashboard/myproduct',
        //             element: <MyProduct></MyProduct>,
        //             loader:  () =>  fetch(`https://recycle-shop-server.vercel.app/allmobile`)
        //         },
        //          {
        //             path:'/dashboard/addproduct',
        //             element: <AddProduct></AddProduct>,
        //             loader: () => fetch('https://recycle-shop-server.vercel.app/categories'),
        //         },
        //          {
        //             path:'/dashboard/mybuyers',
        //             element: <Mybuyers></Mybuyers>,
                    
        //         },
                
            
        //     ]},

        {path: '*', element: <NotFound></NotFound>}
])