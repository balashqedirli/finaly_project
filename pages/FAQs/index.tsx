import React from "react";
import LayoutClient from "../../layoutClient/index";
import styles from "../../styles/FAQs/Faqs.module.css";
import { useState } from "react";
import Footer from "../Components/Footer";

const FAQs = () => {
  const [showGeneralSettings, setShowGeneralSettings] = useState(false);
  const [showAnotherFAQ, setShowAnotherFAQ] = useState(false);
  const [showThirdFAQ, setShowThirdFAQ] = useState(false);
  const [showFourthFAQ, setShowFourthFAQ] = useState(false);

  return (
    <LayoutClient>
      <main>
        <div className={styles.container}>
        <h1 className={styles.faqTitle}>FAQs</h1>
        <div
          className={styles.faqBox}
          onClick={() => setShowGeneralSettings(!showGeneralSettings)}
        >
          <h2>
            General Settings
            <span
              className={
                showGeneralSettings ? styles.arrowUp : styles.arrowDown
              }
            ></span>
          </h2>
          {showGeneralSettings && (
            <p>
              Nunc Vitae Orci Ultricies, Auctor Nunc In, Volutpat Nisl. Integer
              Sit Amet Egestas Eros, Vitae Egestas Augue. Duis Vel Est Augue.
            </p>
          )}
        </div>
        <div
          className={styles.faqBox}
          onClick={() => setShowAnotherFAQ(!showAnotherFAQ)}
        >
          <h2>
            Another FAQ
            <span
              className={showAnotherFAQ ? styles.arrowUp : styles.arrowDown}
            ></span>
          </h2>
          {showAnotherFAQ && (
            <p>
              Another FAQ Content Lorem Ipsum dolor sit amet, consectetur
              adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          )}
        </div>
        <div
          className={styles.faqBox}
          onClick={() => setShowThirdFAQ(!showThirdFAQ)}
        >
          <h2>
            Third FAQ
            <span
              className={showThirdFAQ ? styles.arrowUp : styles.arrowDown}
            ></span>
          </h2>
          {showThirdFAQ && (
            <p>
              Third FAQ Content Lorem Ipsum dolor sit amet, consectetur
              adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          )}
        </div>
        <div
          className={styles.faqBox}
          onClick={() => setShowFourthFAQ(!showFourthFAQ)}
        >
          <h2>
            Fourth FAQ
            <span
              className={showFourthFAQ ? styles.arrowUp : styles.arrowDown}
            ></span>
          </h2>
          {showFourthFAQ && (
            <p>
              Fourth FAQ Content Lorem Ipsum dolor sit amet, consectetur
              adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          )}
        </div>
        </div>
        <Footer />
       
      </main>
    </LayoutClient>
  );
};

export default FAQs;
