
 import { createAsyncThunk  } from "@reduxjs/toolkit";
import axios from "axios";
import urlApi from '../../ulr.js';

const  addCart = createAsyncThunk(
    "addCart",
    async( {game_id, token}) => {
        try{
            let url = `http://localhost:8000/api/carts`
            let headers = {headers: {'Authorization': `Bearer ${token}`}}
            const response = await axios.post(url, game_id,  headers)
            //console.log(response);
            return{
                success: true,
                response: response.data.response
            }
        }catch(error){
            console.log(error)
        } 
    }
)
const  deleteCart = createAsyncThunk(
  "deleteCart",
  async( {_id, token}) => {
      try{
          let url = `http://localhost:8000/api/carts/${_id}`
          let headers = {headers: {'Authorization': `Bearer ${token}`}}
          const response = await axios.delete(url,  headers)

          return{
              success: true,
              response: response.data.response
          }
      }catch(error){
          console.log(error)
      } 
  }
)
const readCart = createAsyncThunk(
  "readCart",
  async( token ) => {
    try{
      let url = `http://localhost:8000/api/carts`
            let headers = {headers: {'Authorization': `Bearer ${token}`}}
            const response = await axios.get(url, headers)
            //console.log(response)
            return{
              success:true,
              response: response.data.response
            }
    }catch(error){
      console.log(error)
    }
  }
)

const cartActions = {addCart, readCart, deleteCart}
export default cartActions; 




