import { useDispatch, useSelector } from "react-redux";

import ContainerCarousel from "../carousel/Carosuel";
import { Link } from "react-scroll";
import React from "react";
import Requirements from "../requerimientos/Requirements";
import apple from "../../assets/appleIcon.png";
import gamesActions from "../../store/games/action";
import shop from "../../assets/shopIcon.png";
import styles from "./cardDetails.module.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import window from "../../assets/windowsIcon.png";

function CardDetails() {
  const gameStore = useSelector((store) => store.games);
  

  return (
    <div className={styles.containerGeneral}>
      <div className={styles.containerCard}>
        <div className={styles.firstContainer}>
          <div className={styles.containerImage}>
            <img
              src={gameStore?.game?.response?.image}
              alt=""
              className={styles.imagen}
            />
          </div>
          <div className={styles.info}>
            <p className={styles.titulo}> {gameStore?.game?.response?.title} </p>
            <p className={styles.description}>
              {gameStore?.game?.response?.description}
            </p>
            <div className={styles.downInfo}>
              <img src={window} alt="" className={styles.window} />
              <img src={apple} alt="" className={styles.window} />
              <img src={shop} alt="" className={styles.shop} />
            </div>
          </div>
          <div className={styles.moreInfo}>
            <Link
              className={styles.button}
              to="carousel2"
              smooth={true}
              duration={500}
            >
              Explore more images
            </Link>
          </div>
          <div className={styles.moreInfo}>
            <Link
              to="Requirements"
              className={styles.button}
              smooth={true}
              duration={500}
            >
              Check the requirements
            </Link>
          </div>
        </div>

        <div className={styles.secondContainer}>
          <div className={styles.containerImage2}>
            <img
              src="https://media.wired.co.uk/photos/60f1af69a98458eddde4f111/16:9/w_2560%2Cc_limit/World_Brightwood.jpg"
              alt=""
              className={styles.mainImage}
              id="carousel2"
            />
          </div>
          <div className={styles.containerP}>
            <p className={styles.category}> Category: {gameStore?.game?.response?.category}  </p>
            <p className={styles.developer}>Developer: {gameStore?.game?.response?.developer} </p>
          </div>
          <ContainerCarousel />
        </div>
      </div>
      <div className={styles.containerReq}>
        <Requirements />
      </div>
    </div>
  );
}

export default CardDetails;
