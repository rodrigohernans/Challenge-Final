import React, { useEffect ,useRef,useState} from "react";
import Categories from "../categories/Categories";
import Card from "../card/Card";
import styles from "./AllGamesCards.module.css"
import { useSelector,useDispatch } from "react-redux";
import allGamesActions from "../../store/allGames/actions";

const {getAllGames} = allGamesActions

const GamesCards = () => {
  const dispatch = useDispatch()
const gamesStore = useSelector(store=>store)
const text = useSelector((store) => store.allgames.text);
const inputCategory = useSelector((store) => store?.filterCategories
.filterGame);
console.log(gamesStore)
const [load, setLoad] = useState(false);
let inputText = useRef(text);


useEffect(()=>{
  dispatch(getAllGames())
},[])


  return(
    <div className={styles.conteiner}>
      <div >
        <img src="https://www.freetogame.com/g/157/thumbnail.jpg" alt="" />
      </div>
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
      {/* {boton()} */}
      </section>
      </div>
  )
}
export default GamesCards