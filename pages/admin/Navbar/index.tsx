import styles from "../styles/navbar.module.css";
import Image from "next/image";
import admin from "../../../public/images/admin.png";
import { FormattedMessage, useIntl } from "react-intl";
import Language from "../../../Components/language/Language";
import ProductButton from "../ProductButton/index";



export default function Navbar() {
  

  return (
    <div className={styles.container}>
      <div className={styles.leftContent}>
        <h2 className={styles.food}>Foody</h2>
      </div>
      <div className={styles.rightContent}>
        <div className={styles.navbar}>
       
         <ProductButton  />

          <div className={styles.lang}>
            <Language />
          </div>

          <Image src={admin} alt="adminsvg" className={styles.adminbtn} />
          <p className={styles.adminsvg}>Admin</p>
        </div>
      </div>
    
   
    </div>
  );
}
