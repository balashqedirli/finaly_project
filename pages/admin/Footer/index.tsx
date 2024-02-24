import React from "react";
import footersIcon from "../../../public/images/footer.svg";
import styles from "../styles/footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.iconContainer}>
          <Image src={footersIcon} alt="FooterIcon" className={styles.icon} />
        </div>
        <div className={styles.textContainer}>
          <p className={styles.text}>EACAMP</p>
          <p className={styles.version}>version: 1.0</p>
          <p className={styles.year}>2024</p>
        </div>
      </div>
    </div>
  );
}
