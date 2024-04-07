import photos from "../public/images/ErrorPages.svg";
import styles from "../styles/ErrorPages/Custom404.module.css";
import React from "react";
import LayoutClient from "../layoutClient/index";
import Image from "next/image";
import Footer from "./Components/Footer/index";

export default function Custom404() {
  return (
    <LayoutClient>
      <main>
        <div className={styles.errorPhotos}>
          <Image src={photos} alt="photo" />
        </div>
        <Footer />
      </main>
    </LayoutClient>
  );
}
