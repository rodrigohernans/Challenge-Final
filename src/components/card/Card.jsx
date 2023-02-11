import React, { useEffect, useState } from "react";
import styles from "../card/card.module.css";
import { Link as Anchor } from "react-router-dom";

function Card() {
  return (
    <div className={styles.conteiner}>
      <div className={styles.conteinerCard}>
        <Anchor className={styles.anchorDetail} to="./details/63e2cf4dcf592bf7a781c1de"><img  className={styles.gamePhoto} src="https://assets.nintendo.com/image/upload/ar_16:9,c_limit,w_656/b_white/f_auto/q_auto/ncom/es_LA/games/switch/t/the-legend-of-zelda-breath-of-the-wild-switch/hero" alt="PhotoGame" /></Anchor>
        <div  className={styles.titleAndFav}>
          Title
          <img  className={styles.favIcon} src="../../assets/favoriteIcon.png" alt="" />
        </div>
        <div className={styles.footerCard}>
          <div className={styles.footerIcons}>
            <img  className={styles.icon}src="../../assets/windowsIcon.png" alt="" />
            <img  className={styles.icon}src="../../assets/appleIcon.png" alt="" />{" "}
          </div>
          <button className={styles.buttonPrice}>$12312</button>
        </div>
      </div>
    </div>
  );
}
export default Card;
