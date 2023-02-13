import React from "react";
import styles from './Presentacion.module.css'

const Presentacion = (()=> {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <img src="../../assets/nebulaIsotipe.png" className={styles.imagen} alt="" />
            </div>
        </div>
    )
})

export default Presentacion 