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
            <ul>
              <li>
                <strong>So: </strong>
                {gameStore?.game?.response?.so}
              </li>
              <li>
                <strong>Procesador: </strong>
                {gameStore?.game?.response?.procesador}
              </li>
            </ul>
          </div>
          <div className={styles.secondContainer}>
            <ul>
              <li>
                <strong>Graphics: </strong>
                {gameStore?.game?.response?.graphics}
              </li>
              <li>
                <strong>Ram: </strong>
                {gameStore?.game?.response?.ram}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requirements;
