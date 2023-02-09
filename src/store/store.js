import { configureStore } from "@reduxjs/toolkit";
import gamesReducer from "./games/reducers";

const store= configureStore({
    reducer: {
        games: gamesReducer
    }
})

export default store