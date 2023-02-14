

import CardDetails from '../components/cardDetails/cardDetails'

import Home from './Home/Home'
import Layout from '../layouts/Layout'
import React from 'react'
import SignIn from './Login/SignIn'
import SignUp from "./Login/SignUp"
import Store from './Store/Store'
import {createBrowserRouter} from "react-router-dom"
import ShoppingCart from '../components/cart/Cart'


const indexRouter = createBrowserRouter([{
    path: '/',
    element:<Layout/>,
    children:[
        { path: "/", element : <Home /> } ,
        { path: "/details", element : <CardDetails /> } ,
    { path: "/shopping-cart", element: <ShoppingCart/> },
        { path: "/store", element : <Store /> },
        { path: "/details/:id", element : <CardDetails /> } ,
            { path:"/signin",element:<SignIn/> },
    { path:"/signup",element:<SignUp/> } 
    ]
}

])

export default indexRouter 