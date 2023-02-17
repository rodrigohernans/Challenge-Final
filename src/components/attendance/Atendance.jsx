import { Link as Anchor } from "react-router-dom"
import React from "react";
import styles from "./Atendance.module.css";
import { useNavigate } from "react-router";

function Attendance() {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.modal}>
        <div className={styles.modalContenedor}>
          <div className={styles.text}>
            <p className={styles.description}> Attendance</p>
          </div>

          <div className={styles.cards}>
            <div className={styles.containerCard}>
              <p className={styles.donate}>
                "Customer Support: We are available 24/7 to assist you with any
                issues related to games, stores, and accounts. If you need help
                or have any questions, don't hesitate to contact us using the
                contact form below or by sending us an email directly to contact
                email address. We are here to help with anything you need! Our
                team is committed to providing fast and efficient support. We
                aim to respond to all queries within 24 hours. If you prefer to
                speak to someone directly, we also offer phone support and live
                chat services. We offer support in multiple languages so that we
                can assist you in your native language.
              </p>
              <div className={styles.containerPrice}></div>
            </div>
          </div>

          <div className={styles.containerOther}>
            <div className={styles.email}>
              <a href="mailto:Nebula@gmail.com">Nebula@gmail.com</a>
            </div>
            <div className={styles.number}>
              <a href="tel:+1 555-123-4567">(54) 555-123-4567</a>
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
          </div>
          <div className={styles.containerButton}>
            <button className={styles.x} onClick={() => navigate("/home")}>
              Home
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Attendance;
