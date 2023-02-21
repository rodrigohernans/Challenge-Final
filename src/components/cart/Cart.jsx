import React from "react";
import styles from "./cart.module.css";
import CartCard from "./CartCard";
import Btn from "./Btn";
import axios from "axios";
import cartActions from "../../store/cart/cart.actions";
import { useSelector, useDispatch } from "react-redux";
import { useRef, useEffect } from "react";
import { useParams } from "react-router";
import gamesActions from "../../store/games/action";
import donationActions from "../../store/cart/mercadoPago.actions";

const { donation } = donationActions;
const { addCart, readCart } = cartActions;
const { getGame } = gamesActions;

const ShoppingCart = () => {
  let carts = useSelector((store) => store.cart);
  let { token } = useSelector((store) => store?.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(readCart(token));
  }, [token]);

  return (
    <div>
      <div className={styles.main}>
        <div className={styles.games}>
          <CartCard />
        </div>
        <div className={styles.paymentcontainer}>
          <div className={styles.method}>
            <div className={styles.elementPay}>
              <p>{game.game_id.title}</p>
              <p>{"b"}</p>
            </div>
          </div>
          <div className={styles.pay}>
            <p>Total: $2850</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
{
  /*             <p className={styles.methodPosition}>{game.game_id.title}</p> */
}

{
  /*             <button className={styles.btnPay} onClick={dispatch1}>
        <img className={styles.mp} src="/assets/mp.png" alt="" />
      </button> */
}
