import {createBrowserRouter} from "react-router-dom"
import CardDetails from '../components/cardDetails'
import Home from './Home/Home'
import React from 'react'
import SignIn from './Login/SignIn'
import SignUp from "./Login/SignUp"

const indexRouter = createBrowserRouter([
    { path: "/", element : <Home /> } ,
    { path: "/details", element : <CardDetails /> },
    { path:"/signin",element:<SignIn/> },
    { path:"/signup",element:<SignUp/> } 
])

export default indexRouter 