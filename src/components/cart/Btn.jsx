import axios from "axios";
import cartActions from "../../store/cart/cart.actions";
import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import { useRef,useEffect } from "react";
import { useParams } from "react-router";
import gamesActions from "../../store/games/action";


const { addCart, readCart } = cartActions;
const { getGame } = gamesActions;

 const Btn = () => {
  
/*     let { token } = useSelector((store) => store?.auth);
    let cart = useSelector(store => store.cart)
    console.log(cart)
  
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
      dispatch(readCart(token))
    }, []); */
//---------------------------------------------------


  return (
    <div>
        <button >hola</button>
    </div>
  )
}
export default Btn