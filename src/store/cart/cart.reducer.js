import { createReducer } from "@reduxjs/toolkit";
import cartActions from './cart.actions';
const { getCart, addToCart, removeFromCart, emptyCart } = cartActions;

const initialState = {
  cart: null,
};

const cartReducer = createReducer(initialState, builder => {
  builder
    .addCase(getCart.fulfilled, (state, action) => {
      if (action.payload.success) {
        return { ...state, cart: action.payload.response };
      } else {
        return { ...state, cart: null };
      }
    })
    .addCase(addToCart.fulfilled, (state, action) => {
      if (action.payload.success) {
        return { ...state, cart: action.payload.response };
      } else {
        return state;
      }
    })
    .addCase(removeFromCart.fulfilled, (state, action) => {
      if (action.payload.success) {
        if (action.payload.response.items.length === 0) {
          return { ...state, cart: null };
        } else {
          return { ...state, cart: action.payload.response };
        }
      } else {
        return state;
      }
    })
    .addCase(emptyCart.fulfilled, (state, action) => {
      if (action.payload.success) {
        return { ...state, cart: null };
      } else {
        return state;
      }
    });
});

export default cartReducer;




/* import { createReducer } from '@reduxjs/toolkit';
import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART } from '../actions/cart';

const initialState = {
  items: [],
  error: null,
};

export default createReducer(initialState, {
  [ADD_ITEM_TO_CART.fulfilled]: (state, action) => {
    state.items.push(action.payload);
},
[ADD_ITEM_TO_CART.rejected]: (state, action) => {
  state.error = action.error;
},
  [REMOVE_ITEM_FROM_CART.fulfilled]: (state, action) => {
    state.items = state.items.filter(item => item.id !== action.payload);
  },
  [REMOVE_ITEM_FROM_CART.rejected]: (state, action) => {
    state.error = action.error;
  },
}); */