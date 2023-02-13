import { Link } from "react-router-dom";
import React from "react";
import styles from "./Presentacion.module.css";
import { useState } from "react";

const Presentacion = () => {
  const [isShow, setIsShow] = useState(false);
  const [showInfo, setshowInfo] = useState(false);

  const show = (()=> {setshowInfo(true)})

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img
          src="../../assets/nebulaIsotipe.png"
          className={styles.imagen}
          alt=""
        />
      </div>
      <div className={styles.containerButton}>
        {!showInfo ? (
          <button
            className={styles.button}
            onClick={show}
          >
            Get Started
          </button>
        ) : (
          <div className={styles.info}>
            <Link to={"/home"} className={styles.link} >Explore the best games here </Link>
            <Link to={"/signin"} className={styles.link} >Sigin</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Presentacion;

/* 
   onMouseLeave={() => setIsShow(true)}
          onMouseEnter={() => setIsShow(false)}
*/
