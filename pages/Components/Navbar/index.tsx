import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { FormattedMessage, useIntl } from "react-intl";
import Language from "../../../Components/language/Language";
import styles from "../../../styles/Navbar/navbar.module.css";
import Link from "next/link";
import { useAuth } from "../../AuthContext/Authcontext";
import Avatar from "../../../public/images/avatar.svg";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logout();
      router.push("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

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
          {user ? (
            <div className={styles.avatar} onClick={toggleDropdown}>
              <img src="/images/avatar.svg" alt="Avatar" />
              {isDropdownOpen && (
                <div className={styles.dropdownContent}>
                  <Link className={styles.menuItem} href="/Profile">
                    Profile
                  </Link>
                  <Link className={styles.menuItem} href="/YourBasket">
                    Your Basket
                  </Link>
                  <Link className={styles.menuItem} href="/YourOrders">
                    Your Orders
                  </Link>
                  <Link className={styles.menuItem} href="/Checkout">
                    Checkout
                  </Link>
                  <button onClick={handleLogout}>Logout</button>
                </div>
              )}
            </div>
          ) : (
            <Link href="/Login">
              <button className={styles.signUpBtn}>Sign up</button>
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}
