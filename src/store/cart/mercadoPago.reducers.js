import { createReducer } from "@reduxjs/toolkit";
import donationActions from "./mercadoPago.actions";

const {donation} = donationActions

const initialState = {
    order: []
}

const donationReducers = createReducer(
    initialState,
    (builder) => {
        builder
            .addCase(donation.fulfilled,
                (state, action) => {
                    console.log(action)
                    let newState = {
                        mercadopago: action.payload.response
                    }
                    return newState
                }
            )
    }
)

export default donationReducers


/* import { createReducer } from "@reduxjs/toolkit";
import mercadoPagoActions from "./mercadoPago.actions";

const {payment} = mercadoPagoActions

const initialState = {
    order: []
}

const mercadoPagoReducer = createReducer(
    initialState,
    (builder) => {
        builder
            .addCase(payment.fulfilled,
                (state, action) => {
                    console.log(action)
                    let newState = {
                        mercadopago: action.payload.response
                    }
                    return newState
                }
            )
    }
)

export default mercadoPagoReducer */