import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const payment = createAsyncThunk(
    "payment",
    async ({data, token}) => {
        try{
            const url = `http://localhost:8000/api/payment`
            let headers = {headers: {'Authorization':`Bearer ${token}`}}
            const response = await axios.post(url, data, headers)
            console.log(response);
            return {
                success: true,
                response: window.location.href = response.data.url
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

const paymentActions = {payment}

export default paymentActions