import React, { useEffect } from "react";
import Categories from "../categories/Categories";
import Card from "../card/Card";
import styles from "./AllGamesCards.module.css"
import { useSelector,useDispatch } from "react-redux";
import allGamesActions from "../../store/allGames/actions";

const {getAllGames} = allGamesActions

const GamesCards = () => {
const gamesStore = useSelector(store=>store.allgames.allgames)
const page = useSelector(store=>store)
console.log(page)
const dispatch = useDispatch()

useEffect(()=>{
  dispatch(getAllGames())
},[])
/* const next = () => {
  const gamesLimit = gamesLimit.length
  console.log(gamesLimit)
  dispatch(
    getComics({
      page: page+1,
    })
  );
} */;
/* const boton = () => {
    
  const gamesLimit = gamesLimit.length
  console.log(gamesLimit)
  
  if (gamesLimit<9) {
    return <button >No more games</button>;
  } else {
    return (
      <button onClick={next}>
        More
      </button>
    );
  }
}; */

  return(
    <div className={styles.conteiner}>
      <div >
        <img src="https://www.freetogame.com/g/157/thumbnail.jpg" alt="" />
      </div>
      <section>
        <div>
        <Categories/>
        </div>
      </section>
      <section >
      <Card/>
      {/* {boton()} */}
      </section>
      </div>
  )
}
export default GamesCards