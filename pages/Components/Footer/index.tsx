import Image from "next/image";
import facebook from "../../../public/images/facebook.svg";
import instagram from "../../../public/images/instagram.svg";
import twitter from "../../../public/images/twitter.svg";
import mixedPizza from "../../../public/images/mixedPizza.svg";
import pepperoni from "../../../public/images/pepperoni.svg";
import styles from "../../../styles/Footer/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.featuredContent}>
        <div className={styles.featuredBox}>
          <div className={styles.featuredImages}>
            <Image src={mixedPizza} alt="Mixed Pizza" className={styles.img} />
          </div>
          <div className={styles.featuredContentText}>
            <h2>Discover Restaurants Near From you</h2>
            <button className={styles.exploreButton}>Explore now</button>
          </div>
          <div className={styles.featuredImages}>
            <Image src={pepperoni} alt="Burger" className={styles.img} />
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.footerSection}>
          <span className={styles.brandName}>Foody.</span>
          <p>Lorem ipsum is placeholder text commonly used in the graphic.</p>
          <div className={styles.socialLinks}>
            <a href="https://www.facebook.com" target="_blank">
              <Image src={facebook} alt="Facebook" />
            </a>
            <a href="https://www.instagram.com" target="_blank">
              <Image src={instagram} alt="Instagram" />
            </a>
            <a href="https://www.twitter.com" target="_blank">
              <Image src={twitter} alt="Twitter" />
            </a>{" "}
          </div>
        </div>
        <div className={styles.footerSection}>
          <h5>Popular</h5>
          <ul>
            <li>Programming</li>
            <li>Books for children</li>
            <li>Psychology</li>
            <li>Business</li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h5>Cash</h5>
          <ul>
            <li>Delivery</li>
            <li>Payment</li>
            <li>About the store</li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h5>Help</h5>
          <ul>
            <li>Contacts</li>
            <li>Purchase returns</li>
            <li>Buyer help</li>
          </ul>
        </div>
      </div>
      <div className={styles.footerRights}>
        <p>
          All rights reserved © 2003-2023 Foody TERMS OF USE | Privacy Policy
        </p>
      </div>
    </footer>
  );
}

export default Footer;
