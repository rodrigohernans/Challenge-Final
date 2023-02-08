import CardDetails from '../components/cardDetails'
import Home from './Home/Home'
import React from 'react'
import {createBrowserRouter} from "react-router-dom"

const indexRouter = createBrowserRouter([
    { path: "/", element : <Home /> } ,
    { path: "/details", element : <CardDetails /> } 
])

export default indexRouter 