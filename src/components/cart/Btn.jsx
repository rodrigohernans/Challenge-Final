import axios from "axios";
import cartActions from "../../store/cart/cart.actions";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRef, useEffect } from "react";
import gamesActions from "../../store/games/action";

const { addCart } = cartActions;

const Btn = (props) => {
  const game_id = { game_id: props };
  let { token } = useSelector((store) => store?.auth);
  let cart = useSelector((store) => store.cart);
  console.log(game_id.game_id);
  const dispatch = useDispatch();

  const createCart = () => {
    dispatch(addCart({ game_id: game_id.game_id, token }));
  };

  //---------------------------------------------------

  return (
    <div>
      <button onClick={createCart}>crear</button>
    </div>
  );
};
export default Btn;
