import "react-multi-carousel/lib/styles.css";

import { useDispatch, useSelector } from "react-redux";

import Carousel from "react-multi-carousel";
import React from "react";
import gamesActions from "../../store/games/action";
import styles from "./Carousel.module.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const { getGame } = gamesActions;
const ContainerCarousel = () => {
  const gameStore = useSelector((store) => store?.games);

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getGame(id));
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className={styles.container}>
      <Carousel responsive={responsive} className={styles.carousel}>
        {gameStore?.game?.response?.trailer?.map((one) => {
          return (
            <div>
              <img
                src={one}
                value={gameStore?.game?.response?.description}
                alt=""
                className={styles.imgCarousel}
              />
            </div>
          );
        })}
        {/* <p>funciona esta garchaaaaa</p> */}
      </Carousel>
    </div>
  );
};

export default ContainerCarousel;
