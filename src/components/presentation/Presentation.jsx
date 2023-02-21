import { Link } from "react-router-dom";
import Loader from "../loader/Loader";
import React from "react";
import styles from "./Presentation.module.css";
import { useNavigate } from "react-router";
import { useState } from "react";

const Presentation = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [showInfo, setshowInfo] = useState(false);

  const show = () => {
    setshowInfo(true);
  };

  const navigate = useNavigate();

  const handleToHome= () => {
    setIsLoading(true)
    setTimeout(() => {
      navigate("/home")
    }, 2500)
  }
  
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
          <button className={styles.button} onClick={show}>
            Get Started
          </button>
        ) : (
          <div className={styles.info}>
            <Link  onClick={handleToHome} className={styles.link}>
              Explore the best games here{" "}
            </Link>
            <Link to={"/signin"} className={styles.link}>
              Sig in
            </Link>
          </div>
        )}
        {isLoading &&  <Loader />}
      </div>
    </div>
  );
};

export default Presentation;


