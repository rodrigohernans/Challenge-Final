import AccountVerify from '../components/accountVerify/AccountVerify'
import Attendance from '../components/attendance/Atendance'
import CardDetails from '../components/cardDetails/cardDetails'
import GamesCards from './'
import Home from './Home/Home'
import Layout from '../layouts/Layout'
import Presentation from '../components/presentation/Presentation'
import React from 'react'
import ShoppingCart from '../components/cart/Cart'
import SignIn from './Login/SignIn'
import SignUp from "./Login/SignUp"
import Store from './Store/Store'
import Terms from '../components/termsandconditions/Terms'
import Welcome from "../components/welcome/Welcome"
import {createBrowserRouter} from "react-router-dom"

const indexRouter = createBrowserRouter([
    {
        path: '/',
        element: <Presentation />
    },
    {  path:"/verify/:verify_Code", element: <Welcome/> },
    {  path:"/verify", element: <AccountVerify/> },
    {
    
    path: '/',
    element:<Layout/>,
    children:[
        { path: "/home", element : <Home /> } ,
        { path: "/details", element : <CardDetails /> } ,
    { path: "/cart", element: <ShoppingCart/> },
        { path: "/store", element : <Store /> },
        { path: "/attendance", element : <Attendance /> },
        { path: "/termsandconditions", element : <Terms /> },
        { path: "/details/:id", element : <CardDetails /> } ,
            { path:"/signin",element:<SignIn/> },
    { path:"/signup",element:<SignUp/> } 
    ],
},

])

export default indexRouter 

