import React, { useRef,useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link as Anchor } from "react-router-dom";
import CardFavorites from "../../components/favorites/CardFavorites";
import { Link } from "react-scroll";
import authActions from "../../store/auth/actions";
import { animateScroll as scroll } from "react-scroll";
import { scroller } from "react-scroll";
import allGamesActions from "../../store/allGames/actions";
import styles from "../navbarStore/navbarStore.module.css"
import Categories from "../../components/categories/Categories";

const { cerrar_sesion } = authActions;
const { getAllGamesByFilter } = allGamesActions;

const NavbarStore = (props) => {
  const [favorites, setFavorites] = useState(false);
  const Myfavorites = () => setFavorites(!favorites);
  const text = useSelector((store) => store.allgames.text);
  const [variable, setVariable] = useState(false);
  const menuExplorer = () => {
    setVariable(!variable);
  };
  const inputCategory = useSelector(
    (store) => store?.filterCategories.filterGame
  );
  const [variableAcount, setVariableAcount] = useState(false);
  const menuAcount = () => setVariableAcount(!variableAcount);

  let { token, is_online } = useSelector((store) => store?.auth);
  console.log(token);
  let dispatch = useDispatch();

  async function signout(event) {
    await dispatch(cerrar_sesion(token));
  }

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
    <>
      <div className={styles.nav}>
        <section className={styles.section1}>
          <Anchor to="/home">
            <img
              className={styles.logoImg}
              src="../../assets/nebula letras.png"
              alt="logo"
            />
          </Anchor>

          {favorites ? (
            <div className={styles.myFavorites}>
              <CardFavorites />
            </div>
          ) : null}
          <div className={styles.acount}>
            <Anchor to="./store" className={styles.buttonStore}>
              Store
            </Anchor>
            <Anchor to="./attendance" className={styles.buttonAttendance}>
              Attendance
            </Anchor>
            {is_online ? (
              <>
                <span className={styles.buttonAcount} onClick={signout}>
                  Sign Out
                </span>{" "}
              </>
            ) : (
              <>
                <div onClick={menuAcount} className={styles.buttonAcount}>
                  <div
                    className={styles.explorerAccount}
                    onMouseEnter={() => setVariableAcount(true)}
                  >
                    Acount
                    <img
                      className={styles.arrowAcount}
                      src="../../assets/arrowDesplegableExplore.png"
                      alt="icons"
                      onMouseEnter={() => setVariableAcount(true)}
                    />
                  </div>
                </div>
                {variableAcount ? (
                  <div
                    className={styles.acountMenu}
                    onMouseLeave={() => setVariableAcount(false)}
                  >
                    <Anchor to="./signin" className={styles.menuOption}>
                      Sign in
                    </Anchor>
                    <Anchor to="./signup" className={styles.menuOption}>
                      Sign up
                    </Anchor>
                  </div>
                ) : null}
              </>
            )}
          </div>
        </section>
        <section className={styles.section2}>
          <div className={styles.explore} onClick={menuExplorer}>
            <div onMouseEnter={() => setVariable(true)}>Category filter</div>
            <img
              className={styles.arrowExplore}
              src="../../assets/arrowDesplegableExplore.png"
              alt=""
              onMouseEnter={() => setVariable(true)}
            />
          </div>
          {variable ? (
            <div
              className={styles.explorerMenu}
              onMouseLeave={() => setVariable(false)}
            >
              <Categories/>
              
            </div>
            
          ) : null}
          <div className={styles.divSearch}>
          {/* <img
              className={styles.lupa}
              src="../../../assets/lupa.png"
              alt=""
            /> */}
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
          <div className={styles.buttonsExplore}>
            <Anchor to="./cart">
              <div className={styles.divCarrito}></div>
            </Anchor>
            <div onClick={Myfavorites} className={styles.divDeseados}></div>
            <Anchor to="./home">
              <div className={styles.divNebula}></div>
            </Anchor>
          </div>
        </section>
      </div>
    </>
  );
};

export default NavbarStore;

///
