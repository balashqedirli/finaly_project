import React from "react";
import LayoutClient from "../../layoutClient/index";
import styles from "../../styles/AboutUs/AboutUs.module.css";
import Image from "next/image";
import hamburger from "../../public/images/aboutHamburger.svg";
import pizza from "../../public/images/AboutPizza.svg";
import soup from "../../public/images/AboutSoup.svg";
import coffe from "../../public/images/AboutCoffe.svg";
import background from '../../public/images/background.png';
import Footer from "../Components/Footer";
const Index = () => {
  return (
    <LayoutClient>
      <main>
        <div className={styles.container}>
          <div className={styles.contentContainer}>
            <div className={styles.content}>
              <h1 className={styles.text}>
                About Us
              </h1>

              <p className={styles.paragraph}>
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
              </p>
            </div>

            <div className={styles.imageContainer}>
              <div>
                <Image src={background} alt="foody" className={styles.bigImage} />

                <div
                  className={styles.imageWithCaption}
                  style={{ top: "10px", right: "10px" }}
                >
                  <Image src={hamburger} alt="hamburger" />
                  <div className={styles.caption}>Hamburger</div>
              
                </div>
                <div
                  className={styles.imageWithCaption}
                  style={{ bottom: "10px", left: "10px" }}
                >
                  <Image src={pizza} alt="pizza" />
                  <div className={styles.caption}>Sosuage Pizza</div>
                </div>
                <div
                  className={styles.imageWithCaption}
                  style={{ top: "10px", left: "10px" }}
                >
                  <Image src={soup} alt="soup" />
                  <div className={styles.caption}>Tomato soup</div>
                </div>
                <div
                  className={styles.imageWithCaption}
                  style={{ bottom: "10px", right: "10px" }}
                >
                  <Image src={coffe} alt="Coffe" />
                  <div className={styles.caption}>Papa Coffe</div>
                </div>
              </div>
            </div>
           
          </div>
        </div>
        <Footer />
      </main>
    </LayoutClient>
  );
};

export default Index;
