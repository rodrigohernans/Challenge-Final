import {  createReducer } from "@reduxjs/toolkit"
import cartActions from './cart.actions';



const { addCart }=  cartActions
const initialState = {
    cart: [],
}

const cartReducer = createReducer(
    initialState,
    (builder) => { builder
        .addCase(
          addCart.fulfilled,
            (state,action) =>{
                let newState = {
                    cart: action.payload.response.cart
                }
                return newState
            }
        )
        .addCase(addCart.fulfilled, (state ,action ) => {
            let newState = {
                itemCart: action.payload.response.cart,
                message: action.payload.message,
            }
            return newState
        })
        .addCase(addCart.rejected , (state, action)=>{
            let newState= {
                message: "Error Loading cart"
            }
            return newState
        })


    }
)

export default cartReducer


