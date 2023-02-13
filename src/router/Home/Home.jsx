import "react-multi-carousel/lib/styles.css";

import Card from "../../components/card/Card";
import Carousel from "react-multi-carousel";
import Categories from "../../components/categories/Categories";
import React from "react";
import styles from "./home.module.css";

function Home() {
  return (
    <div className={styles.homeContainer}>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite={false}
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
            items: 1,
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
        <div className={styles.divCarrusel}>
          <img
            className={styles.carruselImg}
            src= "https://codigovalido.com.br/wp-content/uploads/2020/02/cupom-league-of-angels.jpg"
            
            alt=""
            />
        </div>
        <div className={styles.divCarrusel}>
          <img
            className={styles.carruselImg}
            src= "https://i.ytimg.com/vi/HQq-J1UxY58/maxresdefault.jpg"
            alt=""
          />
        </div>
        <div className={styles.divCarrusel}>
          <img
            className={styles.carruselImg}
            src=  "https://s1.mmommorpg.com/media/wide/maxresdefault_rGzOvJC.jpg"
            alt=""
          />
        </div>
        <div className={styles.divCarrusel}>
          <img
            className={styles.carruselImg}
            src=  "https://analisadaily.com/imagesfile/202211/20221129-192005_valorant-akan-segera-hadir-di-android.jpeg"
            alt=""
          />
        </div>
        <div className={styles.divCarrusel}>
          <img
            className={styles.carruselImg}
            src="https://cdn.eraspace.com/pub/media/mageplaza/blog/post/e/z/ezgif-1-769bdac2cc.jpg"
            alt=""
          />
        </div>
      </Carousel>

      <Categories />
      <Card />
    </div>
  );
}

export default Home;
