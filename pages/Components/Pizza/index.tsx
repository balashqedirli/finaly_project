import kfcPhotos from "../../../public/images/papaJohns.png";
import { NextPage } from "next";
import Image from "next/image";
import { FormattedMessage, useIntl } from "react-intl";
import React from "react";
import styles from "../../../styles/Pizza/Pizza.module.css";

export default function Pizza() {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
      
        <div className={styles.imageContainer}>
          <Image src={kfcPhotos} alt="foody" />
        </div>

        <div className={styles.content}>
          <h1 className={styles.text}>
          Yummy Always Papa John’s Pizza.Agree?
          </h1>

          <p className={styles.paragraph}>
          Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
          </p>
        </div>

      </div>
    </div>
  );
}
