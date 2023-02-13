import { configureStore } from "@reduxjs/toolkit";
import allgamesreducers from "./allGames/reducers";
import categoryReducers from "./categories/reducers";
import gamesReducer from "./games/reducers";
import authReducer from './auth/reducers';
import cartReducer from './cart/cart.reducer'

 const store = configureStore({
    reducer: {
        allgames: allgamesreducers,
        categories: categoryReducers,
        games: gamesReducer,
        auth: authReducer,
        cart: cartReducer 
    }
})
export default store

