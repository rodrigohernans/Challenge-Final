import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link as Anchor } from "react-router-dom";
import CardFavorites from "../../components/favorites/CardFavorites";
import { Link } from "react-scroll";
import authActions from "../../store/auth/actions";
import { animateScroll as scroll } from "react-scroll";
import { scroller } from "react-scroll";
import styles from "../navbar/navbar.module.css";

const { cerrar_sesion } = authActions;

const Navbar = (props) => {
  const [favorites, setFavorites] = useState(false);
  const Myfavorites = () => setFavorites(!favorites);

  const [variable, setVariable] = useState(false);
  const menuExplorer = () => {
    setVariable(!variable);
  };

  const [variableAcount, setVariableAcount] = useState(false);
  const menuAcount = () => setVariableAcount(!variableAcount);

  let { token, is_online } = useSelector((store) => store?.auth);
  console.log(token);
  let dispatch = useDispatch();

  async function signout(event) {
    await dispatch(cerrar_sesion(token));
  }


  return (
    <>
      <div className={styles.nav}>
        <section className={styles.section1}>
          <Anchor to="/home">
            <img
              className={styles.logoImg}
              src="../../assets/nebulaIsotipe.png"
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
            <div onMouseEnter={() => setVariable(true)}
            >Explorer</div>
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
              <Link
                className={styles.menuOption}
                to="cheap"
                smooth={true}
                duration={600}
              >
                Cheaper games
              </Link>
              <Link
                className={styles.menuOption}
                to="quality"
                smooth={true}
                duration={600}
              >
                Highest quality games
              </Link>
              <Link
                className={styles.menuOption}
                to="free"
                smooth={true}
                duration="800"
              >
                Free games
              </Link>
            </div>
          ) : null}
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

export default Navbar;

///
