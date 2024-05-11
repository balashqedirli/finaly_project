import React, { useState } from "react";
import LayoutClient from "../../layoutClient";
import ProfileSidebar from "../ProfileSidebar";
import styles from "../../styles/Checkout/Checkout.module.css";
import Footer from "../Components/Footer";
import { useOrder } from "../contexts/OrderContext";

export default function Checkout() {
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("door");
  const { addOrder } = useOrder();

  const handleCheckout = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addOrder({ deliveryAddress, contactNumber, paymentMethod });
  };

  return (
    <LayoutClient>
      <main>
        <div className={styles.container}>
          <ProfileSidebar />
          <div className={styles.checkoutContainer}>
            <form onSubmit={handleCheckout}>
              <h2 className={styles.Checkout}>Checkout</h2>
              <div className={styles.formGroup}>
                <label htmlFor="deliveryAddress">Delivery Address</label>
                <input
                  type="text"
                  placeholder="Ataturk 45 Ganclik Baku"
                  id="deliveryAddress"
                  value={deliveryAddress}
                  onChange={(e) => setDeliveryAddress(e.target.value)}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="contactNumber">Contact Number</label>
                <input
                  type="tel"
                  placeholder="+994"
                  id="contactNumber"
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                />
              </div>
              <div className={styles.formGroup}>
                <label>Payment Method</label>
                <div className={styles.radioGroup}>
                  <label>
                    <input
                      type="radio"
                      value="door"
                      checked={paymentMethod === "door"}
                      onChange={() => setPaymentMethod("door")}
                    />
                    pay at the door
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="card"
                      checked={paymentMethod === "card"}
                      onChange={() => setPaymentMethod("card")}
                    />
                    pay at the door by credit card
                  </label>
                </div>
              </div>
              <button type="submit" className={styles.checkoutButton}>
                Checkout
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </main>
    </LayoutClient>
  );
}
