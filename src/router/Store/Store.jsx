import React, { useEffect ,useRef,useState} from "react";
import Categories from "../categories/Categories";
import Card from "../card/Card";
import styles from "./AllGamesCards.module.css"
import { useSelector,useDispatch } from "react-redux";
import allGamesActions from "../../store/allGames/actions";
import styles from "../Store/Store.module.css"

const {getAllGames} = allGamesActions

const GamesCards = () => {
  const dispatch = useDispatch()
const gamesStore = useSelector(store=>store?.allgames?.allgames)
const text = useSelector((store) => store.allgames.text);
const inputCategory = useSelector((store) => store?.filterCategories
.filterGame);
console.log(inputCategory)
const [load, setLoad] = useState(false);
let inputText = useRef(text);


useEffect(()=>{
  dispatch(getAllGames({
    inputText: inputText.current?.value,
    inputCategory: inputCategory.join(","),
  }))
},[load,inputCategory])


  return(
    <div className={styles.contenedor}>
      <section>
        <div>
        <Categories/>
        <input
          ref={inputText}
          onKeyUp={() => setLoad(!load)}
          className={styles.search}
          type="text"
          id="search"
          placeholder="Find your game here"
          defaultValue={text}
        />
        </div>
      </section>
      <section >
      <Card/>
      </section>
      </div>
  )
}
export default Store