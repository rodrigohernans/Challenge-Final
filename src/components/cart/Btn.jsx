import axios from "axios";
import cartActions from "../../store/cart/cart.actions";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRef, useEffect } from "react";
import gamesActions from "../../store/games/action";
import styles from "./btn.module.css";
import Swal from "sweetalert2";

const { addCart } = cartActions;

const Btn = (props) => {
  const game_id = { game_id: props };
  let { token } = useSelector((store) => store?.auth);
  let cart = useSelector((store) => store.cart);
  console.log(game_id.game_id);
  const dispatch = useDispatch();

  /* const handleAddToCart = () => {
    dispatch(addCart(id));
    Swal.fire({
      title: 'Success!',
      text: 'Item added to cart',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  }; */
  const createCart = () => {
    dispatch(addCart({ game_id: game_id.game_id, token }));
    Swal.fire({
      title: 'Success!',
      text: 'Item added to cart',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  };

  //---------------------------------------------------

  return (
    <div className={styles.chopCard1}>
      <a className={styles.chopCard} onClick={createCart} >
        <img className={styles.shop} src="/assets/shopIcon.png" alt="shop" />
      </a>
    </div>
  );
};
export default Btn;
