import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { FormattedMessage, useIntl } from "react-intl";
import Language from "../../../Components/language/Language";
import styles from "../../../styles/Navbar/navbar.module.css";
import Link from "next/link";

export default function Navbar() {

 
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>Foody.</div>
        <div className={styles.menu}>
          <Link className={styles.menuItem} href="/">
            Home
          </Link>
          <Link className={styles.menuItem} href="/Restaurants">
            Restaurants
          </Link>
          <Link className={styles.menuItem} href="/AboutUs">
            About us
          </Link>
          <Link className={styles.menuItem} href="/HowItWorks">
            How it works
          </Link>
          <Link className={styles.menuItem} href="/FAQs">
            FAQs
          </Link>
        </div>
        <div className={styles.searchLanguageSignup}>
          <div className={styles.searchBar}>
            <input className={styles.input} type="text" placeholder="Search" />
          </div>
          <div className={styles.languageContainer}>
            <Language />
          </div>
          <Link href="/Login" >
      <button className={styles.signUpBtn}>Sign up</button>
    </Link>
        </div>
      </nav>
    </div>
  );
}

