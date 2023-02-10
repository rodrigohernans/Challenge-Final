import { configureStore } from "@reduxjs/toolkit";

import allgamesreducers from "./allGames/reducers";
import categoryReducers from "./categories/reducers";

export const store = configureStore({
    reducer: {
        allgames: allgamesreducers,
        categories: categoryReducers
    }
})

