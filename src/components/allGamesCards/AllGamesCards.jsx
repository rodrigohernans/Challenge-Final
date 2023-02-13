import React, { useEffect ,useRef,useState} from "react";
import Categories from "../categories/Categories";
import Card from "../card/Card";
import styles from "./AllGamesCards.module.css"
import { useSelector,useDispatch } from "react-redux";
import allGamesActions from "../../store/allGames/actions";

const {getAllGames} = allGamesActions

const GamesCards = () => {
  const dispatch = useDispatch()
const gamesStore = useSelector(store=>store.allgames.allgames)
//const text = useSelector((store) => store.comics.text);
const inputCategory = useSelector((store) => store.filterCategories
.filterGame);
console.log(inputCategory)
//const [load, setLoad] = useState(false);


useEffect(()=>{
  dispatch(getAllGames({
    //inputText: inputText.current?.value,
    inputCategory: inputCategory.join(","),
  }))
},[inputCategory])


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