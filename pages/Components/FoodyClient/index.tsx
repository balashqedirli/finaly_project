import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { FormattedMessage, useIntl } from "react-intl";
import React from "react";
import styles from "../../../styles/FoodyClient/Home.module.css";
import photos from "../../../public/images/foodyImages.svg";
import pizza from "../../../public/images/pizza.svg";
import french from "../../../public/images/frenchPatato.svg";
import cheesburgers from "../../../public/images/cheesburgers.svg";
import LayoutClient from "../../../layoutClient/index";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <LayoutClient>
      <main>
        <div className={styles.container}>
          <div className={styles.contentContainer}>
            <div className={styles.content}>
              <h1 className={styles.text}>
                Our Food site makes it<br></br> easy to find local food
              </h1>

              <p className={styles.paragraph}>
                Lorem ipsum is placeholder text commonly used<br></br> in the
                graphic, print, and publishing industries for<br></br>{" "}
                previewing layouts and visual mockups.
              </p>
              <Link href="/Register" >
              <button className={styles.btn}>Register</button>
              </Link>
              <button className={styles.btnn}>Order now</button>
            </div>

            <div className={styles.imageContainer}>
              <div>
                <Image src={photos} alt="foody" className={styles.bigImage} />

                <div
                  className={styles.imageWithCaption}
                  style={{ top: "10px", right: "10px" }}
                >
                  <Image src={pizza} alt="Pizza" />
                  <div className={styles.caption}>Pizza Hut Yummy</div>
                </div>
                <div
                  className={styles.imageWithCaption}
                  style={{ bottom: "10px", left: "10px" }}
                >
                  <Image src={french} alt="French Fries" />
                  <div className={styles.caption}>French Fries Yummy</div>
                </div>
                <div
                  className={styles.imageWithCaption}
                  style={{ top: "10px", left: "10px" }}
                >
                  <Image src={cheesburgers} alt="Cheeseburger" />
                  <div className={styles.caption}>Cheeseburger Yummy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </LayoutClient>
  );
};

export default Home;
