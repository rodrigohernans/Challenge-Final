import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link as Anchor } from "react-router-dom";
import allGamesActions from "../../store/allGames/actions";
import styles from "../card/cardHome.module.css";

const { getAllGames } = allGamesActions;


function CardCheap() {

const gamesStore = useSelector(store=>store?.allgames?.allgames)

const gamesCopy = [...gamesStore]
gamesCopy.sort(function compare(a, b) {
  let priceA = new Number(a.price);
  let priceB = new Number(b.price);
  return priceA - priceB;
})
console.log(gamesCopy)

let gamesMoreExpensibeOnly5 = gamesCopy.slice(4,8)
  console.log(gamesMoreExpensibeOnly5)

const dispatch = useDispatch()

useEffect(()=>{
  dispatch(getAllGames(""))
},[])


  return (
    <div className={styles.conteiner}>
      { gamesMoreExpensibeOnly5.map((game, index) => {
        return (
          <div className={styles.conteinerCard} key={index} >
            <Anchor
              className={
                styles.anchorDetail
              }   to= 
              {`/details/${game._id}`}
              key={index} 
            >
              <img
                className={styles.gamePhoto}
                src={game.image}
                alt="PhotoGame"
              />
            </Anchor>
            <div className={styles.titleAndFav}>
              {game.title}
              <img
                className={styles.favIcon}
                src="../../assets/favoriteIcon.png"
                alt=""
                />
            </div>
            <div className={styles.extra}>
                {game.developer}
                
            </div>
            <div className={styles.footerCard}>
              <div className={styles.footerIcons}>
                <img
                  className={styles.icon}
                  src="../../assets/windowsIcon.png"
                  alt=""
                />
                <img
                  className={styles.icon}
                  src="../../assets/appleIcon.png"
                  alt=""
                />{" "}
              </div>
              <button className={styles.buttonPrice}>${game.price}</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default CardCheap;
