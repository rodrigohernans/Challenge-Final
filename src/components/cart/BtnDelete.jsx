import React from "react";
import styles from "./btndelete.module.css";
import axios, { all } from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useRef, useEffect } from "react";
import cartActions from "../../store/cart/cart.actions";

const { deleteCart, readCart } = cartActions;

const BtnDelete = (props) => {
  let { id } = props;
  let { token } = useSelector((store) => store?.auth);
  let cart = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const deletedCart = () => {
    console.log(token);
    dispatch(deleteCart({ _id: id, token }));
    dispatch(readCart(token));
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
