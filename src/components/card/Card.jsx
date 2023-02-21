import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link as Anchor } from "react-router-dom";
import allGamesActions from "../../store/allGames/actions";
import styles from "../card/card.module.css";

const { getAllGames } = allGamesActions;

function Card() {
  const gamesStore = useSelector((store) => store?.allgames?.allgames);
  console.log(gamesStore)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllGames(""));
  }, []);

  return (
    <div className={styles.conteiner}>
      {gamesStore.map((game, index) => {
        return (
          <div className={styles.conteinerCard} key={index}>
            <Anchor
              className={styles.anchorDetail}
              to={`/details/${game._id}`}
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
              <p className={styles.buttonPrice}>${game.price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Card;
