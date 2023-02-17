import React from "react";
import styles from "./favorites.module.css";
import favoritesActions from '../../store/favorites/actions'
import { useSelector, useDispatch } from "react-redux";
import { useRef, useEffect } from "react";

const { addFav,readFav} = favoritesActions;


function CardFavorites() {
  const dispatch = useDispatch();
  let { token } = useSelector((store) => store?.auth);
 let favs = useSelector((store)=>store?.favoritesReactions?.fav)
console.log(favs)

useEffect(()=>{
  dispatch(readFav(token))
},[])

  return (
    <div className={styles.container}>
 {favs.response?.map((fav)=> (
 <section className={styles.card}>
        <img
          className={styles.img}
          src={fav?.game_id?.image}
          alt=""
        />

        <div className={styles.data}>
          {" "}
          <p className={styles.title}>{fav?.game_id?.title}</p>
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
            <button className={styles.price}>${fav?.game_id?.price}</button>
          </div>
        </div>
      </section>))}
      
      
    </div>
  );
}

export default CardFavorites;
