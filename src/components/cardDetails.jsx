import React from "react";
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
          <p className={styles.titulo}>New World</p>
          <div className={styles.info}>
            <p className={styles.description}>
              Half-Life: Alyx es el regreso de Valve en realidad virtual a la
              serie Half-Life. Es la historia de una lucha imposible contra una
              cruel raza alienígena conocida como la Alianza que se desarrolla
              entre los acontecimientos de Half-Life y Half-Life 2.
            </p>
            <p className={styles.category}>Category: MMARPGA</p>
            <p className={styles.devoper}>Developer: Fulano de tal</p>
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
        </div>
				<div className={styles.moreInfo}>
					<p>Explore more images ↓</p>
				</div>
				<div className={styles.secondContainer}>
					<img src="https://media.wired.co.uk/photos/60f1af69a98458eddde4f111/16:9/w_2560%2Cc_limit/World_Brightwood.jpg" alt="" className={styles.imagen} />
					<div className={styles.containerCarousel}>
						<img src="https://cdn.gamebrott.com/wp-content/uploads/2020/04/NewWorld_Combat_01_1920x1080.jpg" alt="" className={styles.imgCarousel} />
						<img src="https://images.ctfassets.net/j95d1p8hsuun/2AMihG9mdiHtgZSY0MaoaT/7ec0c6fb358c19ba9cfe4ce537befdc4/header---image.jpg" alt="" className={styles.imgCarousel}/>
						<img src="https://tm.ibxk.com.br/2021/10/21/21160847753349.jpg?ims=1200x675" alt="" className={styles.imgCarousel}/>
						<img src="https://s1.gaming-cdn.com/images/products/9771/orig/new-world-deluxe-edition-deluxe-edition-pc-juego-steam-cover.jpg?v=1648052857" alt="" className={styles.imgCarousel}/>
					</div>
				</div>
      </div>
    </div>
  );
}

export default CardDetails;