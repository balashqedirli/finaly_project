import React, { useState } from "react";
import styles from '../styles/sidebar.module.css';
import Image from "next/image";
import DashboardIcon from "../../../public/images/dashboard.svg";
import ProductsIcon from "../../../public/images/products.svg";
import RestaurantsIcon from "../../../public/images/restaurants.svg";
import CategoryIcon from "../../../public/images/category.svg";
import OrdersIcon from "../../../public/images/orders.svg";
import OfferIcon from "../../../public/images/offer.svg";
import LogoutIcon from "../../../public/images/logout.svg";

export default function Sidebar() {
  





  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.item}>
          <Image src={DashboardIcon} alt="Dashboard" />
          <span>Dashboard</span>
        </div>
        <div className={styles.item}>
          <Image src={ProductsIcon} alt="Products" />
          <span>Products</span>
        </div>
        <div className={styles.item}>
          <Image src={RestaurantsIcon} alt="Restaurants" />
          <span>Restaurants</span>
        </div>
        <div className={styles.item}>
          <Image src={CategoryIcon} alt="Category" />
          <span>Category</span>
        </div>
        <div className={styles.item}>
          <Image src={OrdersIcon} alt="Orders" />
          <span>Orders</span>
        </div>
        <div className={styles.item}>
          <Image src={OfferIcon} alt="Offer" />
          <span>Offer</span>
        </div>
        <div className={styles.item}>
          <Image src={LogoutIcon} alt="Logout" />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
}

