import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../configs";

const getAllGames = createAsyncThunk(
    "getAllGames",
    async () =>{
        try{
            let allgames = await axios.get(`http://localhost:8000/api/games`)
            return {
                success: true ,
                response: {
                    allgames:allgames.data.response,
                    /* category:inputCategory,
                    text:inputText */
                }
                
            }
        } catch (error) {
            return {
                success:false,
                response:{error:error.message}
            }
        }
    }
)

const allGamesActions = { getAllGames }

export default allGamesActions