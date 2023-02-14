import React, { useState } from "react";
import styles from "../navbar/navbar.module.css";
import { Link as Anchor } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import authActions from "../../store/auth/actions"
const { cerrar_sesion } = authActions;

const Navbar = () => {
  const [variable, setVariable] = useState(false);
  const menuExplorer = () => setVariable(!variable);

  const [variableAcount, setVariableAcount] = useState(false);
  const menuAcount = () => setVariableAcount(!variableAcount);

  let { token, is_online } = useSelector((store) => store.auth);
  console.log(token)
  let dispatch = useDispatch();

  async function signout(event) {
      await dispatch(cerrar_sesion(token));
  }

  return (
    <>
      <div className={styles.nav}>
        <section className={styles.section1}>
          <Anchor to="/"><img 
            className={styles.logoImg}
            src="../../assets/nebulaIsotipe.png"
            alt="logo"
          /></Anchor>
          <div className={styles.acount}>
            <Anchor to="./store" className={styles.buttonStore}>Store</Anchor>
            <div className={styles.buttonAttendance}>Attendance</div>
            {is_online ? (<>
              <span className={styles.buttonAcount}  onClick={signout}>
          Sign Out
        </span> </>) : (<>
              <div onClick={menuAcount} className={styles.buttonAcount}>
              Acount
              <img
                className={styles.arrowAcount}
                src="../../assets/arrowDesplegableExplore.png"
                alt=""
              />
            </div>
            {variableAcount ? (
              <div className={styles.acountMenu}>
                <Anchor to="./signin" className={styles.menuOption}>Sign in</Anchor>
                <Anchor to="./signup"className={styles.menuOption}>Sign up</Anchor>
                <Anchor to="./"className={styles.menuOption}>ejemplo3</Anchor>
              </div>
            ) : null}
            </>)}
            
          </div>
        </section>
       
        <section className={styles.section2}>
          <div onClick={menuExplorer} className={styles.explore}>
            Explore
            <img
              className={styles.arrowExplore}
              src="../../assets/arrowDesplegableExplore.png"
              alt=""
            />
          </div>
          {variable ? (
            <div className={styles.explorerMenu}>
              <Anchor to="./details/63e2cf4dcf592bf7a781c1de" className={styles.menuOption}>ejemplo carta detail</Anchor>
              <Anchor className={styles.menuOption} to="./store">Store</Anchor>
              <Anchor className={styles.menuOption}>ejemplo3</Anchor>
            </div>
          ) : null}
          <div className={styles.buttonsExplore}>
          <Anchor to="./cart"><div className={styles.divCarrito}></div></Anchor>
            <div className={styles.divDeseados}></div>
            <div className={styles.divNebula}></div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Navbar;

///