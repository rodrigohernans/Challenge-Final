import "react-multi-carousel/lib/styles.css";

import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link as Anchor } from "react-router-dom";
import Card from "../../components/card/Card";
import CardCheap from "../../components/card/CardCheap";
import CardFree from "../../components/card/CardFree";
import CardMoreExpensibe from "../../components/card/CardMostExpensibe";
import Carousel from "react-multi-carousel";
import { Element } from "react-scroll";
import allGamesActions from "../../store/allGames/actions";
import styles from "./home.module.css";

const { getAllGames } = allGamesActions;

function Home() {
  const gamesStore = useSelector((store) => store?.allgames?.allgames);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllGames(""));
  }, []);

  return (
    <div className={styles.homeContainer}>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={3000}
        centerMode={false}
        className={styles.carrusel}
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
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        rewind
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {gamesStore.map((game, index) => {
          return (
            <Anchor
              className={styles.anchorDetail}
              to={`/details/${game._id}`}
              key={index}
            >
              <div className={styles.divCarrusel}>
                <img
                  className={styles.carruselImg}
                  src={game.image}
                  alt={game.description}
                />
              </div>
            </Anchor>
          );
        })}
      </Carousel>
      <div className={styles.divGames}
      
      >
        <Element className={styles.titleGames}
      name="cheap"
        >Play the cheapest games</Element>
      </div>
      <div className={styles.CardMoreExpensibeContainer}>
        <CardCheap />
      </div>
      <div className={styles.divGames}>
        <Element className={styles.titleGames} name="quality"> Play the highest quality games</Element>
      </div>
      <div className={styles.CardMoreExpensibeContainer}>
        <CardMoreExpensibe />
      </div>
      <div className={styles.divGames}>
        <Element className={styles.titleGames} name="free"> Play the best free games</Element>
      </div>
      <div className={styles.CardMoreExpensibeContainer}>
        <CardFree />
      </div>
    </div>
  );
}

export default Home;
