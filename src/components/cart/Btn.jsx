import axios from "axios";
import cartActions from "../../store/cart/cart.actions";
import React from 'react'
import {useSelector, useDispatch} from "react-redux"



 const Btn = () => {
    let cartStore = useSelector(store => store)
    console.log(cartStore)

  return (
    <div>
        <button>hola</button>
    </div>
  )
}
export default Btn