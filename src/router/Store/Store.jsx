import React, { useEffect, useRef, useState } from "react";
import Categories from "../../components/categories/Categories";
import Card from "../../components/card/Card";
import { useSelector, useDispatch } from "react-redux";
import allGamesActions from "../../store/allGames/actions";
import GamesCategories from "../../components/categories/GamesCategories";
import styles from "../Store/Store.module.css";

const { getAllGamesByFilter } = allGamesActions;

const Store = () => {
  const dispatch = useDispatch();
  const gamesStore = useSelector((store) => store?.allgames?.allgames);
  const [category, setCategory] = useState(true)
  /* const text = useSelector((store) => store.allgames.text); */

 
  const inputCategory = useSelector(
    (store) => store?.filterCategories.filterGame
  );
   console.log(inputCategory); 

   useEffect(() => {
    setCategory(inputCategory.length > 0);
  }, [inputCategory]);
console.log(category)
  /* let category = useSelector((store)=> store?.categories?.categories)
    console.log(category) */
  /* const [load, setLoad] = useState(false);
  let inputText = useRef(text); */

  /* useEffect(() => {
    dispatch(
      getAllGamesByFilter({
        inputText: inputText.current?.value,
        inputCategory: inputCategory.join(","),
      })
    );
  }, [load, inputCategory]);
 */
  return (
    <div>
      <section>
        
          {!category ? (<div className={styles.containerh2}>

            <h2>  Find your games here </h2>
          </div>
          ) : (<div className={styles.containerh21}><h2>Category: {`${inputCategory}`} </h2></div>)}
        
      </section>
      <section>
        <Card />
      </section>
    </div>
  );
};
export default Store;
