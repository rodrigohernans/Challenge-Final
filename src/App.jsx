import { RouterProvider } from "react-router-dom";
import indexRouter from "./router/index";

import { useEffect } from 'react'

import { useDispatch } from 'react-redux'
import authActions from "./store/auth/actions"
const { iniciar_sesion_con_token } = authActions

function App() {

    let dispatch = useDispatch()

    useEffect(() => {
        let token = localStorage.getItem('token')
        //console.log(token)
        if (token) {
            dispatch(iniciar_sesion_con_token(token))
        }
    },[])
    return <RouterProvider router={indexRouter} />;
}

export default App;
