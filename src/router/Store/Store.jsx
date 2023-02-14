import React, { useEffect } from "react";
import Categories from "../../components/categories/Categories";
import Card from "../../components/card/Card";
import { useSelector,useDispatch } from "react-redux";
import allGamesActions from "../../store/allGames/actions";
import styles from "../Store/Store.module.css"

const {getAllGames} = allGamesActions

const Store = () => {
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
    <div className={styles.contenedor}>
      <section>
        <div>
        <Categories/>
        </div>
      </section>
      <section >
      <Card/>
      </section>
      </div>
  )
}
export default Store