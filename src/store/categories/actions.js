import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getCategories = createAsyncThunk(
    "getCategories",
    async()=>{
        try{
            let categories =await axios.get('http://localhost:8000/api/categories')
            return{
                success: true,
                response: {cateogories:categories.data.response}
            }
           
        }catch(error){
            return{
                success:false,
                response:{error:error.message}
            }
        }
    }
)

const categoryActions = {getCategories}

export default categoryActions