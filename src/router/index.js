import CardDetails from '../components/cardDetails'
import Home from './Home/Home'
import React from 'react'
import {createBrowserRouter} from "react-router-dom"
import ShoppingCart from '../components/cart/Cart'

const indexRouter = createBrowserRouter([
    { path: "/", element : <Home /> } ,
    { path: "/details", element : <CardDetails /> } ,
    { path: "/shopping-cart", element: <ShoppingCart/> }
])

export default indexRouter 