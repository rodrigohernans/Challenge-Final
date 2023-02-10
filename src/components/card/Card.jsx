import React, { useEffect, useState } from "react";
import styles from "../card/card.module.css";

function Card() {
  return (
    <div className={styles.conteiner}>
      <div className={styles.conteinerCard}>
        <img  className={styles.gamePhoto} src="https://cdn.akamai.steamstatic.com/steam/apps/567630/capsule_616x353.jpg?t=1669272638" alt="PhotoGame" />
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
