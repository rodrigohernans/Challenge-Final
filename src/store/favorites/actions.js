import { createAsyncThunk  } from "@reduxjs/toolkit";
import axios from "axios";
import urlApi from '../../ulr.js';

const  addFav = createAsyncThunk(
    "addFav",
    async({game_id, token}) => {

        try{
            let url = `http://localhost:8000/api/favorites`
            let headers = {headers: {'Authorization': `Bearer ${token}`}}
            const response = await axios.post(url, game_id, headers)
           console.log(response);
            return{
                success: true,
                response: response.data.response
            }
        }catch(error){
            console.log(error)
        } 
    }
)
const  deleteFav = createAsyncThunk(
  "addFav",
  async( {_id, token}) => {
      try{
          let url = `http://localhost:8000/api/favorites/${_id}`
          let headers = {headers: {'Authorization': `Bearer ${token}`}}
          const response = await axios.delete(url, headers)
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
const readFav = createAsyncThunk(
  "readFav",
  async(  token ) => {
    try{
      let url = `http://localhost:8000/api/favorites`
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

const favoritesActions = {addFav, readFav,deleteFav}
export default favoritesActions;