import React from "react";
import styles from "./favorites.module.css";

function CardFavorites() {
  return (
    <div className={styles.container}>
      <section className={styles.card}>
        <img
          className={styles.img}
          src="https://p4.wallpaperbetter.com/wallpaper/424/216/1017/power-chainsaw-man-chainsaw-man-manga-hd-wallpaper-preview.jpg"
          alt=""
        />

        <div className={styles.data}>
          {" "}
          <p className={styles.title}>Titulo del juego</p>
          <div className={styles.allButtons}>
            <div className={styles.buttons}>
              <img
                className={styles.fav}
                src="../../assets/favoriteIcon.png"
                alt=""
              />
              <img
                className={styles.cart}
                src="../../assets/shopIcon.png"
                alt=""
              />
            </div>
            <button className={styles.price}>$1234</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CardFavorites;
