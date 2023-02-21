import React from "react";
import styles from "./Loader.module.css";

function Loader() {
  return (
    <div className={styles.container}>
      <div className={styles.loader}>
        <span className={styles.loaderText}>loading</span>
        <span className={styles.load}></span>
      </div>
    </div>
  );
}

export default Loader;
