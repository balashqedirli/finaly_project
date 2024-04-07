import kfcPhotos from "../../../public/images/french.png";
import { NextPage } from "next";
import Image from "next/image";
import { FormattedMessage, useIntl } from "react-intl";
import React from "react";
import styles from "../../../styles/French/French.module.css";

export default function ClientMenu() {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <h1 className={styles.text}>
            Menu That Always Make You Fall In Love
          </h1>

          <p className={styles.paragraph}>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </p>
        </div>

        <div className={styles.imageContainer}>
          <Image src={kfcPhotos} alt="foody" />
        </div>
      </div>
    </div>
  );
}
