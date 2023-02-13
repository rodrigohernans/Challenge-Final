import React, { useState } from "react";
import styles from "../navbar/navbar.module.css";
import { Link as Anchor } from "react-router-dom";

const Navbar = () => {
  const [variable, setVariable] = useState(false);
  const menuExplorer = () => setVariable(!variable);

  const [variableAcount, setVariableAcount] = useState(false);
  const menuAcount = () => setVariableAcount(!variableAcount);

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
            <div className={styles.buttonAttendance}>Attendance</div>
            <div onClick={menuAcount} className={styles.buttonAcount}>
              {" "}
              Acount{" "}
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
              <Anchor to="./"className={styles.menuOption}>ejemplo2</Anchor>
              <Anchor to="./"className={styles.menuOption}>ejemplo3</Anchor>
            </div>
          ) : null}
          <div className={styles.buttonsExplore}>
          <Anchor to="./shopping-cart"><div className={styles.divCarrito}></div></Anchor>
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