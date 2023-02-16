import React from "react";
import styles from "./cartCard.module.css";
import axios, { all } from "axios";
import cartActions from "../../store/cart/cart.actions";
import { useSelector, useDispatch } from "react-redux";
import { useRef, useEffect } from "react";

const { addCart, readCart } = cartActions;

function CartCard() {
  const dispatch = useDispatch();
  let { token } = useSelector((store) => store?.auth);
  let carts = useSelector((store) => store.cart);

  useEffect(() => {
    dispatch(readCart(token));
  }, []);
  carts.cart?.response?.map((game) => console.log(game.game_id));

  return (
    <div className={styles.games}>
      {carts.cart?.response?.map((game) => (
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <img className={styles.image} src={game.game_id.image} alt="" />
          </div>
          <div className={styles.description}>
            <p>{game.game_id.title}</p>
          </div>
          <div className={styles.price}>
            <div className={styles.money}>
              <p className={styles.cash}>$ {game.game_id.price}</p>
            </div>
            <div>
              <button className={styles.btn}>
                <img
                  className={styles.btn}
                  src="/assets/trash-can.png"
                  alt="trash"
                />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartCard;
