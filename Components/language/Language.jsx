import React from "react";
import { useRouter } from "next/router";
import azerbaijanFlag from "../../public/images/Azerbaijan.png";
import englishFlag from "../../public/images/English.png";
import russianFlag from "../../public/images/Russia.png";
import Image from "next/image";
import styles from './language.module.css';


export default function Language() {
  const router = useRouter();
  const [showFlags, setShowFlags] = React.useState(false);

  const toggleFlags = () => {
    setShowFlags(!showFlags);
  };

  const handleFlagClick = (locale) => {
    router.push(router.pathname, router.asPath, { locale });
    setShowFlags(false);
  };

  return (
    <div className={styles.languageContainer}>
      <button onClick={toggleFlags} className={styles.flagButton}>
        <Image src={englishFlag} alt="English Flag" width={50} height={30} />
      </button>
      {showFlags && (
        <div className={styles.flagsDropdown}>
          <button onClick={() => handleFlagClick("az")} className={styles.flagButton}>
            <Image
              src={azerbaijanFlag}
              alt="Azerbaijan Flag"
              width={50}
              height={30}
            />
          </button>
          <button onClick={() => handleFlagClick("en")} className={styles.flagButton}>
            <Image
              src={englishFlag}
              alt="English Flag"
              width={50}
              height={30}
            />
          </button>
          <button onClick={() => handleFlagClick("ru")} className={styles.flagButton}>
            <Image
              src={russianFlag}
              alt="Russian Flag"
              width={50}
              height={30}
            />
          </button>
        </div>
      )}
    </div>
  );
}
