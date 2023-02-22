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

const NavbarSignIn = (props) => {
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
        
      </div>
    </>
  );
};

export default NavbarSignIn;

///
