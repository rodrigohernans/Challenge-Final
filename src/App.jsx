import { Provider } from "react-redux";
import { RouterProvider } from "react-router";
import indexRouter from "./router/index";
import store from "./store/store";

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
    return 
        <Provider store={store}>
      <RouterProvider router={indexRouter} />
    </Provider>
    }



export default App;
