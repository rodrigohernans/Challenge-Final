import { configureStore } from "@reduxjs/toolkit";
import categoryReducers from "./categories/reducers";

const store = configureStore({
    reducer:{
        categories: categoryReducers
    }
})

export default store