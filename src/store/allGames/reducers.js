import {  createReducer } from "@reduxjs/toolkit"
import allGamesActions from "./actions"


const { getAllGames }=  allGamesActions
const initialState = {
    allgames: [],
 inputText: "",
     category: [] ,
    //message: ""
}

const allgamesreducers = createReducer(
    initialState,
    (builder) => { builder
        .addCase(
            getAllGames.fulfilled,
            (state,action) =>{
                let newState = {
                    allgames: action.payload.response.allgames,
                    category: action.payload.response.category,
                  text: action.payload.response.text
                }
                return newState
            }
        )
    }
)

export default allgamesreducers