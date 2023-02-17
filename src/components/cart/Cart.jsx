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
  let mpStore = useSelector((store) => store.mercadoPago);
  console.log(mpStore);
  let { token } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  let donation1 = 1000;
  const dispatch1 = () => {
    let data = {
      unit_price: donation1,
    };
    dispatch(donation({ data, token }));
  };

  return (
    <div className={styles.main}>
      <>
        <div className={styles.games}>
          <CartCard />
        </div>
        <div className={styles.paymentcontainer}>
          <div className={styles.method}>
            <div className={styles.elementPay}>
              <p>{/* {game.title} */}</p>
              <p>{/* {game.price} */}</p>
            </div>
            {/*             <p className={styles.methodPosition}>{game.game_id.title}</p> */}
          </div>
          <div className={styles.pay}>
            <p>Total: $2850</p>
            <button className={styles.btnPay} onClick={dispatch1}>
              <img className={styles.mp} src="/assets/mp.png" alt="" />
            </button>
          </div>
        </div>
      </>
    </div>
  );
};

export default ShoppingCart;
