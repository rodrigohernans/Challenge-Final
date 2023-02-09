import ContainerCarousel from "../carousel/Carosuel";
import { Link } from "react-scroll";
import React from "react";
import Requirements from "../../requerimientos/Requirements";
import styles from "./cardDetails.module.css";

function CardDetails() {
  return (
    <div className={styles.containerGeneral}>
      <div className={styles.containerCard}>
        <div className={styles.firstContainer}>
          <div className={styles.containerImage}>
            <img
              src="https://images.ctfassets.net/j95d1p8hsuun/29peK2k7Ic6FsPAVjHWs8W/06d3add40b23b20bbff215f6979267e8/NW_OPENGRAPH_1200x630.jpg"
              alt=""
              className={styles.imagen}
            />
          </div>
          <div className={styles.info}>
            <p className={styles.titulo}>New World</p>
            <p className={styles.description}>
              Half-Life: Alyx es el regreso de Valve en realidad virtual a la
              serie Half-Life. Es la historia de una lucha imposible contra una
              cruel raza alienígena conocida como la Alianza que se desarrolla
              entre los acontecimientos de Half-Life y Half-Life 2
            </p>
            <div className={styles.downInfo}>
              <img
                src="https://img.icons8.com/windows/256/windows-10.png"
                alt=""
                className={styles.window}
              />
              <img
                src="https://img.icons8.com/ios/256/mac-os.png"
                alt=""
                className={styles.window}
              />
              <img
                src="https://img.icons8.com/ios/256/favorite-cart.png"
                alt=""
                className={styles.carrito}
              />
            </div>
          </div>
          <div className={styles.moreInfo}>
            <Link
              className={styles.button}
              to="carousel2"
              smooth={true}
              duration={500}
            >
              Explore more images
            </Link>
          </div>
          <div className={styles.moreInfo}>
            <Link
              to="Requirements"
              className={styles.button}
              smooth={true}
              duration={500}
            >
              Check the requirements
            </Link>
          </div>
        </div>

        <div className={styles.secondContainer}>
          <div className={styles.containerImage2}>
            <img
              src="https://media.wired.co.uk/photos/60f1af69a98458eddde4f111/16:9/w_2560%2Cc_limit/World_Brightwood.jpg"
              alt=""
              className={styles.mainImage}
              
            id="carousel2"
            />
          </div>
          <div className={styles.containerP}>
            <p className={styles.category}>Category: mmorpga</p>
            <p className={styles.developer}>Developer: Fulano de tal</p>
          </div>
          <ContainerCarousel />
        </div>
      </div>
      <div className={styles.containerReq} >
      <Requirements/>
      </div>
    </div>
  );
}

export default CardDetails;

/* 
<p className={styles.category}>Category: MMARPGA</p>
<p className={styles.developer}>Developer: Fulano de tal</p>
*/
