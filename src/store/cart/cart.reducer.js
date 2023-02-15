import {  createReducer } from "@reduxjs/toolkit"
import cartActions from './cart.actions';



const { addCart, readCart }=  cartActions
const initialState = {
    cart: [],
}

const cartReducer = createReducer(
    initialState,
    (builder) => { builder
        .addCase(addCart.fulfilled, (state,action) =>{
                let newState = {
                    cart: action.payload.response.cart
                }
                return newState
            }
        )
        .addCase(addCart.rejected , (state, action)=>{
            let newState= {
                message: "Error Loading cart"
            }
            return newState
        })
        .addCase (readCart.fulfilled, (state, action) =>{
            console.log(action)
            let newState = {
                cart: action.payload
            }
            return newState
        })


    }
)

export default cartReducer


