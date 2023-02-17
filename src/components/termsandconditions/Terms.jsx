import { Link as Anchor } from "react-router-dom";
import React from "react";
import styles from "./Terms.module.css";
import { useNavigate } from "react-router";

function Terms() {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.modal}>
        <div className={styles.modalContenedor}>
          <div className={styles.text}>
            <p className={styles.description}>TERMS AND CONDITIONS</p>
          </div>
          <div className={styles.cards}>
            <div className={styles.containerCard}>
              <div className={styles.conditions}>
                <p className={styles.terms}>
                  1. Acceptance of terms and conditions
                </p>
                <p>
                  By accessing our website and making a purchase, you agree to
                  the terms and conditions set forth in this document. If you do
                  not agree with these terms and conditions, we recommend that
                  you do not use our website.
                </p>
                <p className={styles.terms}>2. Product Information</p>
                <p>
                  We strive to provide accurate and up-to-date information about
                  all the products we sell. However, we cannot guarantee that
                  the information is completely accurate or free from errors. If
                  you have any questions about a product, please contact us
                  before making a purchase.
                </p>
                <p className={styles.terms}>3. Pricing and Payment</p>
                <p>
                  All prices for our products are in the currency stated on our
                  website. We reserve the right to change prices at any time
                  without notice. Payment is required at the time of purchase,
                  and we accept various payment methods, including credit cards
                  and PayPal.
                </p>
                <p className={styles.terms}>4. Shipping</p>
                <p>
                  We will deliver the product to the address specified in the
                  order. We are not responsible for any delay or non-delivery
                  caused by incorrect or incomplete address information provided
                  by the customer. Shipping costs will be calculated based on
                  the shipping method selected by the customer.
                </p>
                <p className={styles.terms}>5. Returns and Refunds </p>
                <p>
                  If you are not satisfied with your purchase, you may return it
                  within 14 days of receiving it for a full refund. The product
                  must be in its original condition and packaging. We are not
                  responsible for the cost of return shipping.
                </p>
                <p className={styles.terms}>6. Limitation of Liability</p>
                <p>
                  We are not responsible for any damages, including but not
                  limited to direct, indirect, special, or consequential
                  damages, that may result from the use of our products or
                  website. Our liability is limited to the purchase price of the
                  product.
                </p>
                <p className={styles.terms}>7. Intellectual Property</p>
                <p>
                  All intellectual property rights related to the products,
                  including but not limited to copyrights, trademarks, and
                  patents, are owned by their respective owners.
                </p>
                <p className={styles.terms}>8. Governing Law</p>
                <p className={styles.last}>
                  These terms and conditions are governed by and construed in
                  accordance with the laws of the jurisdiction in which we
                  operate. Any dispute arising out of these terms and conditions
                  will be subject to the jurisdiction of the courts in that
                  jurisdiction. By making a purchase from our website, you
                  acknowledge that you have read and agree to these terms and
                  conditions.
                </p>
              </div>
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

export default Terms;
