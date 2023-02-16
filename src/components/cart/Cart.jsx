import React from 'react'
import styles from './cart.module.css';
import CartCard from './CartCard';
import Btn from './Btn'



const ShoppingCart = () => {
 
  return (
    <div className={styles.main}>
        <div className={styles.games}>
          <CartCard/>
        </div>
        <div className={styles.paymentcontainer}>
            <div className={styles.method}>
              <div className={styles.elementPay}>
                <p>Forge of Empires</p>
                <p>$1296</p>
              </div>
              <p className={styles.methodPosition}>
                aca van los juegos
              </p>
            </div>
            <div className={styles.pay}>
                <p>Total: $1269</p>
                <Btn/> 
                <button className={styles.btnPay}><img className={styles.mp} src="/assets/mp.png" alt="" /></button>
            </div>
        </div>
    </div>
  )
}

export default ShoppingCart