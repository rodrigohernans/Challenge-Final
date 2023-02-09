import styles from "./Requirements.module.css";

const Requirements = () => {
  return (
    <div className={styles.container} id="Requirements">
      <div className={styles.h2}>
        <h2>System Requirements</h2>
      </div>
      <div>
        <div className={styles.container2}>
          <div className={styles.firstContainer}>
            <p>So: "Windows 7 SP1, Windows 8.1, Windows 10 (64-bit)."</p>
            <p>Procesador: "2.3 GHz Dual Core o equivalente."</p>
          </div>
          <div className={styles.secondContainer}>
            <p>Graphics: "GeForce GTS 450-class (Intel HD 4000)."</p>
            <p>Ram: "4 GB"</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requirements;
