import { Link as Anchor } from "react-router-dom";
import React from "react";
import styles from "../footer/footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <section  className={styles.section1}>
        <div className={styles.sectionButtons}>
          <Anchor className={styles.buttonFooter}>Contact us</Anchor>
          <Anchor to='./store' className={styles.buttonFooter}>Store</Anchor>
          <Anchor to='./shopping-cart' className={styles.buttonFooter}>Shopping cart</Anchor>
        </div>
        <div className={styles.sectionIcons}>
          <Anchor className={styles.buttonIcon}>
            <img
              className={styles.imgIcon}
              src="../../assets/facebook.png"
              alt=""
            />
          </Anchor>
          <Anchor className={styles.buttonIcon}>
            <img
              className={styles.imgIcon}
              src="../../assets/twitch.png"
              alt=""
            />
          </Anchor>
          <Anchor className={styles.buttonIcon}>
            <img
              className={styles.imgIcon}
              src="../../assets/twitter.png"
              alt=""
            />
          </Anchor>
        </div>
      </section>
      <section className={styles.section2}>
        <img  className={styles.footerLogo} src="../../assets/nebulaIsotipe.png" alt="" />
      </section>
      <section className={styles.section3}>
      <div className={styles.textFooter}>© 2023 Nebula. All Rights Reserved</div>
      <div className={styles.textFooter}>
      <Anchor to='./termsandconditions' className={styles.textFooterTerms}>Terms and Conditions</Anchor>
        </div>
      <div className={styles.textFooter}>Privacy policy</div>

      </section>
    </div>
  );
};

export default Footer;
