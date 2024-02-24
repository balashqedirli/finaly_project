import Navbar from "../pages/admin/Navbar/index";
import Sidebar from "../pages/admin/Sidebar/index";
import Footer from "../pages/admin/Footer/index";
import styles from "./layoutAdmin.module.css";

import React, { ReactNode } from "react";

interface LayoutAdminProps {
  children: ReactNode;
}

export default function LayoutAdmin({ children }: LayoutAdminProps) {
  return (
    <div className={styles.bck}>
      <Navbar />
      <div className={styles.box}>
        <Sidebar />

        <main className={styles.main}>{children}</main>
        
        
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}



