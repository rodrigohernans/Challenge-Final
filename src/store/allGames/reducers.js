import {  createReducer } from "@reduxjs/toolkit"
import allGamesActions from "./actions"


const { getAllGames }=  allGamesActions
const initialState = {
    allgames: {},
    message: ""
}

const allgamesreducers = createReducer(
    initialState,
    (builder) => { builder
        .addCase(
            getAllGames.fulfilled,
            (state,action) =>{
                let newState = {
                    allgames: action.payload.response.allgames
                }
                return newState
            }
        )
    }
)

export default allgamesreducers