import 'react-multi-carousel/lib/styles.css';
import styles from './home.module.css'
import Carousel from 'react-multi-carousel';
import Card from '../../components/card/Card'
import React from "react";
import Categories from '../../components/categories/Categories'

function Home() {


     
    return(
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
            min: 1024
          },
          items: 1,
          partialVisibilityGutter: 40
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0
          },
          items: 1,
          partialVisibilityGutter: 30
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464
          },
          items: 2,
          partialVisibilityGutter: 30
        }
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
      <div className={styles.divCarrusel}><img className={styles.carruselImg} src="https://images.crazygames.com/games/forge-of-empires/cover-1589012034370.png?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&w=1200&h=630&fit=crop" alt="" /></div>
        <div className={styles.divCarrusel}><img className={styles.carruselImg} src="https://cdn.cloudflare.steamstatic.com/steam/apps/1316870/capsule_616x353.jpg?t=1615322424" alt="" /></div>
        <div className={styles.divCarrusel}><img className={styles.carruselImg} src="https://cdn.akamai.steamstatic.com/steam/apps/567630/capsule_616x353.jpg?t=1669272638" alt="" /></div>
        <div className={styles.divCarrusel}><img className={styles.carruselImg} src="https://www.onrpg.com/wp-content/uploads/2018/02/The_Third_Age_668x227.jpg" alt="" /></div>
        <div className={styles.divCarrusel}><img className={styles.carruselImg} src="https://cdn.cloudflare.steamstatic.com/steam/apps/588430/capsule_616x353.jpg?t=1671140220" alt="" /></div>
    </Carousel>
    

       
       
    
            <Categories/>
            <Card/>
            </div>
    
    )
}

export default Home