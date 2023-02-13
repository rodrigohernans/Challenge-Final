import CardDetails from '../components/cardDetails/cardDetails'
import GamesCards from '../components/allGamesCards/AllGamesCards'
import Home from './Home/Home'
import Layout from '../layouts/Layout'
import Presentacion from '../components/presentacion/Presentacion'
import React from 'react'
import ShoppingCart from '../components/cart/Cart'
import SignIn from './Login/SignIn'
import SignUp from "./Login/SignUp"
import {createBrowserRouter} from "react-router-dom"

const indexRouter = createBrowserRouter([{
    path: '/',
    element:<Layout/>,
    children:[
        { path: "/", element : <Home /> } ,
        { path: "/details", element : <CardDetails /> } ,
    { path: "/shopping-cart", element: <ShoppingCart/> },
        { path: "/store", element : <GamesCards /> },
        { path: "/details/:id", element : <CardDetails /> } ,
            { path:"/signin",element:<SignIn/> },
    { path:"/signup",element:<SignUp/> } 
    ],
},
{
    path: '/presentacion',
    element: <Presentacion />

}

])

export default indexRouter 