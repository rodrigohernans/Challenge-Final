import React from "react";
import styles from "./cartCard.module.css";
import axios, { all } from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useRef, useEffect } from "react";
import Btn from "../cart/Btn";
import cartActions from "../../store/cart/cart.actions";
import BtnDelete from "../cart/BtnDelete";

const { addCart, readCart, deleteCart } = cartActions;

function CartCard() {
  const dispatch = useDispatch();
  let { token } = useSelector((store) => store?.auth);
  let carts = useSelector((store) => store.cart);

  useEffect(() => {
    dispatch(readCart(token));
  }, [token]);
  return (
    <div className={styles.games}>
      {carts.cart?.response?.map((game) => (
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <img className={styles.image} src={game?.game_id?.image} alt="" />
          </div>
          <div className={styles.description}>
            <p>{game?.game_id?.title}</p>
          </div>
          <div className={styles.price}>
            <div className={styles.money}>
              <p className={styles.cash}>$ {game?.game_id?.price}</p>
            </div>
            <div>
              {console.log(game._id)}
              <BtnDelete id={game?._id} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartCard;
