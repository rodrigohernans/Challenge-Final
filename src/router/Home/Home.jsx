import 'react-multi-carousel/lib/styles.css';
import styles from './home.module.css'
import Carousel from 'react-multi-carousel';
import Card from '../../components/card/Card'
import React,{ useEffect } from "react";
import Categories from '../../components/categories/Categories'
import { useSelector,useDispatch } from "react-redux";
import allGamesActions from "../../store/allGames/actions";
import { Link as Anchor } from "react-router-dom";


const {getAllGames} = allGamesActions

function Home() {
const gamesStore = useSelector(store=>store?.allgames?.allgames)
console.log(gamesStore)
const dispatch = useDispatch()

useEffect(()=>{
  dispatch(getAllGames())
  console.log(gamesStore)
},[])

     
    return(
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
            min: 1024
          },
          items: 3,
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
      {gamesStore.map((game,index)=>{
        return(
          <Anchor
              className={
                styles.anchorDetail
              }   to= 
              {`/details/${game._id}`}
              key={index} 
            ><div className={styles.divCarrusel}><img className={styles.carruselImg} src={game.image} alt={game.description} /></div></Anchor>

        )
      })}



       
     </Carousel>
    

       
       
    
            <Categories/>
         <Card/> 
            </div>
    
    )
}

export default Home;
