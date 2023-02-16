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
  const text = useSelector((store) => store.allgames.text);
  const inputCategory = useSelector(
    (store) => store?.filterCategories.filterGame
  );
  console.log(inputCategory);
  const [load, setLoad] = useState(false);
  let inputText = useRef(text);

  useEffect(() => {
    dispatch(
      getAllGamesByFilter({
        inputText: inputText.current?.value,
        inputCategory: inputCategory.join(","),
      })
    );
  }, [load, inputCategory]);

  return (
    <div>
      <section>
        <div>
          <Categories />
          <div className={styles.divSearch}>
            <img
              className={styles.lupa}
              src="../../../assets/lupa.png"
              alt=""
            />
            <input
              className={styles.search}
              ref={inputText}
              onKeyUp={() => setLoad(!load)}
              type="text"
              id="search"
              placeholder="Find your game here"
              defaultValue={text}
            />
          </div>
        </div>
      </section>
      <section>
        <Card />
      </section>
    </div>
  );
};
export default Store;
