import React from "react";
import { useOrder } from "../../pages/contexts/OrderContext";
import LayoutClient from "../../layoutClient/index";
import ProfileSidebar from "../ProfileSidebar";
import styles from "../../styles/Orders/Orders.module.css";
import Footer from "../Components/Footer";
import DeleteIcon from "../../public/images/delete.svg";
import Image from "next/image";

interface Order {
  deliveryAddress: string;
  paymentMethod: string;
  contactNumber: string;
}

export default function Orders() {
  const { orders, removeOrder } = useOrder();

  const handleDelete = (index: number) => {
    removeOrder(index);
  };

  return (
    <LayoutClient>
      <main className={styles.main}>
        <div className={styles.container}>
          <ProfileSidebar />
          <div className={styles.tableContainer}>
            <table className={styles.table}>
              <thead className={styles.thead}>
                <tr>
                  <th>Row</th>
                  <th>Delivery Address</th>
                  <th>Payment Method</th>
                  <th>Contact</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order: Order, index: number) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{order.deliveryAddress}</td>
                    <td>{order.paymentMethod}</td>
                    <td>{order.contactNumber}</td>
                    <td>
                      <button
                        onClick={() => handleDelete(index)}
                        className={styles.deleteButton}
                      >
                        <Image src={DeleteIcon} alt="Delete" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <Footer />
      </main>
    </LayoutClient>
  );
}

