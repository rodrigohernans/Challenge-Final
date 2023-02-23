import {  createReducer } from "@reduxjs/toolkit"
import favoritesActions from './actions';



const { addFav, readFav ,deleteFav}=  favoritesActions
const initialState = {
    fav: [],
}

const favoritesReducer = createReducer(
    initialState,
    (builder) => { builder
        .addCase(addFav.fulfilled, (state,action) =>{
                let newState = {
                    fav: action.payload
                }
                return newState
            }
        )
        .addCase(addFav.rejected , (state, action)=>{
            let newState= {
                message: "Error Loading fav Reaction"
            }
            return newState
        })
        .addCase (readFav.fulfilled, (state, action) =>{
            //console.log(action)
            let newState = {
                fav: action.payload
            }
            return newState
        })


    }
)
const deleteFavReducer = createReducer(
    initialState,
    (builder)=>{ builder
        .addCase (deleteFav.fulfilled, (state,action)=>{
            let newState = {
                fav:action.payload
            }
            return newState
        })
    }
)

const favoritesReducers = {favoritesReducer,deleteFavReducer}
export default favoritesReducers