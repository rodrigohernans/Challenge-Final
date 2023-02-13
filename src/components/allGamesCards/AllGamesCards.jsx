import React, { useEffect } from "react";
import Categories from "../categories/Categories";
import Card from "../card/Card";
import styles from "./AllGamesCards.module.css"
import { useSelector,useDispatch } from "react-redux";
import allGamesActions from "../../store/allGames/actions";

const {getAllGames} = allGamesActions

const GamesCards = () => {
const gamesStore = useSelector(store=>store.allgames.allgames)
console.log(gamesStore)
const text = useSelector((store)=>store.allgames.text)
const inputCategory = useSelector((store)=>store.allgames.inputCategory)
console.log(text)
const dispatch = useDispatch()

useEffect(()=>{
  dispatch(getAllGames())
  console.log(gamesStore)
},[])

  return(
    <div className={styles.conteiner}>
      <div className={styles.carrusel}>
        <img src="https://www.freetogame.com/g/157/thumbnail.jpg" alt="" className={styles.carrusel}/>
      </div>
      <section className={styles.sectionCategories} >
       <div className={styles.divCategories}>
          <Categories/>
          </div>
         
        <div className={styles.divSearch}>
          <img className={styles.search} src="../../assets/lupa.png" alt="" />
          <input type="text" 
          placeholder="Find your games here"
          className={styles.input}
          />
        </div>
      </section>
      <section className={styles.sectionCards}>
        
      <Card/>
      </section>
      </div>
  )
}
export default GamesCards