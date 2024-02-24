import Image from "next/image";
import React, { ReactNode } from "react";
import LayoutAdmin from "../../../layoutAdmin/index";
import styles from "../styles/dashboard.module.css";
import diagram from "../../../public/images/diagram.svg";
import diagram2 from "../../../public/images/diagram2.svg";

interface DashboardProps {
  children: ReactNode;
}

export default function Dashboard() {
  return (
    <LayoutAdmin>
      <main className={styles.main}>
        <div className={styles.dashboardContent}>
          <div className={styles.boxSmall}>
            <span className={styles.orders}>Products</span>
            <div className={styles.imageContainer}>
              <Image src={diagram} alt="diagram" className={styles.diagram} />
              <div className={styles.caption}>
                <span className={styles.keyword}>KFC</span>
                <span className={styles.keyword}>KLM</span>
                <span className={styles.keyword}>AMERICAN EXPRESS</span>
              </div>
            </div>
          </div>

          <div className={styles.boxBig}>
            <span className={styles.total}>Total Salary</span>
            <p className={styles.year}>Years</p>
            <div className={styles.imageContainer}>
              <Image src={diagram2} alt="diagram2" className={styles.diag} />
              <div className={styles.caption}>
                <span className={styles.keyword}>February</span>
                <span className={styles.keyword}>March</span>
                <span className={styles.keyword}>April</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.dashboardContent}>
          <div className={styles.boxBig2}>
            <span className={styles.orders}>Assigned Risks</span>
            <span className={styles.imageContainer}>
              There are no risks assigned.
            </span>
          </div>
          <div className={styles.boxSmall2}>
            <span className={styles.orders}>Assigned Action Items</span>
            <span className={styles.imageContainer}>
              There are no action items assigned.
            </span>
          </div>
        </div>
      </main>
    </LayoutAdmin>
  );
}
