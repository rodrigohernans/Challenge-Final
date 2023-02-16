import React from "react";
import styles from "./btndelete.module.css";
import axios, { all } from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useRef, useEffect } from "react";
import cartActions from "../../store/cart/cart.actions";

const { deleteCart } = cartActions;

const BtnDelete = (props) => {
  const game_id = { game_id: props };
  let { token } = useSelector((store) => store?.auth);
  let cart = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const deletedCart = () => {
    dispatch(
      deleteCart({ game_id: game_id.game_id, token }, console.log("anda joia"))
    );
  };

  return (
    <div>
      <button onClick={deletedCart}>
        <img className={styles.btn} src="/assets/trash-can.png" alt="trash" />
      </button>
    </div>
  );
};

export default BtnDelete;
