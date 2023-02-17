import "react-multi-carousel/lib/styles.css";

import { useDispatch, useSelector } from "react-redux";

import Btn from "../cart/Btn";
import Carousel from "react-multi-carousel";
import { Link } from "react-scroll";
import React from "react";
import Requirements from "../requerimientos/Requirements";
import YouTube from "react-youtube";
import apple from "./appleIcon.png";
import cartActions from "../../store/cart/cart.actions";
import gamesActions from "../../store/games/action";
import shop from "./shopIcon.png";
import styles from "./cardDetails.module.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import window from "./windowsIcon.png";

const { addCart } = cartActions;
const { getGame } = gamesActions;

function CardDetails() {
  const opts = {
    height: "280",
    width: "580",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const gameStore = useSelector((store) => store?.games);
  /*   console.log(gameStore); */
  let cartStore = useSelector((store) => store);
  console.log(cartStore);

  const dispatch = useDispatch();
  const { id } = useParams();

  const buy = () => {
    const data = { _id: id };
    dispatch(addCart(data));
  };

  useEffect(() => {
    if (gameStore) {
      console.log("funciona");
      dispatch(getGame(id));
    } else {
      console.log("no funcionaaaa");
    }
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
            <p className={styles.title}> {gameStore?.game?.response?.title} </p>
            <p className={styles.description}>
              {gameStore?.game?.response?.description}
            </p>
            <div className={styles.downInfo}>
              <img src={window} alt="" className={styles.window} />
              <img src={apple} alt="" className={styles.window} />
              <Btn game_id={id} />
            </div>
          </div>
        </div>

        <div className={styles.secondContainer} id="carousel2">
          <div className={styles.containerImage2}>
            <YouTube
              className={styles.youtube}
              videoId={gameStore?.game?.response?.video}
              opts={opts}
            />
          </div>
          <div className={styles.containerP}>
            <p className={styles.category}>
              {" "}
              Category: {gameStore?.game?.response?.category}{" "}
            </p>
            <p className={styles.developer}>
              Developer: {gameStore?.game?.response?.developer}{" "}
            </p>
          </div>
          <div className={styles.containerCarousel}>
            <Carousel
              additionalTransfrom={0}
              arrows
              autoPlay
              autoPlaySpeed={3000}
              centerMode={false}
              containerClass="container-with-dots"
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite={true}
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              pauseOnHover
              renderArrowsWhenDisabled={false}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={responsive}
              className={styles.carousel}
            >
              <div className={styles.containerImg}>
                <img
                  src={gameStore?.game?.response?.trailer[0]}
                  value={gameStore?.game?.response?.title}
                  alt=""
                  className={styles.imgCarousel}
                  key={gameStore?.game?.response?.title}
                />
              </div>
              <div className={styles.containerImg}>
                <img
                  src={gameStore?.game?.response?.trailer[1]}
                  value={gameStore?.game?.response?.title}
                  alt=""
                  className={styles.imgCarousel}
                  key={gameStore?.game?.response?.title}
                />
              </div>
              <div className={styles.containerImg}>
                <img
                  src={gameStore?.game?.response?.trailer[2]}
                  value={gameStore?.game?.response?.title}
                  alt=""
                  className={styles.imgCarousel}
                  key={gameStore?.game?.response?.title}
                />
              </div>
              <div className={styles.containerImg}>
                <img
                  src={gameStore?.game?.response?.trailer[3]}
                  value={gameStore?.game?.response?.title}
                  alt=""
                  className={styles.imgCarousel}
                  key={gameStore?.game?.response?.title}
                />
              </div>
              <div className={styles.containerImg}>
                <img
                  src={gameStore?.game?.response?.trailer[4]}
                  value={gameStore?.game?.response?.title}
                  alt=""
                  className={styles.imgCarousel}
                  key={gameStore?.game?.response?.title}
                />
              </div>
            </Carousel>
          </div>
        </div>
      </div>

      <div className={styles.containerReq}>
        <Requirements />
      </div>
    </div>
  );
}

export default CardDetails;
