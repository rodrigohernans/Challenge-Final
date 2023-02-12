import React, { useEffect, useState } from "react";
import styles from "../card/card.module.css";
import { Link as Anchor } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import allGamesActions from "../../store/allGames/actions";

const {getAllGames} = allGamesActions


function Card() {
const gamesStore = useSelector(store=>store.allgames.allgames)
/* console.log(gamesStore) */
const dispatch = useDispatch()

useEffect(()=>{
  dispatch(getAllGames())
  /* console.log(gamesStore) */
},[])



  return (
    <div className={styles.conteiner}>
      {gamesStore.map((game,index)=>{
        return(
          <div className={styles.conteinerCard}>
        <Anchor className={styles.anchorDetail} to="./details/63e2cf4dcf592bf7a781c1de"><img  className={styles.gamePhoto} src={game.image} alt="PhotoGame" /></Anchor>
        <div  className={styles.titleAndFav}>
          {game.title}
          <img  className={styles.favIcon} src="../../assets/favoriteIcon.png" alt="" />
        </div>
        <div className={styles.footerCard}>
          <div className={styles.footerIcons}>
            <img  className={styles.icon}src="../../assets/windowsIcon.png" alt="" />
            <img  className={styles.icon}src="../../assets/appleIcon.png" alt="" />{" "}
          </div>
          <button className={styles.buttonPrice}>${game.price}</button>
        </div>
      </div>
        )
      })}
      
    </div>
  );
}
export default Card;
