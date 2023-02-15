
import { Link } from "react-router-dom";
import React from "react";
import styles from "./AccountVerify.module.css";
import { useState } from "react";

const AccountVerify = () => {
  const [isShow, setIsShow] = useState(false);
  const [showInfo, setshowInfo] = useState(false);

  const show = () => {
    setshowInfo(true);
  };

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
          <div className={styles.info}>
            <Link to={"/"} className={styles.link}>
            Please check your email to verify your account


            </Link>
          </div>
        
      </div>
    </div>
  );
};

export default AccountVerify;


