import React from 'react'
import styles from './cartCard.module.css';
import axios, { all } from "axios";
import cartActions from "../../store/cart/cart.actions";
import {useSelector, useDispatch} from "react-redux"
import { useRef,useEffect } from "react";

const { addCart, readCart } = cartActions;



function CartCard() {
    const dispatch = useDispatch();
    let { token } = useSelector((store) => store?.auth);
    let carts = useSelector(store => store.cart.cart?.response)
    let allgames = []

    useEffect(() => {
        dispatch(readCart(token))
      }, []);
      for (let games of carts ){
        allgames.push(games.game_id)
      }
      console.log(allgames)






  return (
    <div className={styles.games}>
        
        {allgames.map((game) =>

            <div className={styles.card}>
                <div className={styles.imageContainer}>
                    <img className={styles.image} src={game.image} alt="" />
                </div>
                <div className={styles.description}>
                    <p>{game.title}</p>
                </div>
                <div>
                    
                </div>
                <div className={styles.price}>
                    <div className={styles.money}>
                        <p className={styles.cash}>Price:$ 1269</p>
                    </div>
                    <div>
                    <button className={styles.btn} ><img className={styles.btn} src="/assets/trash-can.png" alt="trash" /></button>
                    </div>
                </div>
            </div>
             )} 
    </div>
  )
}



export default CartCard