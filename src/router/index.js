
import CardDetails from '../components/cardDetails/cardDetails'
import Home from './Home/Home'
import Layout from '../layouts/Layout'
import React from 'react'
import GamesCards from '../components/allGamesCards/AllGamesCards'
import {createBrowserRouter} from "react-router-dom"
import ShoppingCart from '../components/cart/Cart'


const indexRouter = createBrowserRouter([{
    path: '/',
    element:<Layout/>,
    children:[
        { path: "/", element : <Home /> } ,
        { path: "/details", element : <CardDetails /> } ,
    { path: "/shopping-cart", element: <ShoppingCart/> },
        { path: "/store", element : <GamesCards /> },
        { path: "/details/:id", element : <CardDetails /> } 
    ]
}

])

export default indexRouter 