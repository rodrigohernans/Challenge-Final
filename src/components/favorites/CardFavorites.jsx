import React from "react";
import styles from "./favorites.module.css";
import favoritesActions from '../../store/favorites/actions'
import { useSelector, useDispatch } from "react-redux";
import { useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import gamesActions from "../../store/games/action";
import BtnFav from '../favorites/BtnFav'

const { addFav,readFav} = favoritesActions;
const { getGame } = gamesActions;

function CardFavorites() {
  const dispatch = useDispatch();
  const { id } = useParams();
  let { token } = useSelector((store) => store?.auth);
 let favs = useSelector((store)=>store.favoritesReactions?.fav)
 const gameStore = useSelector((store) => store?.games);
console.log(favs)

useEffect(()=>{
  dispatch(readFav(token))
},[token])

useEffect(() => {
  if (gameStore) {
    console.log("funciona");
    dispatch(getGame(id));
  } else {
    console.log("no funciona");
  }
}, []);

const fragment =()=>{
  if (favs.response===undefined){
    return(
      <div>no favorites</div>
    )
  }
}

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
            <BtnFav game_id={fav.game_id._id} />
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
