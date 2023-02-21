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
import paymentActions from "../../store/cart/mercadoPago.actions";

const { addCart, readCart } = cartActions;
const { getGame } = gamesActions;
const { payment } = paymentActions;

function sum_prices(items) {
  let total = 0;
  items.forEach((item) => {
    const price = parseFloat(item.game_id.price.replace("$", ""));
    total += price;
  });
  return total;
}

const ShoppingCart = () => {
  let carts = useSelector((store) => store.cart);
  let { token } = useSelector((store) => store?.auth);
  const dispatch = useDispatch();
  console.log(carts);
  useEffect(() => {
    dispatch(readCart(token));
  }, [token]);

  const totalPrice = sum_prices(carts?.cart?.response || []);
  const paybtn = () => {
    let data = {
      unit_price: totalPrice,
    };
    dispatch(payment({ data, token }));
  };

  return (
    <div>
      <div className={styles.main}>
        <div className={styles.games}>
          <CartCard />
        </div>
        <div className={styles.paymentcontainer}>
          <div className={styles.method}>
            {carts.cart?.response?.map((e) => (
              <div className={styles.elementPay}>
                <p className={styles.text}>{e.game_id.title}</p>
                <p className={styles.text}>${e.game_id.price}</p>
              </div>
            ))}
          </div>
          <div className={styles.pay}>
            <p>Total: ${totalPrice.toFixed(2)}</p>
            <button className={styles.btnPay} onClick={paybtn}>
              caca
              {/*               <img className={styles.mp} src="/assets/mp.png" alt="" /> */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
