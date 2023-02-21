


import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const payment = createAsyncThunk(
    "payment",
    async ({data, token}) => {
        try{
            const url = `http://localhost:8000/api/carts/:user_id`
            let headers = {headers: {'Authorization':`Bearer ${token}`}}
            const response = await axios.post(url, data, headers)
            console.log(response);
            return {
                success: true,
                response: window.location.href = response.data.response.body.init_point
            }
        }
        catch(error){
            return {
                success: false,
                response: console.log(error)
            }
        }
    }
)

const mercadoPagoActions = {payment}

export default mercadoPagoActions