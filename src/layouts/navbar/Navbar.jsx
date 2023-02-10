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
                <Anchor className={styles.menuOption}>ejemplo1</Anchor>
                <Anchor className={styles.menuOption}>ejemplo2</Anchor>
                <Anchor className={styles.menuOption}>ejemplo3</Anchor>
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
              <Anchor className={styles.menuOption}>ejemplo1</Anchor>
              <Anchor className={styles.menuOption}>ejemplo2</Anchor>
              <Anchor className={styles.menuOption}>ejemplo3</Anchor>
            </div>
          ) : null}
          <div className={styles.buttonsExplore}>
            <div className={styles.divCarrito}></div>
            <div className={styles.divDeseados}></div>
            <div className={styles.divNebula}></div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Navbar;
