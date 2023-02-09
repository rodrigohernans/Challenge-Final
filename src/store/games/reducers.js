import { createReducer } from "@reduxjs/toolkit";
import gamesActions from "./action";

const {getGame}= gamesActions

const inicialState= {
    game: [],
    message: ''
}

const gamesReducer= createReducer(inicialState, (builder) => {
    builder
    .addCase(getGame.fulfilled, (state, action) => {
        let newState = {
            game: action.payload.response.game,
            message: action.payload.message,
        }
        return newState
    })
})

export default gamesReducer