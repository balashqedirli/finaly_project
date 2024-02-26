import React, { useState } from "react";
import styles from "../styles/sidebar.module.css";
import Image from "next/image";
import DashboardIcon from "../../../public/images/dashboard.svg";
import ProductsIcon from "../../../public/images/products.svg";
import RestaurantsIcon from "../../../public/images/restaurants.svg";
import CategoryIcon from "../../../public/images/category.svg";
import OrdersIcon from "../../../public/images/orders.svg";
import OfferIcon from "../../../public/images/offer.svg";
import LogoutIcon from "../../../public/images/logout.svg";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.item}>
          <Image src={DashboardIcon} alt="Dashboard" />
          <Link href="/admin/Dashboard">
            <span>Dashboard</span>
          </Link>
        </div>
        <div className={styles.item}>
          <Image src={ProductsIcon} alt="Products" />
          <Link href="/admin/Products">
            <span>Products</span>
          </Link>
        </div>

        <div className={styles.item}>
          <Image src={RestaurantsIcon} alt="Restaurants" />
          <Link href="/admin/Restaurants">
            <span>Restaurants</span>
          </Link>
        </div>
        <div className={styles.item}>
          <Image src={CategoryIcon} alt="Category" />
          <Link href="/admin/Category">
            <span>Category</span>
          </Link>
        </div>
        <div className={styles.item}>
          <Image src={OrdersIcon} alt="Orders" />
          <Link href="/admin/Orders">
            <span>Orders</span>
          </Link>
        </div>
        <div className={styles.item}>
          <Image src={OfferIcon} alt="Offer" />
          <Link href="/admin/Offer">
            <span>Offer</span>
          </Link>
        </div>
        <div className={styles.item}>
          <Image src={LogoutIcon} alt="Logout" />
          <Link href="/admin/Logout">
            <span>Logout</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
