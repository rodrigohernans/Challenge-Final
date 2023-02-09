import styles from "./Requirements.module.css";
import { useSelector } from "react-redux";

const Requirements = () => {

  const gameStore = useSelector((store) => store?.games);

  return (
    <div className={styles.container} id="Requirements">
      <div className={styles.h2}>
        <h2>System Requirements</h2>
      </div>
      <div>
        <div className={styles.container2}>
          <div className={styles.firstContainer}>
            <p>So: {gameStore?.game?.response?.so}</p>
            <p>Procesador: {gameStore?.game?.response?.procesador} </p>
          </div>
          <div className={styles.secondContainer}>
            <p>Graphics: {gameStore?.game?.response?.graphics} </p>
            <p>Ram: {gameStore?.game?.response?.ram} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requirements;
