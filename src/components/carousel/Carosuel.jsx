import "react-multi-carousel/lib/styles.css";

import Carousel from "react-multi-carousel";
import React from "react";
import styles from "./Carousel.module.css";

const ContainerCarousel = () => {

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
    <div className={styles.container} id="carousel">
      <Carousel responsive={responsive} className={styles.carousel}>
        <div className={styles.containerImage}>
          <img
            src="https://cdn.gamebrott.com/wp-content/uploads/2020/04/NewWorld_Combat_01_1920x1080.jpg"
            alt=""
            className={styles.imgCarousel}
          />
        </div>
        <div className={styles.containerImage}>
          <img
            src="https://images.ctfassets.net/j95d1p8hsuun/2AMihG9mdiHtgZSY0MaoaT/7ec0c6fb358c19ba9cfe4ce537befdc4/header---image.jpg"
            alt=""
            className={styles.imgCarousel}
          />
        </div>
        <div className={styles.containerImage}>
          <img
            src=  "https://tm.ibxk.com.br/2021/10/21/21160847753349.jpg?ims=1200x675"
            alt=""
            className={styles.imgCarousel}
          />
        </div>
        <div className={styles.containerImage}>
          <img
            src="https://s1.gaming-cdn.com/images/products/9771/orig/new-world-deluxe-edition-deluxe-edition-pc-juego-steam-cover.jpg?v=1648052857"
            alt=""
            className={styles.imgCarousel}
          />
        </div>
        <div className={styles.containerImage}>
				<img
              src="https://images.ctfassets.net/j95d1p8hsuun/29peK2k7Ic6FsPAVjHWs8W/06d3add40b23b20bbff215f6979267e8/NW_OPENGRAPH_1200x630.jpg"
              alt=""
              className={styles.imgCarousel}
            />
        </div>
      </Carousel>
    </div>
  );
};

export default ContainerCarousel;
