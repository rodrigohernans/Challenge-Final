
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
  "addCart",
  async( {game_id, token}) => {
      try{
          let url = `http://localhost:8000/api/carts`
          let headers = {headers: {'Authorization': `Bearer ${token}`}}
          const response = await axios.delete(url, game_id,  headers)
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



/* import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { urlApi } from "../../api/url";

const getCart = createAsyncThunk("getCart", async data => {
  try {
    const res = await axios.get(`${urlApi}/api/cart`, data.headers);
    return {
      success: res.data.success,
      response: res.data.response,
      message: res.data.message,
    };
  } catch (error) {
    let message = error.response ? error.response.data.message || error.response.data : error.message;
    return { success: false, message };
  }
});

const addToCart = createAsyncThunk("addToCart", async data => {
  try {
    let res = await axios.post(`${urlApi}/api/carts`, data.body, data.headers);
    return {
      success: res.data.success,
      response: res.data.response,
      message: res.data.message,
    };
  } catch (error) {
    let message = error.response ? error.response.data.message || error.response.data : error.message;
    return { success: false, message };
  }
});

const removeFromCart = createAsyncThunk("removeFromCart", async data => {
  try {
    let res = await axios.delete(`${urlApi}/api/carts?concertId=${data.concertId}`, data.headers);
    return {
      success: res.data.success,
      response: res.data.response,
      message: res.data.message
    }
  }catch(error) {
    let message = error.response ? error.response.data.message || error.response.data : error.message;
    return { success: false, message };
  }
});

const emptyCart = createAsyncThunk("emptyCart", async data => {
  try {
    const res = await axios.delete(`${urlApi}/api/carts/${data.cartId}`, data.headers);
    return {
      success: res.data.success,
    };
  } catch (error) {
    let message = error.response ? error.response.data.message || error.response.data : error.message;
    return { success: false, message };
  }
});

const cartActions = {
  getCart,
  addToCart,
  removeFromCart,
  emptyCart,
};

export default cartActions;
*/




