import { configureStore } from "@reduxjs/toolkit";
import allgamesreducers from "./allGames/reducers"

export const store = configureStore({
    reducer: {
        allgames: allgamesreducers
    }
})
