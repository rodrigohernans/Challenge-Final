import React from 'react'
import styles from './cartCard.module.css';


function CartCard() {




  return (
    <div className={styles.games}>
            <div className={styles.card}>
                <div className={styles.imageContainer}>
                    <img className={styles.image} src="https://images.crazygames.com/games/forge-of-empires/cover-1589012034370.png?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&w=1200&h=630&fit=crop" alt="" />
                </div>
                <div className={styles.description}>
                    <p>Forge of Empires</p>
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
    </div>
  )
}



export default CartCard